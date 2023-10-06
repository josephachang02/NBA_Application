import React from 'react';
import { useGlobalState } from '../context/context';
import "../../App.css"

const Logo = () => {

  const { selectedLogo } = useGlobalState();

  const logoImage= 
  console.log(selectedLogo);
  return (
    <div id ="logo">
      <h1>Logo Component</h1>
      <img
        src={TeamNews.logo}
        alt="Selected Logo"
        style={{ maxHeight: '200px', maxWidth: '200px', backgroundColor: 'white' }}
      />
    </div>
  );
};

export default Logo;