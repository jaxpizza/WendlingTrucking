import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Stats from '../components/Stats';
import About from '../components/About';
import BlogPreview from '../components/BlogPreview';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Wendling Trucking - Professional Hauling Services in Central Illinois</title>
        <meta name="description" content="Wendling Trucking offers premium hauling services in Champaign County and Central Illinois for grain, dirt, lime, chemical, and more." />
      </Helmet>
      <Hero />
      <Services />
      <Stats />
      <About />
      <BlogPreview />
      <Contact />
    </>
  );
};

export default Home;