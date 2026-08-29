import React, { useState } from 'react';

interface ToggleButtonProps {
  onChange?: (checked: boolean) => void;
  label?: string;
}

export function ToggleButton({ onChange, label = "Toggle Switch" }: ToggleButtonProps){

  const [isToggled, setIsToggle] = useState(false);

  const handleToggle = () => {
    const newState = !isToggled;
    setIsToggle(newState);

    if(onChange){
      onChange(newState);
    }
  }

  const switchStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    width: '50px',
    height: '26px',
  };

  const inputStyle: React.CSSProperties = {
    opacity: 0,
    width: 0,
    height: 0,
  };

  const trackStyle: React.CSSProperties = {
    position: 'absolute',
    cursor: 'pointer',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: isToggled ? '#000000' : '#676767',
    borderRadius: '40px',
    transition: 'background-color 0.3s ease',
  };

  const thumbStyle: React.CSSProperties = {
    position: 'absolute',
    height: '20px',
    width: '20px',
    left: '3px',
    bottom: '3px',
    backgroundColor: 'white',
    borderRadius: '50%',
    transition: 'transform 0.3s ease',
    transform: isToggled ? 'translateX(24px)' : 'translateX(0)'
  };

  return(
    <div style={containerStyle}>
      <div style={toggleStyle}>
          <span>Do you like puppies?</span>
          <label style={switchStyle}>
            <input 
              type="checkbox" 
              checked={isToggled} 
              onChange={handleToggle}
              style={inputStyle}
              aria-label={label}
            />
            <span style={trackStyle}>
              <span style={thumbStyle} />
            </span>
          </label>

      </div>
    </div>
  )
}

const containerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-end',
  padding: '10px',
  boxSizing: 'border-box',
  height: '100px'
}

const toggleStyle: React.CSSProperties = {
  borderRadius: '50px',
  width: '210px',
  paddingLeft: '20px',
  paddingRight: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '35px',
  background: 'rgba(255, 255, 255, 0.04)',
  
  /* Blurs the content behind the element */
  backdropFilter: 'blur(3px)',
  WebkitBackdropFilter: 'blur(3px)', /* Safari support */

  /* Soft border and rounded corners for depth */
  border: '1px solid rgba(255, 255, 255, 0.3)',
  
  /* Optional subtle shadow to lift it off the desktop */
  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
}

