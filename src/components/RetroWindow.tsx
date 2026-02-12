import { ReactNode } from "react";
import windowImg from "@/assets/window.png";

interface RetroWindowProps {
  title?: string;
  children: ReactNode;
}

const RetroWindow = ({ title = "LOVE", children }: RetroWindowProps) => {
  return (
    <div
      className="w-[90vw] max-w-md relative"
      style={{
        backgroundImage: `url(${windowImg})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        imageRendering: "pixelated",
      }}
    >
      {/* Content positioned inside the window's checkered area */}
      <div className="pt-[38%] pb-[12%] px-[10%] flex flex-col items-center gap-2">
        {children}
      </div>
    </div>
  );
};

export default RetroWindow;
