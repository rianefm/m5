import AllOngsSection from "@/app/components/AllOngsSection";
import FooterSection from "@/app/components/FooterSection";
import GalleryServicesSection from "@/app/components/GalleryServicesSection";
import HeroSection from "@/app/components/HeroSection";
import InteractiveFilterSection from "@/app/components/InteractiveFilterSection";

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto p-4">
      <HeroSection />
      <GalleryServicesSection />
      <InteractiveFilterSection />
      <AllOngsSection />
      <FooterSection />
    </main>
  );
}
