import React, { useState, useEffect } from 'react';
import './CompositeImage.css';

const CompositeImage = ({ imageSrc }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const mouseX = event.clientX - (window.innerWidth / 2);
      const mouseY = event.clientY - (window.innerHeight / 2);

      setMousePosition({
        x: mouseX / 50,
        y: mouseY / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="composite-image" style={{
      '--mouse-x': `${mousePosition.x}deg`,
      '--mouse-y': `${mousePosition.y}deg`
    }}>
      <img src={imageSrc} alt="Red copy of headshot" className="headshot red-filter" />
      <img src={imageSrc} alt="Yellow copy of headshot" className="headshot yellow-filter" />
      <img src={imageSrc} alt="Blue copy of headshot" className="headshot blue-filter" />
    </div>
  );
};

export default CompositeImage;

