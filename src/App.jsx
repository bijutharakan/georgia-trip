import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import DayPage from './pages/DayPage'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/day/:dayId" element={<DayPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App