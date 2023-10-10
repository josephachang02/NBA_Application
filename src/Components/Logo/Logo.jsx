import React from 'react';
import { useGlobalState } from '../context/context';
import "../../App.css"
import { Link } from 'react-router-dom';

const Logo = () => {

  const { selectedLogo } = useGlobalState();

  return (
    // <<div id ="logo">>
    //logo image to be part of useGlobalState to be held regardless of what page you are navigating towards
   <>
   <Link to="/">
      <img
        src={selectedLogo.logo}
        alt="Selected Logo"
        style={{
          maxHeight: '200px',
          maxWidth: '200px',
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent:"center",
          cursor: 'pointer',
        }}
      />
      </Link>
    </>
  );
};

export default Logo;