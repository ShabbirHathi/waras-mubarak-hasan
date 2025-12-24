import { cn } from "@/lib/utils";

interface CrescentMoonProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap = {
  sm: "w-12 h-12",
  md: "w-20 h-20",
  lg: "w-32 h-32",
  xl: "w-48 h-48",
};

export const CrescentMoon = ({ className, size = "md" }: CrescentMoonProps) => {
  return (
    <div className={cn("relative animate-float", sizeMap[size], className)}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="moonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(45, 70%, 85%)" />
            <stop offset="50%" stopColor="hsl(43, 74%, 66%)" />
            <stop offset="100%" stopColor="hsl(40, 70%, 55%)" />
          </linearGradient>
          <filter id="moonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M50 5C25.1 5 5 25.1 5 50s20.1 45 45 45c6.9 0 13.5-1.6 19.4-4.4C56.8 85.6 47 73 47 58.5c0-18.8 13.8-34.4 31.8-37.3C71.7 11.2 61.4 5 50 5z"
          fill="url(#moonGradient)"
          filter="url(#moonGlow)"
        />
      </svg>
    </div>
  );
};

export default CrescentMoon;
