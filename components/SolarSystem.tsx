
"use client";

import { useState } from "react";
import Sun from "./Sun";
import Planet from "./Planet";
import EarthSystem from "./EarthSystem";

const PLANETS = [
  { name: "Mercury", size: 8, orbitSize: 220, color: "#b1b1b1", speed: 10 },
  { name: "Venus", size: 11, orbitSize: 270, color: "#d8c07a", speed: 13 },
  { name: "Mars", size: 10, orbitSize: 380, color: "#d14c32", speed: 22 },
  { name: "Jupiter", size: 22, orbitSize: 460, color: "#e2b07a", speed: 30 },
  { name: "Saturn", size: 20, orbitSize: 540, color: "#d6c48f", speed: 36 },
  { name: "Uranus", size: 16, orbitSize: 620, color: "#8fd3e8", speed: 44 },
  { name: "Neptune", size: 16, orbitSize: 700, color: "#4976ff", speed: 50 },
];

export default function SolarSystem() {
  const [activePlanet, setActivePlanet] = useState<string | null>(null);

  return (
    <>
      <Sun />

      {PLANETS.map((planet) => (
        <Planet
          key={planet.name}
          {...planet}
          isActive={activePlanet === planet.name}
          onHover={setActivePlanet}
        />
      ))}

      <EarthSystem
        isActive={activePlanet === "Earth"}
        onHover={setActivePlanet}
      />

      {activePlanet && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-lg border border-white/20 backdrop-blur z-50">
          <strong>{activePlanet}</strong>
        </div>
      )}
    </>
  );
}
