import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 6rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: var(--primary-red);
  font-size: 2.5rem;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div`
  p {
    margin-bottom: 1rem;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const CtaButton = styled.a`
  display: inline-block;
  background-color: var(--primary-red);
  color: var(--white);
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 700;
  margin-top: 1rem;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: var(--secondary-red);
    transform: translateY(-3px);
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <SectionTitle>About Wendling Trucking</SectionTitle>
      <AboutContent>
        <AboutText>
          <p>For over two decades, Wendling Trucking has been the cornerstone of reliable transportation in Central Illinois. Based near Broadlands, we've built our reputation on a foundation of trust, efficiency, and an intimate understanding of our local community's unique needs.</p>
          <p>Our commitment to excellence has made us a preferred partner for businesses of all sizes, from local farms to industry giants like Frito-Lay. This diverse client base showcases our ability to meet the exacting standards of major corporations while maintaining the personalized touch that our local clients value.</p>
          <p>At Wendling Trucking, we're more than just a hauling service - we're an integral part of the Central Illinois supply chain. Our fleet of meticulously maintained vehicles, coupled with our team of skilled, experienced drivers, ensures that your cargo is always in safe hands, whether it's grain from local fields or materials for construction projects.</p>
          <CtaButton href="#contact">Schedule a Consultation</CtaButton>
        </AboutText>
        <AboutImage src="/images/about-wendling-trucking.jpg" alt="Wendling Trucking fleet" />
      </AboutContent>
    </AboutSection>
  );
};

export default About;