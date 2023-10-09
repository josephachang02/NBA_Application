import { Link } from 'react-router-dom';
import '../../App.css'
import { useGlobalState } from '../context/context';

const Sidebar = () => {
    const { selectedLogo } = useGlobalState();

  // Check if selectedTeam is available and has colors
//   const selectedTeamColors = selectedTeam ? selectedTeam.colors : [];

  // Set the updatedNavbarBackgroundColor to the first color of the selected team or the default color

  
  return (
    <div id= "sidebar" 
    style={{ backgroundColor: selectedLogo.color[1], display: 'flex', flexDirection: 'column', alignItems: 'center'}}
    >
      <Link to="/TeamSchedule" >
        <button style={{ backgroundColor: selectedLogo.color[2], margin: '35px'}}>Team Schedule</button>
      </Link>
      <Link to="/TeamStats" >
        <button style={{ backgroundColor: selectedLogo.color[2], marginBottom: '35px'}}>Team Stats</button>
      </Link>
      <Link to="/TeamNews" >
        <button style={{ backgroundColor: selectedLogo.color[2], marginBottom: '35px'}}>Team News</button>
      </Link>
      <Link to="/LiveTeam" >
        <button style={{ backgroundColor: selectedLogo.color[2], marginBottom: '35px'}}>Live Team Games</button>
      </Link>
    </div>
  )
};

export default Sidebar