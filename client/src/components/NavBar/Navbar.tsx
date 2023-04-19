import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const NavContainer = styled.div({
  backgroundColor: '#87CEFA',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'space-between',
  border: '1px solid black',
  height: '30px',
  width: '100%',
  alignItems: 'center',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
})
const LogoContainer = styled.div({
  height: '100%',
})
const UserButton = styled.button({
  border: 'none',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: '#87BEFC'
  },
  maxHeight: '100%',

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