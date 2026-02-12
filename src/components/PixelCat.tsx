import catHeartImg from "@/assets/cat-heart.gif";
import catDanceImg from "@/assets/cat-dance.gif";

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
      <img
        src={dancing ? catDanceImg : catHeartImg}
        alt={dancing ? "Happy dancing cat" : "Cat holding a heart"}
        className="w-40 sm:w-52 drop-shadow-md"
        style={{ imageRendering: "pixelated" }}
      />
    </div>
  );
};

export default PixelCat;
