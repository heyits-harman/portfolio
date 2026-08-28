import React from 'react';

export function Header() {
  return (
    <div style={headerStyle}>
      Header
    </div>
  )
}

const headerStyle: React.CSSProperties = {
  flex: 3,
  background: 'rgba(255, 255, 255, 0.04)',
  
  /* Blurs the content behind the element */
  backdropFilter: 'blur(3px)',
  WebkitBackdropFilter: 'blur(3px)', /* Safari support */

  /* Soft border and rounded corners for depth */
  borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
  
  /* Optional subtle shadow to lift it off the desktop */
  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',

  textAlign: 'center',
}

