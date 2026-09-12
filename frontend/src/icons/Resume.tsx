import '../styles/desktopIcon.css';
import aboutIcon from '../assets/about-icon-img.avif';

export const Resume = () => {
  return (
    <div className="desktop-icon" style={{top: '20px', left: '20px'}} > 
      <div className="icon-wrapper" style={{ backgroundImage: `url(${aboutIcon})` }}/>
      <span className="icon-label">Resume</span>
    </div>
  );
};