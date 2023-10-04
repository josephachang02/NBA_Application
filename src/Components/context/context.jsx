import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const GlobalStateContext = createContext();

export function useGlobalState() {
  return useContext(GlobalStateContext);
}

export function GlobalStateProvider({ children }) {
  const [selectedLogo, setSelectedLogo] = useState(
    'https://images.ctfassets.net/h8q6lxmb5akt/5qXnOINbPrHKXWa42m6NOa/421ab176b501f5bdae71290a8002545c/nba-logo_2x.png'
  );
  const [apiTeams, setApiTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the API URL
    const apiUrl = 'https://www.balldontlie.io/api/v1/teams';

    // Make the API request using axios
    axios
      .get(apiUrl)
      .then((response) => {
        // Set the API-fetched teams data in state
        setApiTeams(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('API request error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <GlobalStateContext.Provider value={{ selectedLogo, setSelectedLogo, apiTeams, loading }}>
      {children}
    </GlobalStateContext.Provider>
  );
}
