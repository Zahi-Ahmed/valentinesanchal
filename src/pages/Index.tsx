import { useState, useCallback } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import PixelEnvelope from "@/components/PixelEnvelope";
import PixelCat from "@/components/PixelCat";
import RetroWindow from "@/components/RetroWindow";
import Confetti from "@/components/Confetti";
import valentineVideo from "@/assets/valentine-video.mp4";

type Screen = "envelope" | "question" | "celebration";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("envelope");
  const [noButtonPos, setNoButtonPos] = useState<{ top?: string; left?: string }>({});
  const [noButtonAbsolute, setNoButtonAbsolute] = useState(false);

  const handleNoHover = useCallback(() => {
    setNoButtonAbsolute(true);
    const top = 10 + Math.random() * 70;
    const left = 10 + Math.random() * 70;
    setNoButtonPos({ top: `${top}%`, left: `${left}%` });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background">
      <FloatingHearts />

      {/* Screen 1: Envelope */}
      {screen === "envelope" && (
        <div className="flex flex-col items-center gap-6 z-10 animate-[scale-in_0.5s_ease-out]">
          <PixelEnvelope onClick={() => setScreen("question")} />
          <p className="font-pixel text-foreground text-sm sm:text-lg tracking-wide text-center px-4 drop-shadow-sm">
            ♡ Letter For You ♡
          </p>
          <p className="text-foreground/70 text-[10px] mt-2 animate-pulse font-pixel">
            click to open
          </p>
        </div>
      )}

      {/* Screen 2: Question */}
      {screen === "question" && (
        <div className="z-10 flex flex-col items-center animate-[scale-in_0.4s_ease-out]">
          <RetroWindow>
            <PixelCat />
            <p className="font-pixel text-foreground text-xs sm:text-sm text-center leading-relaxed mt-2">
              Will you be my Valentine?
            </p>
            <div className="flex gap-4 mt-4 mb-2 w-full justify-center relative min-h-[60px]">
              <button
                onClick={() => setScreen("celebration")}
                className="bg-primary text-primary-foreground font-pixel text-xs sm:text-sm px-6 py-3 pixel-border hover:bg-accent transition-colors"
              >
                YES 💖
              </button>
              <button
                onMouseEnter={handleNoHover}
                onTouchStart={handleNoHover}
                className="bg-muted text-muted-foreground font-pixel text-xs sm:text-sm px-6 py-3 pixel-border hover:bg-muted transition-colors"
                style={
                  noButtonAbsolute
                    ? {
                        position: "fixed",
                        top: noButtonPos.top,
                        left: noButtonPos.left,
                        zIndex: 100,
                      }
                    : {}
                }
              >
                NO 💔
              </button>
            </div>
          </RetroWindow>
        </div>
      )}

      {/* Screen 3: Celebration */}
      {screen === "celebration" && (
        <div className="z-10 flex flex-col items-center animate-[scale-in_0.4s_ease-out] max-h-[90vh]">
          <Confetti />
          <RetroWindow title="♥ YIPPEE ♥">
            <p className="font-pixel text-primary text-xs sm:text-sm text-center">
              Yippeeee! 🎉
            </p>
            <div className="w-24 sm:w-32">
              <PixelCat dancing />
            </div>
            <p className="font-pixel text-muted-foreground text-[10px] text-center">
              I knew you'd say yes 💕
            </p>

            {/* Video Player */}
            <div className="w-full mt-2 pixel-border overflow-hidden">
              <video
                src={valentineVideo}
                className="w-full max-h-[30vh]"
                controls
                autoPlay
                loop
                playsInline
                style={{ imageRendering: "auto" }}
              />
            </div>
          </RetroWindow>
        </div>
      )}
    </div>
  );
};

export default Index;
