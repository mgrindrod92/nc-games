// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Navbar from './Components/Navbar';
import Homepage from "./Components/Homepage"
import Reviews from "./Components/Reviews"

function App() {
  return (
    <div className="App">

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Header/>
        <Navbar/>
        <Homepage/>
        <Routes>
          <Route path={'/'} element={<Homepage />} />
          <Route path={'/reviews'} element={<Reviews />} />
        </Routes>

    </div>
  );
}

export default App;
