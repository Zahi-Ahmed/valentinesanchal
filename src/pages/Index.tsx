import { useState, useCallback } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import PixelEnvelope from "@/components/PixelEnvelope";
import PixelCat from "@/components/PixelCat";
import RetroWindow from "@/components/RetroWindow";
import Confetti from "@/components/Confetti";

// =============================================
// 🔧 CUSTOMIZE THESE VALUES
// =============================================
const GOOGLE_DRIVE_VIDEO_ID = "YOUR_VIDEO_ID_HERE"; // Replace with your Google Drive file ID
// To get the ID: share your video → copy link → the ID is the long string in the URL
// Example link: https://drive.google.com/file/d/ABC123XYZ/view → ID is ABC123XYZ
// =============================================

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

  const videoEmbedUrl = `https://drive.google.com/file/d/${GOOGLE_DRIVE_VIDEO_ID}/preview`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background">
      <FloatingHearts />

      {/* Screen 1: Envelope */}
      {screen === "envelope" && (
        <div className="flex flex-col items-center gap-6 z-10 animate-[scale-in_0.5s_ease-out]">
          <PixelEnvelope onClick={() => setScreen("question")} />
          <p className="font-pixel text-primary text-sm sm:text-lg tracking-wide text-center px-4">
            ♡ Letter For You ♡
          </p>
          <p className="text-muted-foreground text-[10px] mt-2 animate-pulse">
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
            <div className="flex gap-4 mt-4 w-full justify-center relative min-h-[60px]">
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
        <div className="z-10 flex flex-col items-center animate-[scale-in_0.4s_ease-out]">
          <Confetti />
          <RetroWindow title="♥ YIPPEE ♥">
            <p className="font-pixel text-primary text-base sm:text-lg text-center">
              Yippeeee! 🎉
            </p>
            <PixelCat dancing />
            <p className="font-pixel text-muted-foreground text-[10px] text-center mt-2">
              I knew you'd say yes 💕
            </p>

            {/* Video Player */}
            <div className="w-full mt-4 pixel-border bg-valentine-dark">
              <div className="p-1">
                {GOOGLE_DRIVE_VIDEO_ID === "YOUR_VIDEO_ID_HERE" ? (
                  <div className="w-full aspect-video bg-muted flex items-center justify-center">
                    <p className="font-pixel text-muted-foreground text-[8px] text-center px-4 leading-relaxed">
                      🎬 Video goes here!<br />
                      Replace VIDEO_ID in code
                    </p>
                  </div>
                ) : (
                  <iframe
                    src={videoEmbedUrl}
                    className="w-full aspect-video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Valentine's video"
                  />
                )}
              </div>
            </div>
          </RetroWindow>
        </div>
      )}
    </div>
  );
};

export default Index;
