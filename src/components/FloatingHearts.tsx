import { useMemo } from "react";

const FloatingHearts = () => {
  const hearts = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 8 + Math.random() * 16,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        opacity: 0.3 + Math.random() * 0.5,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute text-accent"
          style={{
            left: `${h.left}%`,
            top: `${60 + Math.random() * 40}%`,
            fontSize: `${h.size}px`,
            opacity: h.opacity,
            animation: `float-heart ${h.duration}s ease-in infinite`,
            animationDelay: `${h.delay}s`,
          }}
        >
          ♥
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
