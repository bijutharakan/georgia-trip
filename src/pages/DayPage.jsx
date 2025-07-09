import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { itineraryData } from '../data/itinerary'
import LocationCard from '../components/LocationCard'

const DayPage = () => {
  const { dayId } = useParams()
  const day = itineraryData.find(d => d.id === parseInt(dayId))
  
  if (!day) {
    return (
      <div className="page-container">
        <div className="container">
          <div className="error-message">
            <h2>Day not found</h2>
            <Link to="/" className="btn btn-primary">Back to Overview</Link>
          </div>
        </div>
      </div>
    )
  }
  
  const currentDayIndex = itineraryData.findIndex(d => d.id === parseInt(dayId))
  const previousDay = currentDayIndex > 0 ? itineraryData[currentDayIndex - 1] : null
  const nextDay = currentDayIndex < itineraryData.length - 1 ? itineraryData[currentDayIndex + 1] : null
  
  return (
    <div className="page-container">
      <div className="container">
        <div className="day-header-section fade-in-up">
          <div className="day-hero">
            <div className="day-image-container">
              <div className="day-image polaroid">
                <img src={day.image} alt={day.title} />
              </div>
            </div>
            
            <div className="day-info">
              <h1 className="day-title script-font">{day.day}: {day.title}</h1>
              <p className="day-subtitle heading-font">{day.subtitle}</p>
              <p className="day-description body-font">{day.description}</p>
              
              <div className="day-meta">
                <div className="meta-item">
                  <span className="meta-label">Date:</span>
                  <span className="meta-value">{day.date}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Duration:</span>
                  <span className="meta-value">{day.timeRange}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Activities:</span>
                  <span className="meta-value">{day.activities.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="day-content">
          <div className="itinerary-section">
            <h2 className="section-title script-font">Daily Itinerary</h2>
            <div className="activities-timeline">
              {day.activities.map((activity, index) => (
                <LocationCard
                  key={activity.id}
                  activity={activity}
                  index={index}
                />
              ))}
            </div>
          </div>
          
          <div className="accommodation-section card fade-in-up">
            <div className="tape-effect"></div>
            <h3 className="section-title script-font">Tonight's Stay</h3>
            <div className="accommodation-info">
              <h4 className="accommodation-name heading-font">{day.accommodation.name}</h4>
              <p className="accommodation-location body-font">{day.accommodation.location}</p>
              <div className="accommodation-details">
                <span className="rating">⭐ {day.accommodation.rating}</span>
                <span className="price">{day.accommodation.price}</span>
              </div>
            </div>
          </div>
          
          <div className="day-navigation fade-in-up">
            <div className="nav-buttons">
              {previousDay && (
                <Link to={`/day/${previousDay.id}`} className="nav-btn prev-btn">
                  <span className="nav-arrow">←</span>
                  <div className="nav-info">
                    <span className="nav-label">Previous</span>
                    <span className="nav-title">{previousDay.day}: {previousDay.subtitle}</span>
                  </div>
                </Link>
              )}
              
              <Link to="/" className="nav-btn overview-btn">
                <span className="nav-icon">🏠</span>
                <span className="nav-title">Overview</span>
              </Link>
              
              {nextDay && (
                <Link to={`/day/${nextDay.id}`} className="nav-btn next-btn">
                  <div className="nav-info">
                    <span className="nav-label">Next</span>
                    <span className="nav-title">{nextDay.day}: {nextDay.subtitle}</span>
                  </div>
                  <span className="nav-arrow">→</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DayPage