import React, { useEffect, useRef } from 'react';
import expIcon from '../assets/VCIQF7ylF9U0o5QZkTgji0mxx28.avif'

export function MainContent() {

  const containerRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)

  const isClicked = useRef<boolean>(false) 

  const coords = useRef<{
    startX: number,
    startY: number,
    lastX: number,
    lastY: number
  }>({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0
  })

  useEffect(() => {
    if(!iconRef.current || !containerRef.current) return;

    const icon = iconRef.current;
    const container = containerRef.current;

    const onMouseDown = (e: MouseEvent) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    }

    const onMouseUp = (e: MouseEvent) => {
      isClicked.current = false;
      coords.current.lastX = icon.offsetLeft;
      coords.current.lastY = icon.offsetTop;
    }

    const onMouseMove = (e: MouseEvent) => {
      if(!isClicked.current) return;

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      icon.style.top = `${nextY}px`;
      icon.style.left = `${nextX}px`;
    }

    icon.addEventListener('mousedown', onMouseDown);
    icon.addEventListener('mouseup', onMouseUp);

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseUp);

    const cleanup = () => {
      icon.removeEventListener('mousedown', onMouseDown);
      icon.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseUp);
    }

    return cleanup;
  }, []);

  return (
    <div ref={containerRef} style={mainStyle}>
      <div ref={iconRef} style={iconStyle}></div>
    </div>
  )
}

const mainStyle: React.CSSProperties = {
  height: '572px',
  position: 'relative',
  overflow: 'hidden'
}

const iconStyle: React.CSSProperties = {
  position: 'absolute',
  top: '20px',
  left: '20px',
  height: '60px',
  width: '60px',
  backgroundImage: `url(${expIcon})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  flex: '0 0 auto',
  borderRadius: '15px',
  cursor: 'pointer'
}