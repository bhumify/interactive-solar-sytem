
"use client";

import { useEffect, useState } from "react";

type Star = {
  size: number;
  top: number;
  left: number;
  opacity: number;
};

export default function Stars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 150 }).map(() => ({
      size: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random(),
    }));

    setStars(generatedStars);
  }, []);

  return (
    <div className="absolute inset-0">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
}
