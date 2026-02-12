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
      <img
        src={dancing ? catDanceImg : catHeartImg}
        alt={dancing ? "Happy dancing cat" : "Cat holding a heart"}
        className="w-32 sm:w-44 drop-shadow-md"
        style={{ imageRendering: "auto" }}
      />
    </div>
  );
};

export default PixelCat;
