import React from 'react';
import HamburgerMenu from './HamburgerMenu';


const Navbar: React.FC = () => {


  
  return (
    <div className="NavContainer">
      <HamburgerMenu />
      <div className="NavLogo">Logo</div>
      <div className="HamburgerContainer"></div>
    </div>
  );
};

export default Navbar;