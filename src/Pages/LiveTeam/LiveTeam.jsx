import React, { useEffect, useState } from 'react';
import '../../App.css';
import axios from 'axios';
import { useGlobalState } from '../../Components/context/context';

const LiveTeam = () => {
  const { selectedLogo } = useGlobalState();
  const [liveGames, setLiveGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (selectedLogo) {
      const fetchData = async () => {
        const currentDate = new Date().toISOString().split('T')[0];
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
          const liveGamesForTeam = response.data.response.filter((game) => {
            return (
              (game.teams.visitors.id === selectedLogo.id ||
                game.teams.home.id === selectedLogo.id) &&
              game.date.start.includes(currentDate)
            );
          });
          setLiveGames(liveGamesForTeam);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [selectedLogo]);

  return (
    <div id="content">
      <h1 className="title">{selectedLogo.name} Live Games</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {liveGames.length > 0 ? (
            <ul>
              {liveGames.map((game) => (
                <li key={game.id}>
                  <br />
                  Start Time: {new Date(game.date.start).toLocaleString()}
                  <br />
                  Visitor Team: {game.teams.visitors.name}
                  <img
                    src={game.teams.visitors.logo}
                    alt={`${game.teams.visitors.name} Logo`}
                    width="30"
                    height="30"
                  />
                  <br />
                  Home Team: {game.teams.home.name}
                  <img
                    src={game.teams.home.logo}
                    alt={`${game.teams.home.name} Logo`}
                    width="30"
                    height="30"
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p>No live games for {selectedLogo.name} today.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default LiveTeam;