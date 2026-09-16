import '../styles/desktopIcon.css';
import resourceIcon from '../assets/resources-icon-img.avif';

export const Resources = () => {
  return (
    <div className="desktop-icon" style={{top: '20px', left: '600px'}} > 
      <div className="icon-wrapper" style={{ backgroundImage: `url(${resourceIcon})` }}/>
      <span className="icon-label">Resources</span>
    </div>
  );
};