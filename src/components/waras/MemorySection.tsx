import { cn } from "@/lib/utils";

interface MemoryItem {
  id: number;
  caption: string;
  illustration: string;
  bgColor: string;
}

const memories: MemoryItem[] = [
  {
    id: 1,
    caption: "Tiny steps, big blessings",
    illustration: "👶",
    bgColor: "bg-gold-light/60",
  },
  {
    id: 2,
    caption: "One Hijri year of love",
    illustration: "🌙",
    bgColor: "bg-sage-light/60",
  },
  {
    id: 3,
    caption: "Wrapped in mercy",
    illustration: "🤲",
    bgColor: "bg-sky-light/60",
  },
  {
    id: 4,
    caption: "Growing in faith",
    illustration: "⭐",
    bgColor: "bg-cream-dark/60",
  },
  {
    id: 5,
    caption: "Blessed beginnings",
    illustration: "🕌",
    bgColor: "bg-sage-light/60",
  },
  {
    id: 6,
    caption: "A gift from Allah",
    illustration: "💝",
    bgColor: "bg-gold-light/60",
  },
];

export const MemorySection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="container max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Hasan's First Year
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A year filled with precious moments and divine blessings
          </p>
          <div className="flex justify-center mt-6">
            <div className="h-1 w-24 rounded-full gradient-gold" />
          </div>
        </div>

        {/* Memory grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className={cn(
                "group relative aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl animate-fade-in-up",
                memory.bgColor
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Decorative frame */}
              <div className="absolute inset-2 md:inset-4 border-2 border-gold/30 rounded-xl" />
              
              {/* Illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl md:text-7xl transition-transform duration-300 group-hover:scale-110">
                  {memory.illustration}
                </span>
              </div>

              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
                <p className="font-body text-sm md:text-base text-card text-center font-medium">
                  {memory.caption}
                </p>
              </div>

              {/* Corner decorations */}
              <svg
                className="absolute top-2 left-2 w-4 h-4 text-gold/50"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <svg
                className="absolute top-2 right-2 w-4 h-4 text-gold/50"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemorySection;
