import { ReactNode } from "react";
import windowImg from "@/assets/window.png";

interface RetroWindowProps {
  title?: string;
  children: ReactNode;
}

const RetroWindow = ({ title = "LOVE", children }: RetroWindowProps) => {
  return (
    <div
      className="w-[95vw] max-w-xl relative"
      style={{
        backgroundImage: `url(${windowImg})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        imageRendering: "pixelated",
      }}
    >
      {/* Content positioned inside the window's checkered area */}
      <div className="pt-[38%] pb-[14%] px-[14%] flex flex-col items-center gap-3">
        {children}
      </div>
    </div>
  );
};

export default RetroWindow;
