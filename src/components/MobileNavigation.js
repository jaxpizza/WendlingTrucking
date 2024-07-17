import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const MobileNavContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1000;
`;

const HamburgerIcon = styled.div`
  width: 30px;
  height: 3px;
  background-color: var(--white);
  position: relative;
  transition: all 0.3s linear;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: var(--white);
    transition: all 0.3s linear;
  }

  &::before {
    transform: ${({ isOpen }) =>
      isOpen ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0) translate(0px, -10px)'};
  }

  &::after {
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
    transform: ${({ isOpen }) =>
      isOpen ? 'rotate(90deg) translate(10px, 0px)' : 'rotate(0) translate(0px, 10px)'};
  }
`;

const NavMenu = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 250px;
  background-color: var(--primary-red);
  padding: 2rem;
  z-index: 999;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 2rem;
`;

const NavItem = styled.li`
  margin-bottom: 1rem;
`;

const NavLink = styled(Link)`
  color: var(--white);
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
`;

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <MobileNavContainer>
      <HamburgerButton onClick={toggleMenu}>
        <HamburgerIcon isOpen={isOpen} />
      </HamburgerButton>
      <AnimatePresence>
        {isOpen && (
          <NavMenu
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <NavList>
              <NavItem>
                <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/#services" onClick={toggleMenu}>Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/#about" onClick={toggleMenu}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/blog" onClick={toggleMenu}>Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/#contact" onClick={toggleMenu}>Contact</NavLink>
              </NavItem>
            </NavList>
          </NavMenu>
        )}
      </AnimatePresence>
    </MobileNavContainer>
  );
};

export default MobileNavigation;