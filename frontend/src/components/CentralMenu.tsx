import React from 'react';
import expIcon from '../assets/VCIQF7ylF9U0o5QZkTgji0mxx28.avif'

export function CentralMenu(){
  return(
    <>
      <div style={containerStyle}>
        <div style={taskBarStyle}>
          <div style={iconStyle}></div>
          <div style={iconStyle}></div>
          <div style={iconStyle}></div>
          <div style={iconStyle}></div>
          <div style={iconStyle}></div>
        </div>
      </div>
    </>
  )
}

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  boxSizing: 'border-box',
  paddingBottom: '10px',
  height: '100px',
}

const taskBarStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  backgroundColor: 'black',
  height: '78px',
  width: '363px',
  borderRadius: '20px',
  flexWrap: 'nowrap',
  background: 'rgba(255, 255, 255, 0.04)',
  
  /* Blurs the content behind the element */
  backdropFilter: 'blur(3px)',
  WebkitBackdropFilter: 'blur(3px)', /* Safari support */

  /* Soft border and rounded corners for depth */
  border: '1px solid rgba(255, 255, 255, 0.3)',
  
  /* Optional subtle shadow to lift it off the desktop */
  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
}

const iconStyle: React.CSSProperties = {
  height: '60px',
  width: '60px',
  backgroundImage: `url(${expIcon})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  flex: '0 0 auto',
  borderRadius: '15px',
}