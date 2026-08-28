import React from 'react';

export function CentralMenu(){
  return(
    <>
      <div style={containerStyle}>
        <div style={taskBarStyle}>
          <span>TaskBar</span>
        </div>
      </div>
    </>
  )
}

const containerStyle: React.CSSProperties = {
  display: 'flex',
  backgroundColor: 'green',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box'
}

const taskBarStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'black',
  height: '70px',
  width: '350px',
  borderRadius: '17px'
}