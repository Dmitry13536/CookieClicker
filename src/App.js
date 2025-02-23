import './App.css';
import CookieClick from './Components/CookieClick';
import CookieCount from './Components/CookieCount';
import Menu from './Components/Menu';
import Home from './Components/Routes/Home';
import About from './Components/Routes/About';
import Options from './Components/Routes/Options';
import Skins from './Components/Routes/Skins';
import Store from './Components/Routes/Store';
import BackgroundMusic from './Components/Backgraund';
import { useCookie } from './App/Store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import music from './imgs/music1.mp3';
import useLargeScreen from './IsDesktop';
import UpgradeMenuClick from './Components/UpgradeMenuClick';
import UpgradeMenu from './Components/UpgradeMenu';


function App() {
  const intervalRef = useRef(null);
  const {autoCookie} = useCookie((state) => state);
  const screen = useLargeScreen();

  useEffect(() => {
    intervalRef.current = setInterval(autoCookie, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [autoCookie]); 

  if (!screen) {
    return (
      <BrowserRouter>
        <div className="App">
          <p className="title">Cookie clicker</p>
          <CookieClick />
          <CookieCount />
          <Menu />
          <BackgroundMusic src={music} />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/skins" element={<Skins />} />
          <Route path="/options" element={<Options />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="column1">
            <p className='column1--title'>Auto</p>
            <UpgradeMenu />
          </div>
          <div className="column2">
            <p className="title">Cookie clicker</p>
            <CookieClick />
            <CookieCount />
            <Menu />
          </div>
          <div className="column1">
            <p className='column1--title'>Click</p>
            <UpgradeMenuClick />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/skins" element={<Skins />} />
          <Route path="/options" element={<Options />} />
        </Routes>
        <BackgroundMusic src={music} />
      </BrowserRouter>
    );
  }
}


export default App;
