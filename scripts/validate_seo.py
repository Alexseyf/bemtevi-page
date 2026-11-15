"""Validate the served SEO output: python3 scripts/validate_seo.py BASE_URL."""
import json
import sys
from html.parser import HTMLParser
from urllib.request import urlopen
from urllib.parse import urlsplit
import xml.etree.ElementTree as ET

CANONICAL = 'https://www.escolabemtevi.com.br/'


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags = []
        self.schema = []
        self.json_ld = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.tags.append((tag, attrs))
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.json_ld = ''

    def handle_data(self, data):
        if self.json_ld is not None:
            self.json_ld += data

    def handle_endtag(self, tag):
        if tag == 'script' and self.json_ld is not None:
            self.schema.append(json.loads(self.json_ld))
            self.json_ld = None

    def matching(self, tag, **attrs):
        return [a for t, a in self.tags if t == tag and all(a.get(k) == v for k, v in attrs.items())]


def fetch(base, path, content_type):
    with urlopen(base + path, timeout=30) as response:
        assert urlsplit(response.url).netloc == urlsplit(base).netloc, (
            'Redirect to another host; authenticate in the Preview before validation', path
        )
        assert response.status == 200, (path, response.status)
        assert content_type in response.headers.get('Content-Type', ''), path
        body = response.read().decode()
        print(path, response.status, response.headers.get('Content-Type'),
              'X-Robots-Tag:', response.headers.get('X-Robots-Tag', '(absent)'))
        return body


def validate(base):
    html = fetch(base, '/', 'text/html')
    page = Page()
    page.feed(html)
    assert len(page.matching('title')) == 1
    assert 'Escola Infantil e Berçário em Pelotas | Bem-te-vi' in html
    assert len(page.matching('meta', name='description')) == 1
    canonical = page.matching('link', rel='canonical')
    assert len(canonical) == 1
    # Next.js serializes root metadata URLs without the equivalent trailing slash.
    assert canonical[0]['href'] in (CANONICAL, CANONICAL.rstrip('/'))
    assert page.matching('html', lang='pt-BR')
    assert len(page.matching('h1')) == 1
    for name in ['og:title', 'og:description', 'og:image', 'og:url']:
        assert len(page.matching('meta', property=name)) == 1, name
    assert page.matching('meta', property='og:url')[0]['content'] in (CANONICAL, CANONICAL.rstrip('/'))
    assert page.matching('meta', name='twitter:card')[0]['content'] == 'summary_large_image'
    assert 'noindex' not in page.matching('meta', name='robots')[0]['content']
    assert len(page.schema) == 1
    schema = page.schema[0]
    assert schema['@type'] == 'Preschool' and schema['url'] == CANONICAL
    assert schema['openingHours'] == 'Mo-Fr 07:00-19:00'
    assert schema['address']['addressLocality'] == 'Pelotas'
    assert 'aggregateRating' not in schema
    ids = {a['id'] for _, a in page.tags if 'id' in a}
    for a in page.matching('a'):
        href = a.get('href', '')
        if href.startswith('#') and len(href) > 1:
            assert href[1:] in ids, href
    for img in page.matching('img'):
        assert 'alt' in img and 'width' in img and 'height' in img
    assert 'No Centro de Pelotas, um ambiente acolhedor' in html
    manifest = page.matching('link', rel='manifest')
    assert len(manifest) == 1 and manifest[0].get('crossorigin') == 'use-credentials'
    xml = fetch(base, '/sitemap.xml', 'xml')
    root = ET.fromstring(xml)
    ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
    assert root.tag == '{http://www.sitemaps.org/schemas/sitemap/0.9}urlset'
    assert [n.text for n in root.findall('s:url/s:loc', ns)] == [CANONICAL]
    assert not root.findall('s:url/s:lastmod', ns)
    robots = fetch(base, '/robots.txt', 'text/plain')
    assert 'User-Agent: *' in robots and 'Allow: /' in robots
    assert 'Sitemap: ' + CANONICAL + 'sitemap.xml' in robots
    assert 'noindex' not in robots.lower() and 'Disallow:' not in robots
    print('PASS: HTML, canonical, metadata, JSON-LD, anchors, images, XML and robots')


if __name__ == '__main__':
    validate(sys.argv[1].rstrip('/'))
