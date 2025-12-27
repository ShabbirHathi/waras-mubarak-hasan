import { Sparkle } from "lucide-react";
import { cn } from "@/lib/utils";

interface SparklesProps {
  count?: number;
  className?: string;
}

export const Sparkles = ({ count = 15, className }: SparklesProps) => {
  const sparkles = Array.from({ length: count }, (_, i) => {
    const size = Math.random() * 10 + 8;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 4;
    const duration = Math.random() * 2 + 1.5;
    const colors = [
      "text-gold",
      "text-gold-light",
      "text-cream-dark",
      "text-sky/70",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    return { id: i, size, left, top, delay, duration, color };
  });

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className={cn("absolute", sparkle.color)}
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            animation: `sparkle-twinkle ${sparkle.duration}s ease-in-out ${sparkle.delay}s infinite`,
          }}
        >
          <Sparkle size={sparkle.size} fill="currentColor" />
        </div>
      ))}
    </div>
  );
};

export default Sparkles;
