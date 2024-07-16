import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  background-image: url('/images/hero-background.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--white);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
  }
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 0 20px;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 1.5rem;
`;

const CtaButton = styled(motion.a)`
  display: inline-block;
  background-color: var(--primary-red);
  color: var(--white);
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 700;
  margin: 0.5rem;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: var(--secondary-red);
    transform: translateY(-3px);
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Expert Hauling Services in Central Illinois
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          With over 20 years of experience, Wendling Trucking delivers reliable and efficient transportation solutions for businesses and farmers across Champaign County and beyond.
        </HeroSubtitle>
        <div>
          <CtaButton
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Quote
          </CtaButton>
          <CtaButton
            href="#services"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Services
          </CtaButton>
        </div>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;