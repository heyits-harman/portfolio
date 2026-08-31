import React from 'react';
import { About } from '../icons/About';
import { Projects } from '../icons/Projects';
import { Gallery } from '../icons/Gallery';
import { Video } from '../icons/Video';
import { Contact } from '../icons/Contact';


export function CentralMenu(){
  return(
    <>
      <div style={containerStyle}>
        <div style={taskBarStyle}>
          <About />
          <Projects />
          <Gallery />
          <Video />
          <Contact />
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