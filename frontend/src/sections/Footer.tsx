import React from 'react';
import { LikeDislikeToggle } from '../components/LikeDislikeToggle'
import { CentralMenu } from '../components/CentralMenu'
import { Chatbot } from '../components/Chatbot'

export function Footer() {
  return (
    <div style={FooterStyle}>
      <LikeDislikeToggle />
      <CentralMenu />
      <Chatbot />
    </div>
  )
}

const FooterStyle: React.CSSProperties = {
  flex: 15,
  padding: '10px',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)'
}