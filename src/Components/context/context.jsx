import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { nbaTeams } from '../../Pages/Home/team';

const GlobalStateContext = createContext();

export function useGlobalState() {
  return useContext(GlobalStateContext);
}

export function GlobalStateProvider({ children }) {
  const [selectedLogo, setSelectedLogo] = useState(
    {logo: 'https://images.ctfassets.net/h8q6lxmb5akt/5qXnOINbPrHKXWa42m6NOa/421ab176b501f5bdae71290a8002545c/nba-logo_2x.png',
  color: ["#C9082A", "#17408B"]}
  );
  const [apiTeams, setApiTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [navbarBackgroundColor, setNavbarBackgroundColor] = useState("#C9082A");
  const [sidebarBackgroundColor, setSidebarBackgroundColor] = useState("#17408B");
  const [mergedTeams, setMergedTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] =useState([]);
  

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

  useEffect(() => {
    // Call mergeTeams function to merge the data

    
    const mergedData = mergeTeams(apiTeams);
    // Set the mergedTeams state
    setMergedTeams(mergedData);
  
    const matchingSelectedTeam = mergedData.find((team) => team.logo === selectedLogo);
    setSelectedTeam(matchingSelectedTeam);
  }, [apiTeams, selectedLogo]);  // Update mergedTeams when apiTeams changes

  // Function to match API-fetched teams with static teams based on team name
  const mergeTeams = (apiTeams) => {
    const mergedTeams = apiTeams.map((apiTeam) => {
      const matchingTeam = nbaTeams.find(
        (staticTeam) => staticTeam.city === apiTeam.city
      );

      if (matchingTeam) {
        return {
          ...apiTeam,
          color: matchingTeam.colors,
          logo: matchingTeam.logo,
        };
      }

      return apiTeam;
    });

    return mergedTeams;
  };
console.log(selectedLogo);
console.log(mergedTeams);
console.log(setSelectedLogo);
  return (
    <GlobalStateContext.Provider value={{ selectedLogo, setSelectedLogo, apiTeams, loading, navbarBackgroundColor, sidebarBackgroundColor, mergedTeams, selectedTeam }}>
      {children}
    </GlobalStateContext.Provider>
  );
};