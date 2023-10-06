import React from 'react';
import { useGlobalState } from '../context/context';
import "../../App.css"

const Logo = () => {

  const { selectedLogo } = useGlobalState();

  console.log(selectedLogo);
  return (
    <div id ="logo">
      <img
        src={selectedLogo.logo}
        alt="Selected Logo"
        style={{ maxHeight: '200px', maxWidth: '200px', backgroundColor: 'white' }}
      />
    </div>
  );
};

export default Logo;