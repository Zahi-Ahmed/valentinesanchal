

# Replace Assets and Add Play Button

## Changes Overview

Replace all AI-generated assets with the user's uploaded pixel-art files and swap the embedded video iframe for a simple "Play" button.

---

## 1. Copy User Assets into the Project

Replace existing files in `src/assets/` with the uploaded ones:
- `user-uploads://cat_dance.gif` -> `src/assets/cat-dance.gif`
- `user-uploads://cat_heart.gif` -> `src/assets/cat-heart.gif`
- `user-uploads://envelope.png` -> `src/assets/envelope.png`
- `user-uploads://window.png` -> `src/assets/window.png`

## 2. Update PixelEnvelope Component

- Import the new `envelope.png`
- Remove the `clipPath` cropping since the new asset has clean edges
- Display the envelope image directly with `imageRendering: pixelated`

## 3. Update PixelCat Component

- Import `cat-heart.gif` and `cat-dance.gif` (GIF format now, so animations are baked into the files)
- Remove the `clipPath` cropping
- Keep the bob/wiggle CSS animations on the container

## 4. Update RetroWindow Component

- Use `window.png` as the window frame background image instead of the CSS-built title bar and checkered background
- Position children content over the checkered content area of the window image
- Remove the CSS-based title bar and checkered background pattern

## 5. Replace Video Iframe with Play Button (Screen 3)

In `src/pages/Index.tsx`, replace the video `<iframe>` embed with a styled "Play" button:
- A pixel-styled button with a triangular play icon (built with CSS borders for a pixelated look)
- Text says "Play" in the pixel font
- On click, opens the Google Drive video link in a new tab (`window.open`)
- Styled consistently with the retro theme (pixel-border, primary colors)

## Technical Details

- **File format change**: Cat assets change from `.png` to `.gif` -- update all import paths accordingly
- **RetroWindow**: Will use the window.png as a background image with `background-size: 100% 100%` and position content inside the checkered area using padding
- **Play button**: Will use `window.open(videoUrl, '_blank')` where `videoUrl` is the Google Drive view link

