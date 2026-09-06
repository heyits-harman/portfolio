import { forwardRef } from 'react';
import '../styles/desktopIcon.css';
import aboutIcon from '../assets/aboutI-icon-img.avif';

export const Resume = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div 
    className="desktop-icon" 
    style={{top: '20px', left: '20px'}} 
    ref={ref} {...props}> 

      <div className="icon-wrapper" style={{ backgroundImage: `url(${aboutIcon})` }}/>
      <span className="icon-label">Resume</span>
    </div>
  );
});