import { useState, useCallback, useEffect } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import PixelEnvelope from "@/components/PixelEnvelope";
import PixelCat from "@/components/PixelCat";
import RetroWindow from "@/components/RetroWindow";
import Confetti from "@/components/Confetti";
import valentineVideo from "@/assets/valentine-video.mp4";

// Preload assets
import envelopeImg from "@/assets/envelope.png";
import catHeartImg from "@/assets/cat-heart.gif";
import catDanceImg from "@/assets/cat-dance.gif";
import windowImg from "@/assets/window.png";
import heartsBgImg from "@/assets/hearts-bg.png";

const PRELOAD_ASSETS = [envelopeImg, catHeartImg, catDanceImg, windowImg, heartsBgImg];

type Screen = "envelope" | "question" | "celebration";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("envelope");
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState<{ top?: string; left?: string }>({});
  const [noButtonAbsolute, setNoButtonAbsolute] = useState(false);

  useEffect(() => {
    let loaded = 0;
    const total = PRELOAD_ASSETS.length;
    PRELOAD_ASSETS.forEach((src) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded >= total) setAssetsLoaded(true);
      };
      img.src = src;
    });
  }, []);

  const handleNoHover = useCallback(() => {
    setNoButtonAbsolute(true);
    const top = 10 + Math.random() * 70;
    const left = 10 + Math.random() * 70;
    setNoButtonPos({ top: `${top}%`, left: `${left}%` });
  }, []);

  if (!assetsLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="font-pixel text-primary text-xs animate-pulse">Loading...</p>
      </div>
    );
  }

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
              I Love you Anchal, forever and ever 💕
            </p>

            {/* Play Button */}
            <button
              onClick={() => {
                const video = document.createElement("video");
                video.src = valentineVideo;
                video.controls = true;
                video.playsInline = true;
                video.style.cssText = "position:fixed;inset:0;width:100vw;height:100vh;z-index:9999;background:#000;object-fit:contain;";
                document.body.appendChild(video);
                video.play();
                
                const exitFullscreen = () => {
                  video.pause();
                  document.body.removeChild(video);
                };
                
                video.addEventListener("ended", exitFullscreen);
                video.addEventListener("click", (e) => {
                  if (video.paused) exitFullscreen();
                });
              }}
              className="mt-3 bg-primary text-primary-foreground font-pixel text-[10px] sm:text-xs px-5 py-2.5 pixel-border hover:bg-accent transition-colors flex items-center gap-2"
            >
              <span
                style={{
                  display: "inline-block",
                  width: 0,
                  height: 0,
                  borderTop: "6px solid transparent",
                  borderBottom: "6px solid transparent",
                  borderLeft: "10px solid currentColor",
                }}
              />
              Play
            </button>
          </RetroWindow>
        </div>
      )}
    </div>
  );
};

export default Index;
