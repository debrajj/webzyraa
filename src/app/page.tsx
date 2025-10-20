import { Metadata } from "next";
import Brand from "./components/home/brand";
import Faq from "./components/home/faq";
import HeroSection from "./components/home/hero";
import Innovation from "./components/home/innovation";
import ProjectsSection from "./components/home/projects";
import Solutions from "./components/home/solution";
import Testimonials from "./components/home/testimonials";
import WebResult from "./components/home/web-result";

export const metadata: Metadata = {
    title: "Home | Webzyra",
};


export default function Home() {
  return (
    <main>
      {/* ---------------------Hero section Starts-----------------  */}
      <HeroSection />
      {/* ---------------------Hero section Ends-----------------  */}

      {/* ---------------------Brand logo section Starts-----------------  */}
      <Brand />
      {/* ---------------------Brand logo section Ends-----------------  */}

      {/* ---------------------Web result section Starts-----------------  */}
      <WebResult />
      {/* ---------------------Web result section Ends-----------------  */}

      {/* ---------------------Innovation section Starts-----------------  */}
      <Innovation />
      {/* ---------------------Innovation section Ends-----------------  */}

      {/* ---------------------Projects section Starts-----------------  */}
      <ProjectsSection />
      {/* ---------------------Projects section Ends-----------------  */}

      {/* ---------------------Testimonials section Starts-----------------  */}
      <Testimonials />
      {/* ---------------------Testimonials section Ends-----------------  */}

      {/* ---------------------Faq section Starts-----------------  */}
      <Faq />
      {/* ---------------------Faq section Ends-----------------  */}

      {/* ---------------------Solutions section Starts-----------------  */}
      <Solutions />
      {/* ---------------------Solutions section Ends-----------------  */}
    </main>
  )
}
