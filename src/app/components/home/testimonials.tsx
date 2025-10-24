"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonialsList } from "@/data";

export default function Testimonials() {
  return (
    <section id='testimonials'>
      <div className='section-spacing'>
        <div className='container'>
          <div className='flex flex-col gap-6 md:gap-12'>
            <div className='max-w-3xl text-center mx-auto'>
              <h2>
                What our clients say about our{' '}
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  exceptional work
                </span>
              </h2>
            </div>
            <div className="rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
              <InfiniteMovingCards
                items={testimonialsList}
                direction="right"
                speed="slow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

