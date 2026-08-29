import React from 'react';
import linkedinIcon from '../assets/linkedin.png';
import twitterIcon from '../assets/twitter.png'
import githubIcon from '../assets/github-logo.png'

export function Header() {
  return (
    <div style={headerStyle}>
      <div>Harman Singh Gill</div>
      <div style={infoDivStyle}>
        <div style={socialLinks}>
          <span><img src={linkedinIcon} alt="linkedin" style={{ width: 15, height: 15 }} /></span>
          <span><img src={twitterIcon} alt="twitter" style={{ width: 15, height: 15 }} /></span>
          <span><img src={githubIcon} alt="github" style={{ width: 15, height: 15 }} /></span>
        </div>
        <span style={{marginLeft: '4px', marginRight: '4px'}}><hr style={separater}></hr></span>
        <div style={dateTimeStyle}>
          <span>Sat, 29 Aug 2026</span>
          <span>5:44 PM</span>
        </div>
      </div>
    </div>
  )
}

const headerStyle: React.CSSProperties = {
  height: '38px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '14px',
  boxSizing: 'border-box',
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

const infoDivStyle: React.CSSProperties = {
  display: 'flex',
  gap: '5px',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flexDirection:'row',
  width: '300px'
}

const socialLinks: React.CSSProperties = {
  display: 'flex',
  width: '70px',
  height: '20px',
  gap: '10px',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  justifyContent: 'space-around'
}

const dateTimeStyle: React.CSSProperties = {
  display: 'flex',
  gap: '10px',
  fontSize: '14px'
}

const separater: React.CSSProperties = {
  width: '0.5px',
  height: '15px', 
  backgroundColor: '#ffffff',
  border: 'none',
  margin: 0
}