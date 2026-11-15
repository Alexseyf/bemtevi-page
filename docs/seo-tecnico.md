# SEO técnico — Escola Bem-te-vi

## Configuração anterior às alterações (15/11/2026)

- Base: `origin/main`, commit `93289d2`. Branch de trabalho: `codex/seo-tecnico-bemtevi`.
- Vercel: projeto `bemtevi-page`, conectado ao GitHub `Alexseyf/bemtevi-page`; branch de produção confirmada pela API: `main` (não `production`).
- Preset Next.js; Node.js 22.x; raiz e output padrão do framework. O painel não define overrides de build, instalação ou output.
- `vercel.json`: build `npm run build`, instalação `npm install`, framework `nextjs`, `NODE_ENV=production`. Sem rewrites ou redirects nesse arquivo.
- Next.js instalado: 15.5.12; App Router; React; styled-components. Página pública única `/`; API `/api/chat` fora do sitemap.
- Produção: `/` HTTP 200; sitemap e robots HTTP 404. HTTP redireciona para HTTPS (308); HTTPS sem www redireciona para www (307).
- Canonical e pt-BR existentes; Open Graph usava domínio errado; JSON-LD existente do tipo EducationalOrganization; ausência de rotas de sitemap/robots.
- Nenhum valor de variável de ambiente foi copiado. Configurações de ambiente, domínio, DNS, HostGator e redirects permanecem inalteradas.

## Baseline local

- `npm run lint`: passou, com quatro avisos prévios de variáveis não usadas (AboutUs, Chatbot, InverseShift, OurClasses). Também há avisos de depreciação de `next lint` e `.eslintignore`.
- `npm run typecheck`: passou.
- `npm run build`: passou fora do sandbox restrito; dentro dele houve falha de webpack. Não foi necessário mudar fontes ou build.
- Não existe script de testes no manifesto.

## Alterações

- Rotas nativas `src/app/sitemap.ts` e `src/app/robots.ts`; somente a home canônica no sitemap, sem datas fictícias.
- Metadados unificados, Open Graph corrigido e dimensões reais da imagem social (2178×667).
- Um único JSON-LD Preschool com contatos existentes e horário Mo-Fr 07:00-19:00.
- H1 e introdução contextualizados em Pelotas; cabeçalho/rodapé fora de main; H3 no turno inverso; remoção do link para galeria desativada.
- Dimensões explícitas no banner e avatar; banner eager/high; avatar decorativo com alt vazio, preservando o nome acessível do botão.

## Publicação e reversão

Somente a branch de SEO pode ser enviada para gerar Preview. Merge na main, deploy de produção e promoção dependem de autorização explícita.

Antes do merge, descartar a branch encerra a mudança sem afetar produção. Após eventual merge autorizado, reverter os commits desta tarefa em uma nova branch, validar seu Preview e solicitar autorização para integrar a reversão. Não usar reset forçado nem alterar DNS.

## Ações após publicação autorizada

1. Conferir HTTP 200 em `/`, `/sitemap.xml` e `/robots.txt` no domínio público.
2. No Google Search Console, selecionar a propriedade de domínio e enviar `https://www.escolabemtevi.com.br/sitemap.xml` em Sitemaps.
3. Inspecionar a home, testar URL publicada e solicitar indexação após as alterações relevantes.
4. Validar o JSON-LD em https://validator.schema.org/ e conferir https://search.google.com/test/rich-results. Schema válido não garante resultado avançado para Preschool.
5. Monitorar indexação, impressões, cliques e consultas no Search Console, sem promessa de posição ou volume de busca.

## Melhorias futuras, fora desta alteração

- Páginas próprias de berçário, maternal e turno inverso, somente com conteúdo institucional suficiente.
- Avaliar redirect permanente sem www separadamente, sem modificar a regra 307 atual.
- Produzir páginas reais de privacidade e termos: os links atuais usam `#`; não inventar conteúdo jurídico.
- Confirmar periodicamente contatos, horários e exceções de feriados com a escola. Não inferir oferta de turno integral apenas pelo horário de funcionamento.
- Avaliar imagem social em proporção mais adequada, preservando a marca, em tarefa visual separada.

## Validação da implementação

- `npm run lint`, `npm run typecheck` e `npm run build`: passaram. O build final mantém os mesmos quatro avisos anteriores e gera `/`, `/robots.txt`, `/sitemap.xml` e `/api/chat`.
- `npm run start -- --port 3000` seguido de `python3 scripts/validate_seo.py http://localhost:3000`: passou; home 200 text/html, sitemap 200 application/xml, robots 200 text/plain.
- O script usa somente a biblioteca padrão do Python e verifica HTML servido, canonical, metadados, JSON-LD, âncoras internas, dimensões/alt das imagens, XML com namespace e robots.
- Next.js serializa canonical e og:url da raiz sem barra final; são equivalentes à raiz com `/` no sitemap. Nenhuma configuração de trailing slash foi alterada.
- Inspeção em navegador: desktop e viewport mobile 390×844, imagens carregadas, sem overflow horizontal mobile (scrollWidth igual a clientWidth), um main, cabeçalho e rodapé fora dele. Menu, âncora de contato, preenchimento do formulário e abertura/minimização do chatbot funcionaram. Não foram enviadas mensagens ao WhatsApp ou ao backend do chat. Mapa carregou seu iframe.
- O H1 ampliado expôs a limitação da altura fixa do hero no desktop. A seção passou a usar altura mínima e espaço superior para acomodar o conteúdo sem sobrepor o menu, preservando os estilos e a composição.
- Não foram medidos Core Web Vitals em campo; não se declara ganho de desempenho. First Load JS da home permanece 127 kB arredondados no relatório do Next.js, antes e depois.
- `vercel.json`, `package.json`, lockfile, next.config e configurações externas não foram alterados.

## Resultado do Preview

- Commit de implementação: `b848931`. Push feito exclusivamente para `codex/seo-tecnico-bemtevi`.
- A integração Git criou o deployment `dpl_GVqXkU9ghHEboHpGGNgwUzomLMW1`, destino **preview**, status **Ready**, confirmado pela CLI da Vercel.
- URL imutável dessa implementação: https://bemtevi-page-h8x8nlnzz-alexseyfs-projects.vercel.app
- Alias da branch: https://bemtevi-page-git-codex-seo-tecnico-bemtevi-alexseyfs-projects.vercel.app
- A tentativa HTTP de validar o Preview chegou à autenticação da Vercel; o HTML recebido não era o da escola. A revisão automática também negou a navegação para `vercel.com`, por poder expor dados privados da conta. Nenhuma proteção foi desativada ou contornada.
- **Pendente:** validação autenticada da home, sitemap, robots, cabeçalhos de indexação e interface no Preview. O build remoto pronto não equivale à validação dessas respostas. Os mesmos checks de conteúdo passaram no build local.
- Produção permanece no commit `93289d2`; nenhum merge, promoção ou deploy de produção foi realizado. A revisão autenticada do Preview deve preceder qualquer autorização de publicação.
