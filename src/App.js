import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header.js";
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Header/>
        <Navbar/>

    </div>
  );
}

export default App;
