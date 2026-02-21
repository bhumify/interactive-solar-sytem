"use client";

import { useState, useEffect } from "react";

interface ShootingStar {
  top: number;
  left: number;
  angle: number;
  direction: number;
  duration: number;
  id: number;
}

interface ShootingstarsProps  {
  stars?: ShootingStar[];
}

export default function Shootingstars({ stars: initialStars = [] }: ShootingstarsProps) {
  const [stars, setStars] = useState<ShootingStar[]>(initialStars);

  useEffect(() => {
    const interval = setInterval(() => {
      const top = Math.random() * 50;
      const left = Math.random() * 100;
      const angle = Math.random() * 50 + 20;
      const direction = Math.random() > 0.5 ? 1 : -1;
      const duration = Math.random() * 1 + 1.5;
      const id = Date.now();

      const newStar: ShootingStar = { top, left, angle, direction, duration, id };
      setStars(prev => [...prev, newStar]);

      setTimeout(() => {
        setStars(prev => prev.filter(s => s.id !== id));
      }, duration * 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((s) => {
     
        const style: React.CSSProperties & { [key: string]: string | number } = {
          width: "80px",
          height: "2px",
          top: `${s.top}%`,
          left: `${s.left}%`,
          opacity: 0,
          animation: `shoot ${s.duration}s linear 0s forwards`,
          ["--angle" as any]: `${s.direction * s.angle}deg`,
          ["--dir" as any]: s.direction,
        };

        return <div key={s.id} className="absolute bg-white" style={style}></div>;
      })}
    </div>
  );
}