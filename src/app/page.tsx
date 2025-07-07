import AllOngsSection from "@/app/components/AllOngsSection";
import FooterSection from "@/app/components/FooterSection";
import HeroSection from "@/app/components/HeroSection";
import InteractiveFilterSection from "@/app/components/InteractiveFilterSection";
import OngsByServiceSection from "@/app/components/OngsByServiceSection";
import OngsByStateSection from "@/app/components/OngsByStateSection";

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto p-4">
      <HeroSection />
      <InteractiveFilterSection />
      <AllOngsSection />
      <OngsByStateSection />
      <OngsByServiceSection />
      <FooterSection />
    </main>
  );
}
