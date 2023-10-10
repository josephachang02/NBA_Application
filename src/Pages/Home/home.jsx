import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { nbaTeams } from './team';
import "./home.css"
import { useGlobalState } from '../../Components/context/context';
import '../../App.css'

const NbaTeams = () => {
  const [apiTeams, setApiTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const { selectedLogo, setSelectedLogo} = useGlobalState();
  


  useEffect(() => {
    
    const apiUrl = 'https://www.balldontlie.io/api/v1/teams';

  
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

  // Function to match API-fetched teams with static teams based on team name
  const mergeTeams = () => {
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

  const mergedTeams = mergeTeams();

  const handleLogoClick = (team) => {
    setSelectedLogo(team);
  };

  return (
    <div id="content">
      <h1 class="title">NBA Teams</h1>
      
        <div className="team-buttons-container">
          {mergedTeams.map((team) => (
            <button
              key={team.id}
              className="team-button"
              onClick={() => handleLogoClick(team)}
            >
              <img
                src={team.logo}
                alt={`${team.full_name} Logo`}
                style={{ maxHeight: '100px', maxWidth: '100px' }}
              />
            </button>
          ))}
        </div>
      
    </div>
  );
};

export default NbaTeams;