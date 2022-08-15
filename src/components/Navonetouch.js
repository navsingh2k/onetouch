import React from 'react';
import "./Navonetouch.css";
import logo from './OneTouch.png';
import HamburgerDrawer from "./HamburgerDrawer"
export const Navonetouch = ({setCategory}) => {
  return (
    <div className='nav'>
      <div className='icon'>
       <HamburgerDrawer setCategory={setCategory}></HamburgerDrawer>
      </div>
      <img style={{cursor: 'pointer'}} src={logo} height='80%' alt='logo' />
      </div> 
  );
};

