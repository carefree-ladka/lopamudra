import React from "react";
import { CONFIG } from "../config";
import { useValentineStore } from "../store/valentineStore";

export const QuestionPrompt: React.FC = () => {
  const { showMessage, handleYesClick } = useValentineStore();

  const moveMaybeButton = (element: HTMLButtonElement) => {
    const rect = element.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const padding = 20;

    const maxX = Math.max(0, vw - rect.width - padding);
    const maxY = Math.max(0, vh - rect.height - padding);

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    // Avoid center zone (thumb / tap area)
    if (x > vw * 0.3 && x < vw * 0.7) {
      x = x < vw / 2 ? 0 : maxX;
    }

    if (y > vh * 0.3 && y < vh * 0.7) {
      y = y < vh / 2 ? 0 : maxY;
    }

    element.style.position = "fixed";
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
    element.style.zIndex = "9999";
    element.style.transition =
      "left 0.15s ease-out, top 0.15s ease-out, transform 0.15s";
    element.style.transform = "scale(0.9)";
  };

  const escape = (
    e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    moveMaybeButton(e.currentTarget);
  };

  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-all duration-1000 px-4 ${
        showMessage ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Question */}
      <h1
        className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8 animate-pulse text-center"
        style={{
          textShadow: `0 0 20px ${CONFIG.colors.textGlow}, 0 0 40px rgba(255, 8, 68, 0.6), 0 0 60px rgba(255, 8, 68, 0.4)`,
          fontFamily: "Georgia, serif",
        }}
      >
        {CONFIG.text.question}
      </h1>

      {/* Valentine */}
      <h2
        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-red-500 mb-6 sm:mb-8 md:mb-12 text-center"
        style={{
          textShadow:
            "0 0 30px rgba(255, 23, 68, 1), 0 0 60px rgba(255, 23, 68, 0.8)",
          fontFamily: "Georgia, serif",
          animation: `heartbeat ${CONFIG.animation.heartbeatSpeed}s ease-in-out infinite`,
        }}
      >
        {CONFIG.text.valentine}
      </h2>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pointer-events-auto w-full max-w-lg">
        {/* YES */}
        <button
          className="px-6 sm:px-8 md:px-12 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-lg sm:text-xl md:text-2xl font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 sm:hover:scale-110 transition-all duration-300 w-full sm:w-auto"
          style={{
            boxShadow: "0 0 20px rgba(255, 23, 68, 0.6)",
          }}
          onClick={handleYesClick}
        >
          {CONFIG.text.yesButton}
        </button>

        {/* MAYBE (ESCAPE ARTIST 😈) */}
        <button
          className="px-6 sm:px-8 md:px-12 py-3 sm:py-4 bg-gray-800 text-white text-lg sm:text-xl md:text-2xl font-bold rounded-full shadow-lg border-2 border-red-400 w-full sm:w-auto select-none"
          onMouseEnter={escape}
          onTouchStart={escape}
          onTouchMove={escape}
          onClick={(e) => e.preventDefault()}
        >
          {CONFIG.text.maybeButton}
        </button>
      </div>
    </div>
  );
};
