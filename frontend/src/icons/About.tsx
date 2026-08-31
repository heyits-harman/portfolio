import '../styles/iconStyles.css'
import aboutIcon from '../assets/aboutI-icon-img.avif'

export function About(){
  return (
    <div className="menu-icon">
      <div className="icon" style={{ backgroundImage: `url(${aboutIcon})` }} />
      <span className="tooltip">About</span>
    </div>
  )
}