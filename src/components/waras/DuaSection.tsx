import { cn } from "@/lib/utils";

interface DuaCard {
  id: number;
  theme: string;
  arabic?: string;
  transliteration?: string;
  meaning: string;
  icon: string;
  color: "gold" | "sage" | "sky" | "cream";
}

const duas: DuaCard[] = [
  {
    id: 1,
    theme: "Protection",
    arabic: "أُعِيذُكَ بِكَلِمَاتِ اللهِ التَّامَّة",
    transliteration: "U'idhuka bi kalimatillahit-tammah",
    meaning: "I seek protection for you in Allah's perfect words from every evil.",
    icon: "🛡️",
    color: "sage",
  },
  {
    id: 2,
    theme: "Good Character",
    meaning: "May Allah adorn Hasan with beautiful manners and a heart full of compassion and kindness towards all creation.",
    icon: "💫",
    color: "gold",
  },
  {
    id: 3,
    theme: "Knowledge & Wisdom",
    arabic: "رَبِّ زِدْنِي عِلْمًا",
    transliteration: "Rabbi zidni ilma",
    meaning: "O Lord, increase me in knowledge. May Hasan grow in wisdom and understanding.",
    icon: "📖",
    color: "sky",
  },
  {
    id: 4,
    theme: "Health & Happiness",
    meaning: "May Allah grant Hasan a life filled with good health, genuine happiness, and inner peace that comes from faith.",
    icon: "🌟",
    color: "cream",
  },
];

const colorStyles = {
  gold: "bg-gold-light/50 border-gold/30 hover:border-gold/50",
  sage: "bg-sage-light/50 border-sage/30 hover:border-sage/50",
  sky: "bg-sky-light/50 border-sky/30 hover:border-sky/50",
  cream: "bg-cream-dark/50 border-gold/20 hover:border-gold/40",
};

export const DuaSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-background islamic-pattern">
      <div className="container max-w-5xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Our Duas for Hasan
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Heartfelt prayers and blessings for a life filled with barakah
          </p>
          <div className="flex justify-center mt-6">
            <div className="h-1 w-24 rounded-full gradient-gold" />
          </div>
        </div>

        {/* Dua cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {duas.map((dua, index) => (
            <div
              key={dua.id}
              className={cn(
                "rounded-2xl p-6 md:p-8 border-2 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl",
                colorStyles[dua.color],
                "animate-fade-in-up"
              )}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{dua.icon}</span>
                <h3 className="font-heading text-xl md:text-2xl text-foreground">
                  {dua.theme}
                </h3>
              </div>

              {/* Arabic text */}
              {dua.arabic && (
                <p className="font-heading text-2xl md:text-3xl text-gold-dark text-right mb-2 leading-relaxed">
                  {dua.arabic}
                </p>
              )}

              {/* Transliteration */}
              {dua.transliteration && (
                <p className="font-body text-sm text-muted-foreground italic mb-3">
                  {dua.transliteration}
                </p>
              )}

              {/* Meaning */}
              <p className="font-body text-foreground/80 leading-relaxed">
                {dua.meaning}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DuaSection;
