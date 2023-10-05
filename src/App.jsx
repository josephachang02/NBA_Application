import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NbaTeams from './Pages/Home/home'
import { GlobalStateProvider } from './Components/context/context'
import { Routes, Route } from 'react-router-dom'
import Logo from './Components/Logo/Logo'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/sidebar'
import LeagueLeaders from './Pages/LeagueLeaders/LeagueLeaders'
import LeagueStandings from './Pages/LeagueStandings/LeagueStandings'
import LiveScore from './Pages/LiveScore/LiveScore'
import LiveTeam from './Pages/LiveTeam/LiveTeam'
import NBA_News from './Pages/NBA_News/NBA_News'
import TeamNews from './Pages/TeamNews/TeamNews'
import TeamSchedule from './Pages/TeamSchedule/TeamSchedule'
import TeamStats from './Pages/TeamStats/TeamStats'



function App() {
    const [selectedLogo, setSelectedLogo] = useState("https://images.ctfassets.net/h8q6lxmb5akt/5qXnOINbPrHKXWa42m6NOa/421ab176b501f5bdae71290a8002545c/nba-logo_2x.png'")
    return (

  <div id="app-container">
    <GlobalStateProvider>
      <div id="logo">
        <Logo />
      </div>
      <div id="navbar">
        <Navbar />
        <Routes>
          <Route path="/" element={<NbaTeams />} />
          <Route path="/LiveScore" element={<LiveScore />} />
          <Route path="/LeagueLeaders" element={<LeagueLeaders />} />
          <Route path="/LeagueStandings" element={<LeagueStandings />} />
          <Route path="/NBA_News" element={<NBA_News />}/>
        </Routes>
      </div>
      <div id="sidebar">
        <Sidebar />
        <Routes>
          <Route path="/TeamSchedule" element={<TeamSchedule />}/>
          <Route path="/TeamStats" elements={<TeamStats />}/>
          <Route path="/TeamNews" elements={<TeamNews />}/>
        </Routes>
        </div>
      <div id="content">
    
        </div>
        </GlobalStateProvider>
      </div>
    );
  }
  
  export default App;
