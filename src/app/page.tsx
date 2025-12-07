"use client";

import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import OurClasses from '../components/OurClasses';
import InverseShift from '../components/InverseShift';
import ExtraActivities from '../components/ExtraActivities';
// import PhotoGallery from '../components/PhotoGallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppFloat from '../components/WhatsAppFloat';
// import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <main>
      <Header />

      <Hero />

      <AboutUs />

      <OurClasses />
 
      <InverseShift />

      <ExtraActivities />

      <Contact />

      <Footer />

      <BackToTop />
      <WhatsAppFloat />
    </main>
  );
}
