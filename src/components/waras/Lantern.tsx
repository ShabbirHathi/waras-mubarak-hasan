import { cn } from "@/lib/utils";

interface LanternProps {
  className?: string;
  variant?: "gold" | "sage" | "sky";
}

const colorMap = {
  gold: { body: "fill-gold", glow: "hsl(43, 74%, 66%)" },
  sage: { body: "fill-sage", glow: "hsl(145, 30%, 75%)" },
  sky: { body: "fill-sky", glow: "hsl(200, 60%, 80%)" },
};

export const Lantern = ({ className, variant = "gold" }: LanternProps) => {
  const colors = colorMap[variant];

  return (
    <div className={cn("relative", className)}>
      <svg
        viewBox="0 0 60 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full animate-gentle-pulse"
      >
        <defs>
          <filter id={`lanternGlow-${variant}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Top hook */}
        <path
          d="M28 5 Q30 0 32 5 L32 12 L28 12 Z"
          className="fill-gold-dark"
        />
        {/* Top cap */}
        <ellipse cx="30" cy="15" rx="12" ry="4" className="fill-gold-dark" />
        {/* Main body */}
        <path
          d="M18 15 Q15 50 20 80 Q30 90 40 80 Q45 50 42 15 Z"
          className={colors.body}
          filter={`url(#lanternGlow-${variant})`}
          opacity="0.9"
        />
        {/* Bottom cap */}
        <ellipse cx="30" cy="82" rx="10" ry="3" className="fill-gold-dark" />
        {/* Bottom point */}
        <path
          d="M25 82 L30 95 L35 82 Z"
          className="fill-gold-dark"
        />
        {/* Decorative bands */}
        <ellipse cx="30" cy="35" rx="11" ry="2" className="fill-gold-dark" opacity="0.5" />
        <ellipse cx="30" cy="60" rx="11" ry="2" className="fill-gold-dark" opacity="0.5" />
      </svg>
    </div>
  );
};

export default Lantern;
