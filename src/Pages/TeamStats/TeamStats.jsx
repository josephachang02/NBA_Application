import React, { useEffect, useState } from 'react';
import '../../App.css';
import axios from 'axios';
import { useGlobalState } from '../../Components/context/context';

const TeamStats = () => {
  const { selectedLogo } = useGlobalState();
  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    if (selectedLogo) {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://api-nba-v1.p.rapidapi.com/teams/statistics', {
            params: {
              id: selectedLogo.id,
              season: '2021',
            },
            headers: {
              'X-RapidAPI-Key': '84672acda9msh20abd455bb006b3p18a164jsn485a74247cf7',
              'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
            },
          });

          if (response.data && response.data.statistics) {
            setStatistics(response.data.statistics);
          } else {
            console.error('Invalid API response structure.');
          }
        } catch (error) {
          console.error('API Response Error:', error.response);
        }
      };
    
      fetchData();
    } else {
      console.log('selectedLogo is not set');
    }
  }, [selectedLogo]);

  return (
    <div id="content">
      <h1 className="title"> {selectedLogo.name} Stats</h1>
      {statistics ? (
        <div>
          <h2>{selectedLogo.name} Statistics for 2023 Season:</h2>
          <pre>{JSON.stringify(statistics, null, 2)}</pre>
        </div>
      ) : (
        <p>{selectedLogo ? 'Loading team statistics...' : 'Click Logo to select a Team'}</p>
      )}
    </div>
  );
};

export default TeamStats;