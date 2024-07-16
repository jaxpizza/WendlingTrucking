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
      <p>&copy; {new Date().getFullYear()} Wendling Trucking. All rights reserved. | Serving Broadlands, Sidney, and Champaign County, Illinois</p>
    </FooterContainer>
  );
});

export default Footer;