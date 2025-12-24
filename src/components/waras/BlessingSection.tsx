import CrescentMoon from "./CrescentMoon";

export const BlessingSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-card relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
        <CrescentMoon size="lg" />
      </div>
      
      <div className="container max-w-3xl mx-auto text-center relative z-10">
        {/* Section title */}
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">
          A Special Milestone
        </h2>

        {/* Decorative line */}
        <div className="flex justify-center mb-8">
          <div className="h-1 w-24 rounded-full gradient-gold" />
        </div>

        {/* Main blessing text */}
        <div className="space-y-6 font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
          <p className="animate-fade-in-up">
            Alhamdulillah, a year has passed in the blessed Hijri calendar since 
            little <span className="text-gold-dark font-semibold">Hasan</span> came into our lives. 
            What a beautiful journey of joy, love, and countless blessings it has been!
          </p>
          
          <p className="animate-fade-in-up stagger-2">
            This precious milestone reminds us of Allah's infinite mercy and the 
            wonderful gift of family. Every smile, every giggle, and every little 
            step has filled our hearts with gratitude.
          </p>

          {/* Highlighted blessing */}
          <div className="bg-sage-light/50 rounded-2xl p-6 md:p-8 my-8 border border-sage/30">
            <p className="text-foreground font-heading text-xl md:text-2xl italic">
              "May Allah bless Hasan with health, wisdom, and strong Imaan. 
              May his life be filled with light, mercy, and endless blessings."
            </p>
          </div>

          <p className="animate-fade-in-up stagger-3">
            As we celebrate this first Waras, we pray that Allah surrounds Hasan 
            with His protection and guides him on the path of righteousness. 
            May every year bring more happiness and barakah to his life.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center gap-3 mt-10">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-gold animate-twinkle"
              style={{ animationDelay: `${i * 0.3}s` }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlessingSection;
