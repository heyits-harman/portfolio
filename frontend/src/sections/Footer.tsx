import React from 'react';
import { ToggleButton } from '../components/ToggleButton'
import { CentralMenu } from '../components/CentralMenu'
import { Chatbot } from '../components/Chatbot'

export function Footer() {
  return (
    <div style={FooterStyle}>
      <ToggleButton />
      <CentralMenu />
      <Chatbot />
    </div>
  )
}

const FooterStyle: React.CSSProperties = {
  padding: '10px',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  alignItems: 'flex-end',
  height: '100px'
}