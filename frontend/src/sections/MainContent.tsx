import React from 'react';

export function MainContent() {
  return (
    <div style={mainStyle}>
      Main Area
    </div>
  )
}

const mainStyle: React.CSSProperties = {
  textAlign: 'center',
  flex: 82,
}
