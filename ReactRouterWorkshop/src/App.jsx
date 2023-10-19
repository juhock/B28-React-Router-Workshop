import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import Red from './Components/Red'
import Blue from './Components/Blue'
import Home from './Components/Home'

function App() {

  return (
    <div id="container">
    <div id="navbar">
      <Link to= "/blue">Blue</Link>
      <Link to= "/red">Red</Link>
      <Link to= "/">Home</Link>
    </div>
    <div id="main-section">
      <Routes>
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </div>
  )
}

export default App
