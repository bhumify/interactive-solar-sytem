

"use client";

type PlanetProps = {
  size: number;
  orbitSize: number;
  color: string;
  speed: number;
  name: string;
  isActive: boolean;
  onHover: (name: string | null) => void;
};

export default function Planet({
  size,
  orbitSize,
  color,
  speed,
  name,
  isActive,
  onHover,
}: PlanetProps) {
  const HITBOX = 36; // invisible hover area (KEY FIX)

  return (
    <div
      className="absolute top-1/2 left-1/2 pointer-events-none"
      style={{
        width: orbitSize,
        height: orbitSize,
        marginLeft: -orbitSize / 2,
        marginTop: -orbitSize / 2,
        animation: `spin ${speed}s linear infinite`,
      }}
    >
      {/* Orbit path (no pointer events) */}
      <div className="absolute inset-0 rounded-full border border-white/10" />

      {/* Hover hitbox */}
      <div
        className="absolute flex items-center justify-center pointer-events-auto"
        style={{
          width: HITBOX,
          height: HITBOX,
          left: orbitSize / 2 - HITBOX / 2,
          top: -HITBOX / 2,
        }}
        onPointerEnter={() => onHover(name)}
        onPointerLeave={() => onHover(null)}
      >
        {/* Actual planet */}
        <div
          className={`rounded-full transition-all duration-200 ${
            isActive ? "shadow-[0_0_14px_4px_rgba(255,255,255,0.7)] scale-110" : ""
          }`}
          style={{
            width: size,
            height: size,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}
