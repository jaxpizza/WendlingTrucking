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
          <p>Wendling Trucking started as a necessity for hauling corn and soybeans from our family farm fields and storage grain bins to a nearby Frito-Lay grain processing unit. What began as a simple solution for our sixth-generation family farm has grown into a trusted hauling service with over 15 years of experience serving Frito-Lay and the broader Central Illinois community.</p>
          <p>For over two decades, Wendling Trucking has been the cornerstone of reliable transportation in Central Illinois. Based near Broadlands, we've built our reputation on a foundation of trust, efficiency, and an intimate understanding of our local community's unique needs.</p>
          <p>Today, Wendling Trucking continues to be an integral part of the Central Illinois agricultural community and supply chain. Our fleet of well-maintained vehicles and team of experienced drivers ensure safe, efficient transportation for a wide range of cargo - from grain and agricultural products to construction materials. We remain committed to providing personalized, reliable service that meets the evolving needs of our diverse clientele, from local family farms to larger operations across the region.</p>
          <CtaButton href="#contact">Schedule a Haul</CtaButton>
        </AboutText>
        <AboutImage src="/images/about-wendling-trucking.jpg" alt="Wendling Trucking fleet" />
      </AboutContent>
    </AboutSection>
  );
};

export default About;