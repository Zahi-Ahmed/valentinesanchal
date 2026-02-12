import catHeartImg from "@/assets/cat-heart.png";
import catDanceImg from "@/assets/cat-dance.png";

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
      <div className="overflow-hidden" style={{ clipPath: "inset(10% 12% 5% 12%)" }}>
        <img
          src={dancing ? catDanceImg : catHeartImg}
          alt={dancing ? "Happy dancing cat" : "Cat holding a heart"}
          className="w-40 sm:w-52 drop-shadow-md"
          style={{ imageRendering: "pixelated" }}
        />
      </div>
    </div>
  );
};

export default PixelCat;
