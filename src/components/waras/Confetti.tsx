import { cn } from "@/lib/utils";

interface ConfettiProps {
  count?: number;
  className?: string;
}

export const Confetti = ({ count = 20, className }: ConfettiProps) => {
  const confettiPieces = Array.from({ length: count }, (_, i) => {
    const colors = [
      "bg-gold",
      "bg-gold-light",
      "bg-sage",
      "bg-sky",
      "bg-accent",
    ];
    const shapes = ["rounded-full", "rounded-sm", "rounded-none rotate-45"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    const size = Math.random() * 6 + 4;
    const left = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * 3 + 4;
    
    return {
      id: i,
      color,
      shape,
      size,
      left,
      delay,
      duration,
    };
  });

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className={cn(
            "absolute opacity-60",
            piece.color,
            piece.shape
          )}
          style={{
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            left: `${piece.left}%`,
            top: "-10px",
            animation: `confetti-fall ${piece.duration}s linear ${piece.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
