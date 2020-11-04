import React from 'react';
import logo from '../../../style/images/mydish_logo.png';
import './header.scss';

const Header = () => {
  return (
    <div id="header">
      <img src={logo} alt="MyDish logo" />
    </div>
  );
}

export default Header;
