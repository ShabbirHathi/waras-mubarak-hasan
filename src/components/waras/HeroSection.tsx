import CrescentMoon from "./CrescentMoon";
import TwinklingStars from "./TwinklingStars";
import Lantern from "./Lantern";
import Balloon from "./Balloon";
import Confetti from "./Confetti";
import FloatingHearts from "./FloatingHearts";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden gradient-hero islamic-pattern">
      <TwinklingStars count={30} />
      <Confetti count={25} />
      <FloatingHearts count={10} />
      
      {/* Decorative lanterns */}
      <div className="absolute top-10 left-4 md:left-20 w-8 md:w-12 opacity-60">
        <Lantern variant="gold" />
      </div>
      <div className="absolute top-20 right-6 md:right-24 w-6 md:w-10 opacity-50">
        <Lantern variant="sage" />
      </div>
      <div className="absolute bottom-32 left-8 md:left-32 w-6 md:w-8 opacity-40">
        <Lantern variant="sky" />
      </div>
      <div className="absolute bottom-40 right-4 md:right-20 w-8 md:w-10 opacity-50">
        <Lantern variant="gold" />
      </div>

      {/* Decorative balloons */}
      <div className="absolute top-16 left-8 md:left-[10%] animate-sway">
        <Balloon variant="gold" delay={0} />
      </div>
      <div className="absolute top-24 left-16 md:left-[18%] animate-sway">
        <Balloon variant="sage" delay={0.5} />
      </div>
      <div className="absolute top-20 right-8 md:right-[10%] animate-sway">
        <Balloon variant="sky" delay={0.3} />
      </div>
      <div className="absolute top-28 right-16 md:right-[18%] animate-sway">
        <Balloon variant="cream" delay={0.8} />
      </div>
      <div className="absolute top-36 left-24 md:left-[25%] animate-sway hidden md:block">
        <Balloon variant="gold" delay={1.2} />
      </div>
      <div className="absolute top-32 right-24 md:right-[25%] animate-sway hidden md:block">
        <Balloon variant="sage" delay={1} />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Moon decoration */}
        <div className="flex justify-center mb-6 md:mb-8">
          <CrescentMoon size="xl" />
        </div>

        {/* Main greeting */}
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-foreground mb-4 animate-fade-in-up">
          <span className="block text-gold-dark">Waras Mubarak</span>
          <span className="block text-3xl md:text-5xl lg:text-6xl mt-2 text-foreground">
            Hasan
          </span>
        </h1>

        {/* Subtext */}
        <p className="font-body text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 animate-fade-in-up stagger-2 max-w-2xl mx-auto">
          Celebrating Hasan's 1st Waras – A Year of Blessings
        </p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-8 md:mb-12">
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-gold" />
          <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-gold" />
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gold"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
