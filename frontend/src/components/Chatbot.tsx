import React from 'react';

export function Chatbot(){
  return(
    <>
      <div style={style}>
        <div style={chatIconStyle}>
          <span>Chat AI</span>
        </div>
      </div>
    </>
  )
}

const style: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  padding: '10px',
  boxSizing: 'border-box',
  height: '100px'
}

const chatIconStyle: React.CSSProperties = {
  backgroundColor: 'black',
  borderRadius: '10px',
  width: '80px',
  paddingLeft: '20px',
  paddingRight: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '40px',
  fontSize: '20px'
}
