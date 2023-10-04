import { Link } from 'react-router-dom';
import LiveScore from '../../pages/LiveScore';
import '../../App.css'

const Navbar = () => {
  return (
    <div id= "navbar">
    <ul>
      <Link to="/" >
        <button>Home</button>
      </Link>
      <Link to="/LiveScore" >
        <button>Live Score</button>
      </Link>
      <Link to="/LeagueLeaders" >
        <button>League Leaders</button>
      </Link>
      <Link to="/LeagueStandings" >
        <button>League Standings</button>
      </Link>
      <Link to="/NBA_News" >
        <button>NBA News</button>
      </Link>
      
    </ul>
    </div>
  )
};

export default Navbar