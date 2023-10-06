import { Link } from 'react-router-dom';
import '../../App.css'
import { useGlobalState } from '../context/context';


const Navbar = () => {
    const { selectedLogo } = useGlobalState();

  // Check if selectedTeam is available and has colors
  // const selectedTeamColors = selectedTeam ? selectedTeam.colors : [];

  // Set the updatedNavbarBackgroundColor to the first color of the selected team or the default color
  // const updatedNavbarBackgroundColor = selectedTeamColors[0] || navbarBackgroundColor;
  
  
  return (
    <div id= "navbar" 
    style={{ backgroundColor: selectedLogo.color[0],display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}
    >
    <ul>
      <Link to="/" >
        <button style={{ backgroundColor: selectedLogo.color[2], margin: '20px'}}>Home</button>
      </Link>
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
// console.log('Merged Teams:', mergedTeams);

export default Navbar