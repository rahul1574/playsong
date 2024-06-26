import './index.js';
import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Topic1 from './components/Topic1.js';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Topic2 from './components/Topic2.js';
import Topic3 from './components/Topic3.js';
import Topic4 from './components/Topic4.js';
import Topic5 from './components/Topic5.js';
import Topic6 from './components/Topic6.js';
import Topic7 from './components/Topic7.js';
import Topic8 from './components/Topic8.js';
import Power from './components/Power.js';
function App() {
  return (
    <>
    <Router>
     <Navbar/>
     <Routes>
          <Route path="/power" element={<Power/>}>
          </Route>
          <Route path="/home" element={<Home/>}>
          </Route>
          <Route path="/topic1" element={<Topic1/>}>
          </Route>
          <Route path="/topic2" element={<Topic2/>}>
          </Route>
          <Route path="/topic3" element={<Topic3/>}>
          </Route> 
          <Route path="/topic4" element={<Topic4/>}>
          </Route>
          <Route path="/topic5" element={<Topic5/>}>
          </Route>  
          <Route path="/topic6" element={<Topic6/>}>
          </Route> 
          <Route path="/topic7" element={<Topic7/>}>
          </Route> 
          <Route path="/topic8" element={<Topic8/>}>
          </Route> 
      </Routes>
    </Router>
    </>
  );
}

export default App;
