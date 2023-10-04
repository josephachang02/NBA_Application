import React from 'react';
import { useGlobalState } from '../context/context';

const Logo = ({selectedLogo}) => {

  console.log('Selected Logo:', selectedLogo);
    
  return (
    <div id="logo">
      <img src={selectedLogo} alt="Selected Logo" style={{maxWidth: "200px", maxHeight: "200px"}}/>
    </div>
  );
}

export default Logo;