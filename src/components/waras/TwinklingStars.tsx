import { cn } from "@/lib/utils";

interface Star {
  id: number;
  top: string;
  left: string;
  size: number;
  delay: string;
  duration: string;
}

interface TwinklingStarsProps {
  count?: number;
  className?: string;
}

export const TwinklingStars = ({ count = 20, className }: TwinklingStarsProps) => {
  const stars: Star[] = Array.from({ length: count }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 2,
    delay: `${Math.random() * 3}s`,
    duration: `${Math.random() * 2 + 1.5}s`,
  }));

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-gold"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: star.delay,
            animationDuration: star.duration,
            animation: `twinkle ${star.duration} ease-in-out infinite`,
            boxShadow: `0 0 ${star.size * 2}px hsl(43, 74%, 66%)`,
          }}
        />
      ))}
    </div>
  );
};

export default TwinklingStars;
