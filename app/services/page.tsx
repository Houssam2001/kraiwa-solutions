import Header from "@/components/header/header";
import ServicesSection from "@/components/services/services";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Services() {
  return (
    <AuroraBackground>
      <div className="sm:mt-16  mt-32">
        <ServicesSection />
      </div>
    </AuroraBackground>
  );
}
