import '../styles/iconStyles.css'
import contactIcon from '../assets/contact-icon-img.avif'

export function Contact(){
  return (
    <div className="menu-icon">
      <div className="icon" style={{ backgroundImage: `url(${contactIcon})` }} />
      <span className="tooltip">Contact</span>
    </div>
  )
}