import '../styles/desktopIcon.css';
import aboutMeIcon from '../assets/aboutme-icon-img.avif';

export const AboutMe = () => {
  return (
    <div className="desktop-icon" style={{top: '20px', left: '400px'}} > 
      <div className="icon-wrapper" style={{ backgroundImage: `url(${aboutMeIcon})` }}/>
      <span className="icon-label">About Me</span>
    </div>
  );
};