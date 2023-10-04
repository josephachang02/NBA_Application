import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NbaTeams from './Pages/Home/home'
import { GlobalStateProvider } from './Components/context/context'
import { Routes, Route } from 'react-router-dom'
import Logo from './Components/Logo/Logo'

  function App() {
    const [selectedLogo, setSelectedLogo] = useState("https://images.ctfassets.net/h8q6lxmb5akt/5qXnOINbPrHKXWa42m6NOa/421ab176b501f5bdae71290a8002545c/nba-logo_2x.png'")
    return (
      <div className="App">
          <GlobalStateProvider >
        <Logo selectedLogo={selectedLogo}/>
        <NbaTeams 
        selectedLogo={selectedLogo}
        setSelectedLogo={setSelectedLogo}/>
        </GlobalStateProvider>
      </div>
    );
  }
  
  export default App;
