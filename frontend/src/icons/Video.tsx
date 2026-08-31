import '../styles/iconStyles.css'
import videoIcon from '../assets/video-icon-img.avif'

export function Video(){
  return (
    <div className="menu-icon">
      <div className="icon" style={{ backgroundImage: `url(${videoIcon})` }} />
      <span className="tooltip">Video</span>
    </div>
  )
}