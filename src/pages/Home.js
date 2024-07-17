import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Stats from '../components/Stats';
import About from '../components/About';
import BlogPreview from '../components/BlogPreview';
import Contact from '../components/Contact';

const MotionSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Wendling Trucking - Family-Owned Hauling Services in Central Illinois</title>
        <meta name="description" content="Wendling Trucking offers reliable hauling services for agriculture and construction in Champaign County, IL. Family-owned with 15+ years of experience in grain, dirt, lime, and recycling material transport." />
        <meta name="keywords" content="hauling services, agriculture transport, construction hauling, Champaign County, Central Illinois, grain transport, dirt hauling, lime delivery, recycling material transport" />
        <meta property="og:title" content="Wendling Trucking - Family-Owned Hauling Services in Central Illinois" />
        <meta property="og:description" content="Reliable hauling services for agriculture and construction in Champaign County, IL. 15+ years of experience in grain, dirt, lime, and recycling material transport." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wendlingtrucking.com" />
        <meta property="og:image" content="https://www.wendlingtrucking.com/images/wendling-trucking-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wendling Trucking - Family-Owned Hauling Services in Central Illinois" />
        <meta name="twitter:description" content="Reliable hauling services for agriculture and construction in Champaign County, IL. 15+ years of experience in grain, dirt, lime, and recycling material transport." />
        <meta name="twitter:image" content="https://www.wendlingtrucking.com/images/wendling-trucking-twitter-image.jpg" />
        <link rel="canonical" href="https://www.wendlingtrucking.com" />
      </Helmet>
      <Hero />
      <MotionSection>
        <Services />
      </MotionSection>
      <MotionSection>
        <Stats />
      </MotionSection>
      <MotionSection>
        <About />
      </MotionSection>
      <MotionSection>
        <BlogPreview />
      </MotionSection>
      <MotionSection>
        <Contact />
      </MotionSection>
    </>
  );
};

export default Home;