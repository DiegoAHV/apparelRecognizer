import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './logo.png';

const Logo = () => {
  return (
    <Tilt className="Tilt br2 shadow-2 ml3 " options={{ max : 75 }} style={{ height: 150, width: 150 }} >
      <div className="Tilt-inner pa3"><img className="pt2" alt="company_logo" src={logo}/></div>
    </Tilt>
  )
}

export default Logo;
