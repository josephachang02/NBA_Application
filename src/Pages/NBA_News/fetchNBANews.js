import axios from 'axios';

const fetchNbaNews = async () => {
  const options = {
    method: 'GET',
    url: 'https://nba-latest-news.p.rapidapi.com/articles',
    headers: {
      'X-RapidAPI-Key': '84672acda9msh20abd455bb006b3p18a164jsn485a74247cf7',
      'X-RapidAPI-Host': 'nba-latest-news.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data; // Return the data from the API response
  } catch (error) {
    throw error; // Handle or re-throw the error if needed
  }
};

export { fetchNbaNews };