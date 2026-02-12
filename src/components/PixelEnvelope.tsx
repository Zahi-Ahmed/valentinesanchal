interface PixelEnvelopeProps {
  onClick: () => void;
}

const PixelEnvelope = ({ onClick }: PixelEnvelopeProps) => {
  return (
    <button
      onClick={onClick}
      className="group cursor-pointer bg-valentine-cream pixel-border p-6 sm:p-10 flex flex-col items-center gap-4 transition-transform hover:scale-105 focus:outline-none"
      style={{ animation: "envelope-pulse 2s ease-in-out infinite" }}
      aria-label="Open letter"
    >
      {/* Envelope body */}
      <div className="relative w-48 h-32 sm:w-64 sm:h-44 bg-secondary pixel-border flex items-center justify-center">
        {/* Envelope flap (triangle) */}
        <div
          className="absolute -top-[1px] left-0 right-0 h-0"
          style={{
            borderLeft: "clamp(96px, 20vw, 128px) solid transparent",
            borderRight: "clamp(96px, 20vw, 128px) solid transparent",
            borderTop: "clamp(48px, 10vw, 64px) solid hsl(var(--valentine-rose))",
          }}
        />
        {/* Heart seal */}
        <div className="relative z-10 text-4xl sm:text-5xl mt-4 group-hover:animate-bounce">
          💌
        </div>
      </div>
    </button>
  );
};

export default PixelEnvelope;
