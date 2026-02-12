import envelopeImg from "@/assets/envelope.png";

interface PixelEnvelopeProps {
  onClick: () => void;
}

const PixelEnvelope = ({ onClick }: PixelEnvelopeProps) => {
  return (
    <button
      onClick={onClick}
      className="group cursor-pointer flex flex-col items-center gap-4 transition-transform hover:scale-105 focus:outline-none"
      style={{ animation: "envelope-pulse 2s ease-in-out infinite" }}
      aria-label="Open letter"
    >
      <div className="w-56 sm:w-80 overflow-hidden" style={{ clipPath: "inset(30% 14% 22% 14%)" }}>
        <img
          src={envelopeImg}
          alt="Love letter envelope"
          className="w-full drop-shadow-lg group-hover:drop-shadow-2xl transition-all"
          style={{ imageRendering: "pixelated" }}
        />
      </div>
    </button>
  );
};

export default PixelEnvelope;
