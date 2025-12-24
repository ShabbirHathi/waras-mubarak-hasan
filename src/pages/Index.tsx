import HeroSection from "@/components/waras/HeroSection";
import BlessingSection from "@/components/waras/BlessingSection";
import DuaSection from "@/components/waras/DuaSection";
import MemorySection from "@/components/waras/MemorySection";
import FamilyMessagesSection from "@/components/waras/FamilyMessagesSection";
import Footer from "@/components/waras/Footer";

// SET YOUR CELEBRATION DATE HERE (format: Year, Month-1, Day)
// Example: January 15, 2025 = new Date(2025, 0, 15)
const CELEBRATION_DATE = new Date(2025, 0, 20); // January 20, 2025 - Change this to your actual date

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection targetDate={CELEBRATION_DATE} />
      <BlessingSection />
      <DuaSection />
      <MemorySection />
      <FamilyMessagesSection />
      <Footer />
    </main>
  );
};

export default Index;
