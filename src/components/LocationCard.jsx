import React, { useState } from 'react'
import Button from './Button'
import Modal from './Modal'

const LocationCard = ({ activity, index }) => {
  const [showModal, setShowModal] = useState(false)
  
  const openLocation = (coords, name) => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    let url
    
    if (isMobile) {
      url = `https://maps.google.com/maps?q=${coords}&t=m`
    } else {
      url = `https://www.google.com/maps/search/?api=1&query=${coords}`
    }
    
    window.open(url, '_blank')
  }
  
  const shareLocation = (locationName) => {
    if (navigator.share) {
      navigator.share({
        title: `Visit ${locationName}`,
        text: `Check out this amazing place in Georgia: ${locationName}`,
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(`Check out this amazing place in Georgia: ${locationName} - ${window.location.href}`)
      alert('Location link copied to clipboard!')
    }
  }
  
  const getActivityIcon = (type) => {
    const icons = {
      arrival: '✈️',
      attraction: '🏛️',
      nature: '🌿',
      cultural: '⛪',
      leisure: '🚶',
      travel: '🚗',
      historical: '🏛️',
      sightseeing: '👀',
      dining: '🍽️',
      wellness: '🛁',
      modern: '🌉',
      entertainment: '🎡',
      activity: '🚴'
    }
    return icons[type] || '📍'
  }
  
  return (
    <>
      <div className="location-card card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
        <div className="tape-effect"></div>
        
        <div className="location-content">
          <div className="location-header">
            <div className="location-time">
              <span className="time-badge">{activity.time}</span>
              {activity.duration && (
                <span className="duration-badge">{activity.duration}</span>
              )}
            </div>
            <div className="location-icon">
              {getActivityIcon(activity.type)}
            </div>
          </div>
          
          <h3 className="location-title heading-font">{activity.name}</h3>
          <p className="location-description body-font">{activity.description}</p>
          
          {activity.coordinates && (
            <div className="location-coordinates">
              <span className="coords-label">📍</span>
              <span className="coords-value">{activity.coordinates}</span>
            </div>
          )}
          
          <div className="location-actions">
            <Button
              variant="primary"
              size="small"
              onClick={() => openLocation(activity.coordinates, activity.name)}
              disabled={!activity.coordinates}
              className="desktop-only"
            >
              View on Maps
            </Button>
            
            <Button
              variant="secondary"
              size="small"
              onClick={() => setShowModal(true)}
              className="desktop-only"
            >
              More Info
            </Button>
            
            <Button
              variant="secondary"
              size="small"
              onClick={() => shareLocation(activity.name)}
              className="desktop-only"
            >
              Share
            </Button>
            
            <a
              href={`https://www.google.com/search?q=${activity.name}+Georgia+reviews`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary desktop-only"
            >
              Reviews
            </a>
            
            {/* Mobile Icons */}
            <div className="mobile-actions mobile-only">
              <button
                className="btn-icon"
                onClick={() => openLocation(activity.coordinates, activity.name)}
                disabled={!activity.coordinates}
                title="View on Maps"
              >
                🗺️
              </button>
              
              <a
                href={`https://www.google.com/search?q=${activity.name}+Georgia+reviews`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                title="Reviews"
              >
                ⭐
              </a>
              
              <button
                className="btn-icon"
                onClick={() => setShowModal(true)}
                title="More Info"
              >
                ℹ️
              </button>
              
              <button
                className="btn-icon"
                onClick={() => shareLocation(activity.name)}
                title="Share"
              >
                📱
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title={activity.name}
          content={
            <div className="modal-content">
              <p className="modal-description">{activity.description}</p>
              {activity.coordinates && (
                <div className="modal-info">
                  <p><strong>Location:</strong> {activity.coordinates}</p>
                  <p><strong>Type:</strong> {activity.type}</p>
                  {activity.duration && (
                    <p><strong>Duration:</strong> {activity.duration}</p>
                  )}
                </div>
              )}
              <div className="modal-actions">
                <Button
                  variant="primary"
                  onClick={() => openLocation(activity.coordinates, activity.name)}
                  disabled={!activity.coordinates}
                >
                  Open in Maps
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => shareLocation(activity.name)}
                >
                  Share Location
                </Button>
              </div>
            </div>
          }
        />
      )}
    </>
  )
}

export default LocationCard