import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../App.css';
import { nbaTeams } from '../Home/team';


const LiveScore = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'get',
        url: 'https://api-nba-v1.p.rapidapi.com/games',
        params: { live: 'all' },
        headers: {
          'X-RapidAPI-Key': '84672acda9msh20abd455bb006b3p18a164jsn485a74247cf7',
          'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setGames(response.data.response);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const getTeamInfo = (teamId) => {
    return nbaTeams.find((team) => team.id === teamId);
  };

  //currently have the live start time with the visitor and home info, but i want a score tracker based on points, response.data to find the game. info.
  return (
    <div id="content">
      <h1 class="title">NBA Live Scores</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Live Games:</h2>
          <ul>
            {games.map((game) => (
              <li key={game.id}>
                <br />
                Start Time: {new Date(game.date.start).toLocaleString()}
                <br />
                Visitor Team: {getTeamInfo(game.teams.visitors.id)?.name}
                <img
                  src={getTeamInfo(game.teams.visitors.id)?.logo}
                  alt={`${getTeamInfo(game.teams.visitors.id)?.name} Logo`}
                  width="30"
                  height="30"
                />
                <br />
                Home Team: {getTeamInfo(game.teams.home.id)?.name}
                <img
                  src={getTeamInfo(game.teams.home.id)?.logo}
                  alt={`${getTeamInfo(game.teams.home.id)?.name} Logo`}
                  width="30"
                  height="30"
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LiveScore;