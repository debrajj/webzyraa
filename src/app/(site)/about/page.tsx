import { Metadata } from "next";
import AboutHero from "../../components/about/AboutHero";
import AboutContent from "../../components/about/AboutContent";
import MissionVision from "../../components/about/MissionVision";

export const metadata: Metadata = {
  title: "About Us | Webzyra",
  description: "Learn about Webzyra - a creative and tech-driven digital agency built on years of freelance experience and a passion for helping businesses grow online.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutContent />
      <MissionVision />
    </main>
  );
}