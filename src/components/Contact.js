import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  padding: 6rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  margin-bottom: 2rem;
  color: var(--primary-red);
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactIntro = styled(motion.p)`
  max-width: 800px;
  margin: 0 auto 2rem;
  font-size: 1.1rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const PhoneNumber = styled(motion.a)`
  display: inline-block;
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--primary-red);
  text-decoration: none;
  margin: 2rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: var(--secondary-red);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactHours = styled(motion.p)`
  font-size: 1rem;
  margin-top: 1rem;
  color: var(--black);
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </SectionTitle>
      <ContactIntro
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Ready to schedule a haul or have questions about our services? We're here to help! Whether you're preparing for the upcoming harvest or need assistance with construction material transport, Wendling Trucking is your local partner in Champaign County and surrounding areas.
      </ContactIntro>
      <PhoneNumber 
        href="tel:+12177226387"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        (217) 722-6387
      </PhoneNumber>
      <ContactIntro
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Give us a call to discuss your hauling needs, get a quote, or schedule a service. Our team is ready to provide you with efficient and reliable transportation solutions.
      </ContactIntro>
      <ContactHours
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        Available Monday through Friday, 7:00 AM to 6:00 PM
      </ContactHours>
    </ContactSection>
  );
};

export default Contact;