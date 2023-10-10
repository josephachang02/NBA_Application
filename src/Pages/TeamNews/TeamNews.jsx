import React, { useEffect, useState } from 'react';
import '../../App.css';
import { fetchNbaNews } from '../NBA_News/fetchNBANews';
import { useGlobalState } from '../../Components/context/context';
import { nbaTeams } from '../Home/team';
import axios from 'axios';

const TeamNews = () => {
  const { selectedLogo } = useGlobalState();
  const [teamNews, setTeamNews] = useState([]);

  useEffect(() => {
    const getTeamNews = async () => {
      try {
        if (selectedLogo) {
          const selectedTeam = nbaTeams.find((team) => team.name === selectedLogo.name);
        if (selectedTeam) {
            const options = {
              method: 'GET',
              url: 'https://nba-latest-news.p.rapidapi.com/articles',
              params: { team: selectedTeam.name },
              headers: {
                'X-RapidAPI-Key': '84672acda9msh20abd455bb006b3p18a164jsn485a74247cf7',
                'X-RapidAPI-Host': 'nba-latest-news.p.rapidapi.com'
              }
            };

            
            const response = await axios.request(options);
            console.log(response.data);
            setTeamNews(response.data.slice(0, 25));
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    getTeamNews();
  }, [selectedLogo]);


// the news data included an additional parameter for the team name, however i am having issue showing that list of news articles for the specified team. 
  return (
    <div id="content">
      {selectedLogo && (
        <h1 className="title">{selectedLogo.name} News</h1>
      )}
      <div className="news-list">
        {teamNews.map((article, index) => (
          <div key={index} className="news-item">
            {article.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamNews;