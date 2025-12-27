import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingHeartsProps {
  count?: number;
  className?: string;
}

export const FloatingHearts = ({ count = 8, className }: FloatingHeartsProps) => {
  const hearts = Array.from({ length: count }, (_, i) => {
    const size = Math.random() * 12 + 10;
    const left = Math.random() * 100;
    const delay = Math.random() * 6;
    const duration = Math.random() * 4 + 6;
    const colors = [
      "text-gold/40",
      "text-gold-light/50",
      "text-sage/40",
      "text-sky/40",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    return { id: i, size, left, delay, duration, color };
  });

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={cn("absolute", heart.color)}
          style={{
            left: `${heart.left}%`,
            bottom: "-20px",
            animation: `float-up ${heart.duration}s ease-in-out ${heart.delay}s infinite`,
          }}
        >
          <Heart size={heart.size} fill="currentColor" />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
