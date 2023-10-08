import { Link } from 'react-router-dom';
import '../../App.css'
import { useGlobalState } from '../context/context';


const Navbar = () => {
    const { selectedLogo } = useGlobalState();
  
  return (
    <div id= "navbar" 
    style={{ backgroundColor: selectedLogo.color[0],display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}
    >
    <ul>
      {/* <Link to="/" >
        <button style={{ backgroundColor: selectedLogo.color[2], margin: '20px'}}>Home</button>
      </Link> */}
      <Link to="/LiveScore" >
        <button style={{ backgroundColor: selectedLogo.color[2], margin: '20px'}}>Live Score</button>
      </Link>
      <Link to="/LeagueLeaders" >
        <button style={{ backgroundColor: selectedLogo.color[2], margin: '20px'}}>League Leaders</button>
      </Link>
      <Link to="/LeagueStandings" >
        <button style={{ backgroundColor: selectedLogo.color[2], margin: '20px'}}>League Standings</button>
      </Link>
      <Link to="/NBA_News" >
        <button style={{ backgroundColor: selectedLogo.color[2], margin: '20px'}}>NBA News</button>
      </Link>
    </ul>
    </div>
  )
};

export default Navbar