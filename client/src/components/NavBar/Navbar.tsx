import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import styled from 'styled-components';

const NavContainer = styled.div({
  backgroundColor: '#87CEFA',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'space-between',
  border: '1px solid black',
})
const LogoContainer = styled.div({
})

const Navbar: React.FC = () => {



  return (
    <NavContainer className="NavContainer">
      <HamburgerMenu />
      <LogoContainer className="NavLogo">Logo</LogoContainer>
      <div></div>
    </NavContainer>
  );
};

export default Navbar;