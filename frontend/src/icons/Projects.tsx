import '../styles/iconStyles.css'
import projectIcon from '../assets/projects-icon-img.avif';

export function Projects(){
  return (
   <div className="menu-icon">
      <div className="icon" style={{ backgroundImage: `url(${projectIcon})` }} />
      <span className="tooltip">Project</span>
    </div>
  )
}