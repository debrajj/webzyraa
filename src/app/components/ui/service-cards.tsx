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
      description:
        "We craft high-performance websites using WordPress, Shopify, or custom code. Whether you're launching a store or a bespoke platform, we build fast, mobile-friendly, and scalable solutions that drive growth.",
      badgeText: "WordPress • Shopify •Custom Code",
      hoverText: "Website",
    },
    {
      title: "Social Media Marketing",
      description:
        "From engaging Instagram Reels to Facebook posts, we grow your presence with scroll-stopping content and smart strategy. Let’s turn followers into loyal customers and amplify your brand’s voice.",
      badgeText: "Reels • Posts • Growth",
      hoverText: "SMM",
    },
    {
      title: "Branding",
      description:
        "Your brand is more than a logo. We build memorable brand identities with stunning visuals, consistent messaging, and clear strategy—helping you stand out and stay unforgettable.",
      badgeText: "Logos • Identity • Style",
      hoverText: "Branding",
    },
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
