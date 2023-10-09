import React, { useEffect, useState } from 'react';
import '../../App.css';
import { fetchNbaNews } from '../NBA_News/fetchNBANews';
import { useGlobalState } from '../../Components/context/context';
import { nbaTeams } from '../Home/team';
import axios from 'axios'; // Import axios

const TeamNews = () => {
  const { selectedLogo } = useGlobalState();
  const [teamNews, setTeamNews] = useState([]); // State to store news data for the selected team

  useEffect(() => {
    // Fetch news for the selected team when the component mounts or when selectedLogo changes
    const getTeamNews = async () => {
      try {
        if (selectedLogo) {
          // Find the team that matches the selectedLogo name
          const selectedTeam = nbaTeams.find((team) => team.name === selectedLogo.name);

          if (selectedTeam) {
            // Set up axios options with the selected team's name as the 'team' parameter
            const options = {
              method: 'GET',
              url: 'https://nba-latest-news.p.rapidapi.com/articles',
              params: { team: selectedTeam.name },
              headers: {
                'X-RapidAPI-Key': '84672acda9msh20abd455bb006b3p18a164jsn485a74247cf7',
                'X-RapidAPI-Host': 'nba-latest-news.p.rapidapi.com'
              }
            };

            // Make the axios request
            const response = await axios.request(options);
            console.log(response.data);
            setTeamNews(response.data.slice(0, 25)); // Update the state with the first 25 news articles
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    getTeamNews(); // Call the function to fetch news
  }, [selectedLogo]); // The effect runs when selectedLogo changes

  return (
    <div id="content">
      {selectedLogo && (
        <h1 className="title">{selectedLogo.name} News</h1>
      )}
      {/* Display the news headlines for the selected team here */}
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