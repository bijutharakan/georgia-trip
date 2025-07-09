import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { itineraryData } from '../data/itinerary'

const Navigation = () => {
  const location = useLocation()
  
  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-container">
          <Link 
            to="/" 
            className={`nav-button ${location.pathname === '/' ? 'active' : ''}`}
          >
            <span className="day-number">Overview</span>
          </Link>
          
          {itineraryData.map((day) => (
            <Link
              key={day.id}
              to={`/day/${day.id}`}
              className={`nav-button ${location.pathname === `/day/${day.id}` ? 'active' : ''}`}
            >
              <span className="day-number">{day.day}</span>
              <span className="day-title">{day.subtitle}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation