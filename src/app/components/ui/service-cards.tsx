import React from "react";
import { EvervaultCard, Icon } from "./evervault-card";

interface ServiceCardProps {
  title: string;
  description: string;
  badgeText: string;
  hoverText: string;
}

function ServiceCard({ title, description, badgeText, hoverText }: ServiceCardProps) {
  return (
    <div className="border border-black/[0.2] dark:border-white/[0.2] bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black flex flex-col items-start w-full mx-auto p-4 pb-8 sm:pb-6 relative h-[32rem] sm:h-[32rem] touch-manipulation active:scale-[0.99] transition-transform">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" /> 
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <EvervaultCard text={hoverText} />

      <h2 className="dark:text-white text-black mt-4 mb-[8px] pb-[25px] text-sm font-light">
        {description}
      </h2>
      <p className="absolute bottom-3 left-3 mt-[8px] text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full text-black dark:text-white px-2 py-0.5">
        {badgeText}
      </p>
    </div>
  );
}

export function ServiceCards() {
  const services = [
    {
      title: "Web Development",
      description: "We build modern, responsive, and scalable web applications tailored to your business needs. From frontend interfaces to backend systems, we deliver high-performance solutions that drive results.",
      badgeText: "Full Stack Solutions",
      hoverText: "Web"
    },
    {
      title: "UI/UX Design",
      description: "We create stunning, user-friendly designs that engage your audience. Our design process focuses on understanding your users and crafting experiences that are both beautiful and intuitive.",
      badgeText: "Design Excellence",
      hoverText: "UI/UX"
    },
    {
      title: "Social Media",
      description: "We manage and grow your brand's social media presence across all platforms. From content creation to community engagement, we help you connect with your audience and build lasting relationships.",
      badgeText: "Brand Growth",
      hoverText: "Social"
    }
  ];

  return (
    <div className="grid auto-rows-max grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          badgeText={service.badgeText}
          hoverText={service.hoverText}
        />
      ))}
    </div>
  );
}
