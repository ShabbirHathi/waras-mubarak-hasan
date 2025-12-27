import { cn } from "@/lib/utils";

interface BalloonProps {
  variant?: "gold" | "sage" | "sky" | "cream";
  className?: string;
  delay?: number;
}

const variantStyles = {
  gold: "from-gold to-gold-dark",
  sage: "from-sage to-sage/80",
  sky: "from-sky to-accent",
  cream: "from-cream-dark to-gold-light",
};

export const Balloon = ({ variant = "gold", className, delay = 0 }: BalloonProps) => {
  return (
    <div 
      className={cn("relative animate-float", className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Balloon body */}
      <div className={cn(
        "w-8 h-10 md:w-10 md:h-12 rounded-full bg-gradient-to-b shadow-lg relative",
        variantStyles[variant]
      )}>
        {/* Shine effect */}
        <div className="absolute top-2 left-2 w-2 h-3 bg-white/30 rounded-full blur-[1px]" />
      </div>
      
      {/* Knot */}
      <div className="w-0 h-0 mx-auto border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-gold-dark/60" />
      
      {/* String */}
      <div className="w-px h-12 md:h-16 mx-auto bg-gradient-to-b from-gold-dark/40 to-transparent" />
    </div>
  );
};

export default Balloon;
