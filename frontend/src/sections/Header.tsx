import React, { useState, useEffect } from 'react';
import linkedinIcon from '../assets/linkedin.png';
import twitterIcon from '../assets/twitter.png'
import githubIcon from '../assets/github-logo.png'

export function Header() {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {

    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  })

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(dateTime);

  // Format time without seconds
  const formattedTime = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(dateTime).replace("am", "AM").replace("pm", "PM");

  return (
    <div style={headerStyle}>
      <div style={{ cursor: 'pointer' }}>Harman Singh Gill</div>
      <div style={infoDivStyle}>
        <div style={socialLinks}>
          <a href="https://www.linkedin.com/in/heyits-harman" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="linkedin" style={{ width: 15, height: 15 }} />
          </a>
          <a href="https://x.com/heyitsharman_" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="twitter" style={{ width: 15, height: 15 }} />
          </a>
          <a href="https://github.com/heyits-harman"target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="github" style={{ width: 15, height: 15 }} />
          </a>
        </div>
        <span style={{marginLeft: '4px', marginRight: '4px'}}><hr style={separater}></hr></span>
        <div style={dateTimeStyle}>
          <span>{formattedDate}</span>
          <span>{formattedTime}</span>
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
  fontSize: '15px'
}

const separater: React.CSSProperties = {
  width: '0.5px',
  height: '15px', 
  backgroundColor: '#ffffff',
  border: 'none',
  margin: 0
}