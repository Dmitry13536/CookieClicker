import './App.css';
import CookieClick from './Components/CookieClick';
import CookieCount from './Components/CookieCount';
import Menu from './Components/Menu';
import Home from './Components/Routes/Home';
import About from './Components/Routes/About';
import Options from './Components/Routes/Options';
import Skins from './Components/Routes/Skins';
import Store from './Components/Routes/Store';
import { useCookie } from './App/Store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useRef } from 'react';


function App() {
  const intervalRef = useRef(null);
  const {autoCookie} = useCookie((state) => state)

  useEffect(() => {
    intervalRef.current = setInterval(autoCookie, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [autoCookie]); 


  return (
    <BrowserRouter>
    <div className="App">
      <p className='title'>Cookie clicker</p>
      <CookieClick />
      <CookieCount />
      <Menu />
    </div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />}/>
      <Route path='/store' element={<Store />}/>
      <Route path='/skins' element={<Skins />}/>
      <Route path='/options' element={<Options/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
