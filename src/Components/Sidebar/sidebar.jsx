import { Link } from 'react-router-dom';
import '../../App.css'

const Sidebar = () => {
  return (
    <div id ="sidebar">
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