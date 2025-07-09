import React from 'react'
import { Link } from 'react-router-dom'
import { itineraryData, tripStats } from '../data/itinerary'

const HomePage = () => {
  return (
    <div className="page-container">
      <div className="container">
        <div className="home-content">
          <div className="journey-overview fade-in-up">
            <h2 className="script-font" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '30px', color: '#FF9A8B' }}>
              Your Journey Through Georgia
            </h2>
            <p className="journey-description body-font" style={{ textAlign: 'center', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 50px', color: '#666' }}>
              Embark on an unforgettable 8-day adventure through Georgia's most captivating destinations. 
              From ancient caves to coastal beauty, cultural treasures to natural wonders, 
              this carefully crafted itinerary offers the perfect blend of history, nature, and relaxation.
            </p>
          </div>
          
          <div className="route-visualization fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="route-map">
              <div className="route-path">
                <div className="route-city" data-city="Kutaisi">
                  <span className="city-marker">📍</span>
                  <span className="city-name">Kutaisi</span>
                </div>
                <div className="route-arrow">→</div>
                <div className="route-city" data-city="Tbilisi">
                  <span className="city-marker">📍</span>
                  <span className="city-name">Tbilisi</span>
                </div>
                <div className="route-arrow">→</div>
                <div className="route-city" data-city="Batumi">
                  <span className="city-marker">📍</span>
                  <span className="city-name">Batumi</span>
                </div>
                <div className="route-arrow">→</div>
                <div className="route-city" data-city="Kutaisi">
                  <span className="city-marker">📍</span>
                  <span className="city-name">Kutaisi</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="days-grid">
            {itineraryData.map((day, index) => (
              <Link
                key={day.id}
                to={`/day/${day.id}`}
                className="day-card card fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="tape-effect"></div>
                
                <div className="day-image polaroid">
                  <img src={day.image} alt={day.title} />
                </div>
                
                <div className="day-content">
                  <div className="day-header">
                    <h3 className="day-number script-font">{day.day}</h3>
                    <span className="day-date">{day.date}</span>
                  </div>
                  
                  <h4 className="day-title heading-font">{day.title}</h4>
                  <p className="day-subtitle body-font">{day.subtitle}</p>
                  <p className="day-description body-font">{day.description}</p>
                  
                  <div className="day-stats">
                    <span className="activity-count">
                      {day.activities.length} activities
                    </span>
                    <span className="time-range">{day.timeRange}</span>
                  </div>
                  
                  <div className="day-highlights">
                    {day.activities.slice(0, 3).map((activity, i) => (
                      <span key={i} className="highlight-item">
                        {activity.name}
                      </span>
                    ))}
                    {day.activities.length > 3 && (
                      <span className="more-activities">
                        +{day.activities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="trip-highlights fade-in-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="script-font" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '30px', color: '#FF9A8B' }}>
              Trip Highlights
            </h3>
            <div className="highlights-grid">
              {tripStats.highlights.map((highlight, index) => (
                <div key={index} className="highlight-card card">
                  <div className="highlight-icon">
                    {highlight === 'Caves' && '🕳️'}
                    {highlight === 'Cathedrals' && '⛪'}
                    {highlight === 'Black Sea' && '🌊'}
                    {highlight === 'Wine Tasting' && '🍷'}
                    {highlight === 'Cultural Sites' && '🏛️'}
                  </div>
                  <h4 className="highlight-title heading-font">{highlight}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage