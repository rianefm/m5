import AllOngsSection from "@/app/components/AllOngsSection";
import OngsByStateSection from "@/app/components/OngsByStateSection";
import OngsByServiceSection from "@/app/components/OngsByServiceSection";

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto p-4">
      <AllOngsSection />
      <OngsByStateSection />
      <OngsByServiceSection />
    </main>
  );
}
