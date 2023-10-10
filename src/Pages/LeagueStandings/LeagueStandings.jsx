import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LeagueStandings = () => {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/standings',
        params: {
          league: 'standard',
          season: '2023',
        },
        headers: {
          'X-RapidAPI-Key': '84672acda9msh20abd455bb006b3p18a164jsn485a74247cf7',
          'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        const standingsData = response.data.response;
        setStandings(standingsData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="content">
      <h1 class="title">League Standings</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Standings:</h2>
          <div>
            {standings.map((teamData, index) => (
              <div key={index}>
                {teamData.team.name}, Wins: {teamData.win.total}, Losses: {teamData.loss.total}
                <br />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
  export default LeagueStandings