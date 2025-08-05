import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import International from './pages/SubPages/Components/International';
import loader from './assets/trade loader.png';
import './App.css';
import ScrollgToTop from './components/ScrollToTop';
import Aviation from './pages/SubPages/Components/Aviation';
import Market from './pages/SubPages/Components/Market';
import It from './pages/SubPages/Components/It';
import Health from './pages/SubPages/Components/Health';
import Crystal from './pages/SubPages/Components/Crystal';
import Space from './pages/SubPages/Components/Space';
import NGO from './pages/SubPages/Components/NGO';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import { Completed, OnGoing } from './pages/Projects/Components/Completed';
import Hospitolity from './pages/Hospitolity/Hospitality';
import { SyncLoader } from 'react-spinners';
import Gallery from './pages/Gallery/Gallery';
import Doors from './pages/Doors/Doors';
import NavbarTest from './components/navbar/NavbarTest';
import Admin from './pages/Admin/Admin';
import Tiles from './pages/Tiles/Tiles';
import TileCatalog from './pages/Tiles/TileCatlog';
import { tileRoutes } from './pages/Tiles/Data';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {loading ? (
        <div className="loader-container">
          <img src={loader} alt="" />
          <SyncLoader size={10} color="red" />
        </div>
      ) :
        <Router>
          <NavbarTest />
          <ScrollgToTop>
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tiles" element={<Tiles />} />
                {
                  tileRoutes.map((item, index) => (
                    <Route
                      key={index}
                      path={`/tiles/${item.route}`}
                      element={<TileCatalog data={item} />}
                    />
                  ))
                }
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/hospitality" element={<Hospitolity />} />
                <Route path="/international" element={<International />} />
                <Route path="/aviation" element={<Aviation />} />
                <Route path="/market" element={<Market />} />
                <Route path="/it" element={<It />} />
                <Route path="/health" element={<Health />} />
                <Route path="/crystalline" element={<Crystal />} />
                <Route path="/space" element={<Space />} />
                <Route path="/ngo" element={<NGO />} />
                <Route path="/projects/completed" element={<Completed />} />
                <Route path="/projects/ongoing" element={<OnGoing />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/windows-doors" element={<Doors />} />
                <Route path="/trade128" element={<Admin />} />
              </Routes>
            </div>
          </ScrollgToTop>
        </Router>
      }
    </>

  );
}

export default App;
