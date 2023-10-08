import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../App.css';

const LeagueLeaders = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://basketapi1.p.rapidapi.com/api/basketball/tournament/441/season/22873/best-players/overall',
        headers: {
          'X-RapidAPI-Key': '84672acda9msh20abd455bb006b3p18a164jsn485a74247cf7',
          'X-RapidAPI-Host': 'basketapi1.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        console.log('API Response:', response.data); // Debugging: Log the API response
        
        // Filter NBA players based on their league (e.g., 'NBA')
        const nbaPlayers = response.data.filter((player) => player.league === 'NBA');
        
        setPlayers(nbaPlayers);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError('An error occurred while fetching data.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log('Players:', players); // Debugging: Log the 'players' state

  return (
    <div id="content">
      <h1>League Leaders</h1>
      {/* {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <ul>
            {players.map((player) => (
              <li key={player.id}>
                Player Name: {player.name}
                {/* Add other player information you want to display */}
              {/* </li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default LeagueLeaders;