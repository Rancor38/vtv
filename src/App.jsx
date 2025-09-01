import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Invite from './pages/Invite'
import Creep from './pages/Creep'
import './App.css'

function App() {
  return (
    <Router basename="/vtv">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invite" element={<Invite />} />
        <Route path="/creep" element={<Creep />} />
      </Routes>
    </Router>
  )
}

export default App
