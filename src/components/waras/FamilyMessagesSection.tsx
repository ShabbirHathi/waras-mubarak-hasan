import { cn } from "@/lib/utils";

interface FamilyMessage {
  id: number;
  from: string;
  relation: string;
  message: string;
  bgColor: string;
}

const messages: FamilyMessage[] = [
  {
    id: 1,
    from: "Mama & Baba",
    relation: "Parents",
    message: "Our dearest Hasan, you are the light of our lives. Watching you grow this past year has been the greatest blessing. May Allah keep you under His protection always. We love you more than words can say.",
    bgColor: "bg-gold-light/40",
  },
  {
    id: 2,
    from: "Nana & Nani",
    relation: "Grandparents",
    message: "Our little angel, you have brought so much joy and barakah into our family. May Allah bless you with a long, healthy, and pious life. You are truly a gift from the Almighty.",
    bgColor: "bg-sage-light/40",
  },
  {
    id: 3,
    from: "Mamu & Khala",
    relation: "Uncle & Aunt",
    message: "Sweet Hasan, watching you grow has been a beautiful journey. May your life be filled with laughter, love, and the guidance of Allah. We can't wait to see all the amazing things you will do!",
    bgColor: "bg-sky-light/40",
  },
  {
    id: 4,
    from: "The Extended Family",
    relation: "Loved Ones",
    message: "Waras Mubarak, dear Hasan! May Allah shower you with His choicest blessings. May you grow up to be a source of pride for your parents and a beacon of light for everyone around you.",
    bgColor: "bg-cream-dark/40",
  },
];

export const FamilyMessagesSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-background islamic-pattern">
      <div className="container max-w-5xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Messages & Love
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Heartfelt wishes from those who love Hasan dearly
          </p>
          <div className="flex justify-center mt-6">
            <div className="h-1 w-24 rounded-full gradient-gold" />
          </div>
        </div>

        {/* Message cards */}
        <div className="space-y-6">
          {messages.map((msg, index) => (
            <div
              key={msg.id}
              className={cn(
                "rounded-2xl p-6 md:p-8 border border-gold/20 transition-all duration-300 hover:shadow-lg animate-fade-in-up",
                msg.bgColor
              )}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full gradient-gold flex items-center justify-center">
                  <span className="text-xl md:text-2xl">💕</span>
                </div>
                <div>
                  <h3 className="font-heading text-lg md:text-xl text-foreground">
                    {msg.from}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {msg.relation}
                  </p>
                </div>
              </div>

              {/* Message */}
              <p className="font-body text-foreground/80 leading-relaxed text-base md:text-lg pl-16 md:pl-[74px]">
                "{msg.message}"
              </p>

              {/* Decorative quote */}
              <div className="absolute top-4 right-4 text-gold/20 text-4xl font-heading">
                ❝
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamilyMessagesSection;
