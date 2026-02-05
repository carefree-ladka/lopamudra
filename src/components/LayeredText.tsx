import { useEffect, useState } from "react";

interface LayeredTextProps {
  text: string;
  onComplete: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export const LayeredText: React.FC<LayeredTextProps> = ({
  text,
  onComplete,
  className = "",
  style = {},
}) => {
  const [visibleLetters, setVisibleLetters] = useState(text.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLetters((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 0;
        }
        return prev - 1;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`relative flex justify-center ${className}`} style={style}>
      {/* Invisible width holder */}
      <span className="invisible whitespace-pre">{text}</span>

      {/* Animated text layer */}
      <span className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-pre">
        {text.split("").map((letter, index) => (
          <span
            key={index}
            className="inline-block transition-all duration-500"
            style={{
              opacity: index < visibleLetters ? 1 : 0,
              transform: index < visibleLetters ? "scale(1)" : "scale(1.5)",
              transitionDelay: `${index * 100}ms`,
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </span>
    </div>
  );
};
