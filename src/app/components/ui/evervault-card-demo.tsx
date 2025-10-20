import React from "react";
import { EvervaultCard, Icon } from "../ui/evervault-card";

export function EvervaultCardDemo() {
  return (
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <EvervaultCard text="hover" />

      <div className="mt-4 flex items-center gap-3">
        <div className="p-2 rounded-lg bg-orange/20">
          <img src="/images/home/innovation/uiux.svg" alt="UI/UX Design" className="w-6 h-6" />
        </div>
        <h2 className="text-sm font-medium text-orange">
          UI/UX<br />Design
        </h2>
      </div>
      
      <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
        Hover to explore
      </p>
    </div>
  );
}