import { useMemo } from "react";

const EMOJIS = ["🎉", "💕", "✨", "💖", "🩷", "❤️"];

const Confetti = () => {
  const pieces = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 3,
        emoji: EMOJIS[i % EMOJIS.length],
        size: 12 + Math.random() * 14,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute -top-4"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animation: `confetti-fall ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.emoji}
        </div>
      ))}
    </div>
  );
};

export default Confetti;
