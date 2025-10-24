import dynamic from 'next/dynamic';
import HeroSection from "./components/home/hero";

// Lazy load components that are below the fold
const Brand = dynamic(() => import("./components/home/brand"), {
  loading: () => <div className="h-20 animate-pulse bg-gray-100" />
});
const WebResult = dynamic(() => import("./components/home/web-result"));
const Innovation = dynamic(() => import("./components/home/innovation"));
const ProjectsSection = dynamic(() => import("./components/home/projects"));
const Testimonials = dynamic(() => import("./components/home/testimonials"));
const Faq = dynamic(() => import("./components/home/faq"));
const Solutions = dynamic(() => import("./components/home/solution"));

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
