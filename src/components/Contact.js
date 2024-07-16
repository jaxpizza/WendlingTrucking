import React, { useState } from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
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

const ContactForm = styled.form`
  display: grid;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--light-gray);
  border-radius: 5px;
  font-size: 1rem;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--light-gray);
  border-radius: 5px;
  font-size: 1rem;
  height: 150px;
`;

const SubmitButton = styled.button`
  background-color: var(--primary-red);
  color: var(--white);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--secondary-red);
  }
`;

const MessageBanner = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  ${props => props.isError 
    ? 'background-color: #ffcccc; color: #cc0000;'
    : 'background-color: #ccffcc; color: #006600;'}
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData
        }).toString()
      });

      if (response.ok) {
        setMessage({ text: "Thank you for your message. We'll be in touch soon!", isError: false });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error(`Server responded with ${response.status}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setMessage({ text: "There was a problem submitting your message. Please try again later.", isError: true });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ContactSection id="contact">
      <SectionTitle>Contact Us</SectionTitle>
      <ContactForm 
        name="contact" 
        method="POST" 
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <FormInput
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormInput
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <FormTextarea
          name="message"
          placeholder="How can we help you?"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit" disabled={submitting}>
          {submitting ? 'Sending...' : 'Send Message'}
        </SubmitButton>
      </ContactForm>
      {message && (
        <MessageBanner isError={message.isError}>
          {message.text}
        </MessageBanner>
      )}
    </ContactSection>
  );
};

export default Contact;