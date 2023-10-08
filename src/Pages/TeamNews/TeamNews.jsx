import React, { useEffect, useState } from 'react';
import '../../App.css';
import { fetchNbaNews } from '../NBA_News/fetchNBANews';

const TeamNews = () => {
  const [news, setNews] = useState([]); // State to store news data

  useEffect(() => {
    // Fetch NBA news when the component mounts
    const getNbaNews = async () => {
      try {
        const newsData = await fetchNbaNews();
        setNews(newsData.slice(0, 25)); // Update the state with the first 25 news articles
      } catch (error) {
        console.error(error);
      }
    };

    getNbaNews(); // Call the function to fetch news
  }, []);

  return (
    <div id="content">
      <h1>NBA News for all Teams. Headliners</h1>
      {/* Display the news headlines here */}
      <div className="news-list">
        {news.map((article, index) => (
          <div key={index} className="news-item">
            {article.title}
          </div>
        ))}
      </div>
    </div>
  );
};
export default TeamNews;