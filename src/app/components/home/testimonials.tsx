"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <section id='testimonials'>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col gap-10 md:gap-20'>
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
                items={testimonials}
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

const testimonials = [
  {
    quote:
      "Working with this team has been an absolute game-changer for our business. Their expertise and dedication exceeded all expectations. From the initial consultation to the final delivery, every aspect was handled with remarkable professionalism. The innovative solutions they provided not only solved our immediate challenges but also positioned us for future growth. I couldn't be more impressed with their work ethic and results.",
    name: "Ezra Cohen",
    title: "CEO, TechStart",
    image: "/images/assets/testimonial-ezra.jpeg",
  },
  {
    quote:
      "The level of professionalism and quality delivered was outstanding. They transformed our vision into reality seamlessly, exceeding every milestone we set together. Their technical expertise combined with creative problem-solving made the entire process smooth and enjoyable. The attention to detail in every aspect of the project was truly impressive, and the final product has significantly improved our business operations and customer satisfaction.",
    name: "Omar Hassan",
    title: "Founder, Digital Solutions",
    image: "/images/assets/testimonial-omar.jpeg",
  },
  {
    quote:
      "Exceptional service and innovative solutions. The team's attention to detail and commitment to excellence is remarkable. They didn't just deliver what we asked for – they anticipated our needs and provided solutions we didn't even know we needed. Their proactive approach, combined with deep technical knowledge and excellent communication throughout the project, made this collaboration truly outstanding. The results speak for themselves.",
    name: "Yaron Levy",
    title: "CTO, InnovateCorp",
    image: "/images/assets/testimonial-yaron.jpeg",
  },
];