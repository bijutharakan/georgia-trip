import React from 'react'
import { tripStats } from '../data/itinerary'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content fade-in-up">
          <h1 className="script-font">Georgia Family Adventure</h1>
          <p className="subtitle">8 Days of Caves, Culture & Coastal Beauty</p>
          <p className="dates">{tripStats.startDate} - {tripStats.endDate}</p>
          
          <div className="trip-stats">
            <div className="stat-item">
              <span className="stat-value">{tripStats.totalDays}</span>
              <span className="stat-label">Days</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{tripStats.totalDistance}</span>
              <span className="stat-label">Distance</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{tripStats.cities.length}</span>
              <span className="stat-label">Cities</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{tripStats.budget}</span>
              <span className="stat-label">Budget</span>
            </div>
          </div>
        </div>
        
        <div className="doodle-arrow" style={{ top: '20px', right: '10%' }}>
          ↗
        </div>
        <div className="doodle-arrow" style={{ bottom: '20px', left: '15%' }}>
          ↙
        </div>
      </div>
    </header>
  )
}

export default Header