import React, { useEffect, useRef } from 'react';
import { Resume } from '../icons/Resume';
import { Music } from '../icons/Music';
import { AboutMe } from '../icons/AboutMe';

export function MainContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isClicked = useRef(false);
  const activeEl = useRef<HTMLDivElement | null>(null);

  const coords = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const onMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // find the closest draggable icon wrapper
      const icon = target.closest('.desktop-icon') as HTMLDivElement | null;
      if (!icon) return;

      isClicked.current = true;
      activeEl.current = icon;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
      coords.current.lastX = icon.offsetLeft;
      coords.current.lastY = icon.offsetTop;
    };

    const onMouseUp = () => {
      isClicked.current = false;
      activeEl.current = null;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current || !activeEl.current) return;
      const el = activeEl.current;
      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;
      el.style.position = 'absolute';
      el.style.left = `${nextX}px`;
      el.style.top = `${nextY}px`;
    };

    container.addEventListener('mousedown', onMouseDown);
    container.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseUp);

    return () => {
      container.removeEventListener('mousedown', onMouseDown);
      container.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseUp);
    };
  }, []);

  return (
    <div ref={containerRef} style={mainStyle}>
      <Resume />
      <Music />
      <AboutMe />
    </div>
  );
}

const mainStyle: React.CSSProperties = {
  height: '572px',
  position: 'relative',
  overflow: 'hidden',
};
