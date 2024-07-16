import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background-color: var(--light-gray);
  padding: 1.5rem;
  border-radius: 5px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
`;

const Services = () => {
  const services = [
    { title: "Grain Hauling", description: "Efficient transportation of grain for farmers and elevators." },
    { title: "Dirt Transport", description: "Reliable hauling of dirt and soil for construction projects." },
    { title: "Lime Delivery", description: "Specialized handling and transport of lime materials." },
    { title: "Chemical Transportation", description: "Safe and secure transport of various chemical products." },
  ];

  return (
    <ServicesSection id="services">
      <SectionTitle>Our Services</SectionTitle>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesSection>
  );
};

export default Services;