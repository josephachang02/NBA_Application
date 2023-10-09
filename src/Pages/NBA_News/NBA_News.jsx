import React, { useEffect, useState } from 'react';
import '../../App.css';
import { fetchNbaNews } from './fetchNBANews';

const NBA_News = () => {
  const [news, setNews] = useState([]); // State to store news data

  useEffect(() => {
    // Fetch NBA news when the component mounts
    const getNbaNews = async () => {
      try {
        const newsData = await fetchNbaNews();
        setNews(newsData); // Update the state with the news data
      } catch (error) {
        console.error(error);
      }
    };

    getNbaNews(); // Call the function to fetch news
  }, []);

  return (
    <div id="content">
      <h1 class="title">NBA News for all Teams. Headliners</h1>
      {/* Display the news headlines here */}
      <ul>
        {news.map((article, index) => (
          <li key={index}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default NBA_News;