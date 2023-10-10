import React, { useEffect, useState } from 'react';
import '../../App.css';
import axios from 'axios';
import { useGlobalState } from '../../Components/context/context';

///selectedLogo.id -> basketAPI: params: id to pull id for team schedule 30 days out. 
const TeamSchedule = () => {
  const { selectedLogo } = useGlobalState();
  const [teamSchedule, setTeamSchedule] = useState([]);
  const currentDate = new Date();

  useEffect(() => {
    if (selectedLogo) {
      
      const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;

      
      const fetchData = async () => {
        try {
          const response = await axios.get('https://nba-schedule.p.rapidapi.com/schedule', {
            params: {
              team: selectedLogo.abbreviation,
              date: formattedDate,
            },
            headers: {
              'X-RapidAPI-Key': '84672acda9msh20abd455bb006b3p18a164jsn485a74247cf7',
              'X-RapidAPI-Host': 'nba-schedule.p.rapidapi.com',
            },
          });
          console.log('Team Schedule:', response.data);
          setTeamSchedule(response.data); // Set the team's schedule data
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }
  }, [selectedLogo]);

  return (
    <div id="content">
      {selectedLogo && (
        <h1 className="title">{selectedLogo.name} Schedule</h1>
      )}
      <div className="schedule-list">
        {teamSchedule.map((game, index) => (
          <div key={index} className="schedule-item">
            Date: {game.date} - Opponent: {game.opponent}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSchedule;