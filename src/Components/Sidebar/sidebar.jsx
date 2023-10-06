import { Link } from 'react-router-dom';
import '../../App.css'
import { useGlobalState } from '../context/context';

const Sidebar = () => {
    const { sidebarBackgroundColor } = useGlobalState();

  // Check if selectedTeam is available and has colors
//   const selectedTeamColors = selectedTeam ? selectedTeam.colors : [];

  // Set the updatedNavbarBackgroundColor to the first color of the selected team or the default color

  
  return (
    <div id= "sidebar" 
    style={{ backgroundColor: sidebarBackgroundColor}}
    >
      <Link to="/TeamSchedule" >
        <button>Team Schedule</button>
      </Link>
      <Link to="/TeamStats" >
        <button>Team Stats</button>
      </Link>
      <Link to="/TeamNews" >
        <button>Team News</button>
      </Link>
      <Link to="/LiveTeam" >
        <button>Live Team Games</button>
      </Link>
    </div>
  )
};

export default Sidebar