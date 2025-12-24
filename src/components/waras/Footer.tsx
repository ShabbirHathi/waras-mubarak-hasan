import CrescentMoon from "./CrescentMoon";

export const Footer = () => {
  return (
    <footer className="py-12 md:py-16 px-4 bg-card relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 islamic-pattern opacity-50" />
      
      <div className="container max-w-3xl mx-auto text-center relative z-10">
        {/* Moon icon */}
        <div className="flex justify-center mb-6">
          <CrescentMoon size="sm" />
        </div>

        {/* Main text */}
        <p className="font-heading text-xl md:text-2xl lg:text-3xl text-foreground mb-4">
          With love and duas for Hasan
        </p>
        <p className="font-heading text-lg md:text-xl text-gold-dark mb-8">
          on his 1st Waras
        </p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-gold/40" />
          <svg className="w-4 h-4 text-gold" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          <div className="h-px w-12 bg-gold/40" />
        </div>

        {/* Blessing */}
        <p className="font-body text-muted-foreground text-sm md:text-base">
          May Allah bless all who celebrate with us
        </p>

        {/* Year */}
        <p className="font-body text-muted-foreground/60 text-xs mt-6">
          {new Date().getFullYear()} • Made with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
