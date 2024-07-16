import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: ${props => props.scrolled ? 'rgba(196, 30, 58, 0.9)' : 'var(--primary-red)'};
  color: var(--white);
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Nav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    
    li {
      margin-left: 1.5rem;
      
      a {
        color: var(--white);
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s ease;
        
        &:hover {
          color: var(--light-gray);
        }
      }
    }
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer scrolled={scrolled}>
      <HeaderContent>
        <Logo to="/">Wendling Trucking</Logo>
        <Nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#about">About</a></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;