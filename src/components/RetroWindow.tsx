import { ReactNode } from "react";

interface RetroWindowProps {
  title?: string;
  children: ReactNode;
}

const RetroWindow = ({ title = "LOVE", children }: RetroWindowProps) => {
  return (
    <div className="w-[90vw] max-w-md pixel-border-thick bg-valentine-cream">
      {/* Title bar */}
      <div className="bg-primary text-primary-foreground px-3 py-2 flex items-center gap-2 text-xs sm:text-sm">
        <span>♥</span>
        <span className="flex-1 text-center font-pixel tracking-widest">{title}</span>
        <span>♥</span>
      </div>
      {/* Content area with checkered bg */}
      <div
        className="p-4 sm:p-6 flex flex-col items-center gap-4"
        style={{
          backgroundImage:
            "linear-gradient(45deg, hsl(350 80% 92%) 25%, transparent 25%), linear-gradient(-45deg, hsl(350 80% 92%) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, hsl(350 80% 92%) 75%), linear-gradient(-45deg, transparent 75%, hsl(350 80% 92%) 75%)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default RetroWindow;
