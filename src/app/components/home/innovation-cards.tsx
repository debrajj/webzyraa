import React from "react";
import { EvervaultCardDemo } from "../ui/evervault-card-demo";
import { SocialMediaCard } from "../ui/social-media-card";
import { WebDevelopmentCard } from "../ui/web-development-card";

export function InnovationCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <EvervaultCardDemo />
      <SocialMediaCard />
      <WebDevelopmentCard />
    </div>
  );
}