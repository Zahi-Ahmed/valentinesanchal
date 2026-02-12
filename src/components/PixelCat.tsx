interface PixelCatProps {
  dancing?: boolean;
}

const PixelCat = ({ dancing = false }: PixelCatProps) => {
  return (
    <div
      className="flex flex-col items-center"
      style={{
        animation: dancing ? "wiggle 0.5s ease-in-out infinite" : "bob 2s ease-in-out infinite",
      }}
    >
      {/* Pixel cat using CSS/emoji art */}
      <div className="relative text-4xl sm:text-5xl select-none">
        <div className="flex flex-col items-center leading-none">
          {/* Cat face */}
          <div className="text-4xl sm:text-5xl">🐱</div>
          {/* Heart the cat is holding */}
          <div className="text-2xl sm:text-3xl -mt-1 text-accent">💕</div>
        </div>
      </div>
    </div>
  );
};

export default PixelCat;
