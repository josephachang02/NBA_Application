import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [selectedLogo, setSelectedLogo] = useState('default_logo_url'); // Replace with your default logo URL

  const handleClick = (logoUrl) => {
    setSelectedLogo(logoUrl);
  };

  return (
    <AppContext.Provider value={{ selectedLogo, handleClick }}>
      {children}
    </AppContext.Provider>
  );
}