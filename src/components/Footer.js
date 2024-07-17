import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--secondary-red);
  color: var(--white);
  text-align: center;
  padding: 2rem 1rem;
`;

const Footer = React.memo(() => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Wendling Trucking. All rights reserved.</p>
      <p>Serving Champaign County and surrounding areas within a 100-mile radius of Broadlands, Illinois</p>
      <p>Broadlands | Homer | Sidney | Philo | Tolono | Mahomet | Sadorus | Camargo | Allerton | Newman | Rantoul</p>
    </FooterContainer>
  );
});

export default Footer;