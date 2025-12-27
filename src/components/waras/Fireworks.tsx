import { cn } from "@/lib/utils";

interface FireworksProps {
  className?: string;
}

export const Fireworks = ({ className }: FireworksProps) => {
  const fireworks = [
    { left: 15, delay: 0, color: "bg-gold" },
    { left: 85, delay: 2, color: "bg-sage" },
    { left: 50, delay: 4, color: "bg-sky" },
    { left: 25, delay: 6, color: "bg-gold-light" },
    { left: 75, delay: 8, color: "bg-accent" },
  ];

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {fireworks.map((fw, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            left: `${fw.left}%`,
            top: "30%",
            animation: `firework-burst 10s ease-out ${fw.delay}s infinite`,
          }}
        >
          {/* Firework particles */}
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className={cn("absolute w-1.5 h-1.5 rounded-full", fw.color)}
              style={{
                animation: `firework-particle 1.5s ease-out ${fw.delay}s infinite`,
                transform: `rotate(${i * 30}deg) translateY(-20px)`,
                opacity: 0,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Fireworks;
