import Carousel from "@/components/carousel/carousel";
import Companies from "@/components/companies/companies";
import Contact from "@/components/contact/contact";
import Features from "@/components/features/feautures";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Testimonials from "@/components/testimonials/testimonials";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <main >
      {/* <Header/> */}
        <div className="sm:mt-16  mt-32 z-30">
           <Hero/>

      <Companies/> 
      <Features/>
      <hr />
      <Testimonials/>
      <Contact/>
        </div>
     
      {/* <Footer/> */}
     </main>
    
    // </main>
  );
}
