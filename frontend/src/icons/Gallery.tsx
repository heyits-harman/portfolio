import '../styles/iconStyles.css'
import galleryIcon from '../assets/gallery-icon-img.avif'

export function Gallery(){
  return (
    <div className="menu-icon">
      <div className="icon" style={{ backgroundImage: `url(${galleryIcon})` }} />
      <span className="tooltip">Gallery</span>
    </div>
  )
}