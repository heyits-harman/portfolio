import '../styles/desktopIcon.css';
import musicIcon from '../assets/music-icon-img.avif';

export const Music = () => {
  return (
    <div className="desktop-icon" style={{top: '20px', left: '200px'}} > 
      <div className="icon-wrapper" style={{ backgroundImage: `url(${musicIcon})` }}/>
      <span className="icon-label">Music</span>
    </div>
  );
};