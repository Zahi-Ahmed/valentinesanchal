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
      <img
        src={envelopeImg}
        alt="Love letter envelope"
        className="w-48 sm:w-72 drop-shadow-lg group-hover:drop-shadow-2xl transition-all"
        style={{ imageRendering: "auto" }}
      />
    </button>
  );
};

export default PixelEnvelope;
