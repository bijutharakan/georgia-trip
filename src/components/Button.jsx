import React from 'react'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  disabled = false, 
  className = '',
  ...props 
}) => {
  const getButtonClass = () => {
    let classes = 'btn'
    
    // Variant classes
    if (variant === 'primary') {
      classes += ' btn-primary'
    } else if (variant === 'secondary') {
      classes += ' btn-secondary'
    } else if (variant === 'icon') {
      classes += ' btn-icon'
    }
    
    // Size classes
    if (size === 'small') {
      classes += ' btn-small'
    } else if (size === 'large') {
      classes += ' btn-large'
    }
    
    // Additional classes
    if (className) {
      classes += ` ${className}`
    }
    
    // Disabled state
    if (disabled) {
      classes += ' btn-disabled'
    }
    
    return classes
  }
  
  return (
    <button
      className={getButtonClass()}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button