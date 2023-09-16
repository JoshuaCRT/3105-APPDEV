import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Layout1 from './Layout/Layout1';
import Layout2 from './Layout/Layout2';
import Home from './Layout/Home';
import Layout3 from './Layout/Layout3';
import Navigation from './Component/Nav';
import { SkeletonTheme } from 'react-loading-skeleton';



function App() {
  return (
    <SkeletonTheme baseColor='#313131' highlightColor='525252'>
    <Router>
      <div className="App">
        <header>
          <Navigation />
        </header>
        <div className="App-header">
          <Routes>
            <Route path="/layout1" element={<Layout1 />}>
            </Route>
            <Route path="/layout2" element={<Layout2 />}>
            </Route>
            <Route path="/" element={<Home />}>
              </Route>
              <Route path="/layout3" element={<Layout3 />}>
              </Route>
          </Routes>
        </div>
      </div>
    </Router>
    </SkeletonTheme>
  );
}

export default App;
