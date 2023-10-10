import React, { useEffect, useState } from 'react';
import '../../App.css';
import { fetchNbaNews } from './fetchNBANews';

const NBA_News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNbaNews = async () => {
      try {
        const newsData = await fetchNbaNews();
        setNews(newsData);
      } catch (error) {
        console.error(error);
      }
    };

    getNbaNews();
  }, []);


  // this returns the list of articles headlining the NBA, emojis are contained within the text, but it would be nice to see image src included within this data
  
  return (
    <div id="content">
      <h1 class="title">NBA News</h1>
      <ul>
        {news.map((article, index) => (
          <li key={index}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default NBA_News;