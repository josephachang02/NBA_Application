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
        setStandings(response.data.api.standings);
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
      <h1>League Standings</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Standings:</h2>
          <ul>
            {standings.map((team) => (
              <li key={team.teamId}>
                Team: {team.teamName}, Wins: {team.win}, Losses: {team.loss}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LeagueStandings