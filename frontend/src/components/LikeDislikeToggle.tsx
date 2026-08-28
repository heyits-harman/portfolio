import React from 'react';

export function LikeDislikeToggle(){
  return(
    <div style={containerStyle}>
      <div style={toggleStyle}>
          <span>Do you like puppies?</span>
      </div>
    </div>
  )
}

const containerStyle: React.CSSProperties = {
  backgroundColor: 'red',
  display: 'flex',
  alignItems: 'flex-end',
  padding: '10px',
  boxSizing: 'border-box',
}

const toggleStyle: React.CSSProperties = {
  backgroundColor: 'black',
  borderRadius: '50px',
  width: '250px',
  paddingLeft: '10px',
  paddingRight: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '40px'
}

