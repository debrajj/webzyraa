'use client'
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, ArrowUpRight } from 'lucide-react';

// Local image imports - using string paths for Next.js public directory
const myntraClone = "/images/assets/landing page.png";
const realtimeChess = "/images/assets/chess.png";
const damatiFoods = "/images/assets/damatifoods-projects.png";
const joyspoon = "/images/assets/joyspoon_ projects.png";
const autologueDesign = "/images/assets/autologousnew.png";
const specsmaker = "/images/assets/specsmaker.png";
const zubeenImage = "/images/assets/zubeenda_blog_ projects.png";
const kyrabags = "/images/assets/kyrabags_ projects.png";
const snuggle = "/images/assets/snuggl.png";
const sriworld = "/images/assets/srilabs.png";
const moizschool = "/images/assets/moizschool.png";
const nistaraNaturals = "/images/assets/nistara.png";
const eazypay = "/images/assets/ezypay.png";
const lepoppy = "/images/assets/lepoppy_projects.png";
const adLabs = "/images/assets/more.png";
const anjan = "/images/assets/anjandatta.png";
const armi = "/images/assets/armi.png";
const vedIn = "/images/assets/ved.png";
const vit = "/images/assets/vitamin.png";
const golii = "/images/assets/goli_projects.png";
const yogaa = "/images/assets/yogaa.png";
const o2nutrition = "/images/assets/o2nutrition.png";

export const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const projects = [
    {
      title: "Joyspoon",
      description: "A vibrant wellness brand blending tradition with taste, specializing in handcrafted mukhwas and digestive blends — proudly featured on Shark Tank India and received a deal from Ritesh Agarwal, founder of OYO.",
      image: joyspoon,
      website: "https://joyspoon.in/",
      category: "E-commerce",
      tags: ["React", "Next.js", "TypeScript", "Tailwind", "Node.js"],
    },    
    {
      title: "AutoLogue Design",
      description: "A leading motorcycle accessories brand known for precision-crafted parts and bold, performance-driven aesthetics.",
      image: autologueDesign,
      website: "https://autologuedesign.com/",
      category: "E-commerce",
      tags: ["React", "Next.js", "TypeScript", "Tailwind", "MongoDB"],
    },
    {
      title: "Nistara Naturals",
      description: "A conscious skincare brand rooted in Ayurveda, offering plant-based products designed to nourish, restore, and elevate everyday wellness.",
      image: nistaraNaturals,
      website: "https://nistaranaturals.com/",
      category: "Beauty & Wellness",
      tags: ["React", "Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    },
    {
      title: "Vitamin Energy",
      description: "A fast-growing brand delivering energy shots packed with vitamins. The Shopify storefront reflects a bold and energetic design, optimized for fast checkouts and mobile users.",
      image: vit,
      website: "https://vitaminenergy.com/",
      category: "Health & Nutrition",
      tags: ["React", "Next.js", "TypeScript", "Stripe", "AWS"],
    },
    {
      title: "Zubeenda.online",
      description: "A heartfelt digital tribute to Zubeen Garg, the legendary Assamese singer known as Luit Kontho. Built in just 3 days with cultural elements celebrating Assamese heritage and the Humming King's musical legacy.",
      image: zubeenImage,
      website: "https://zubeenda.online/",
      category: "Cultural",
      tags: ["React", "Tribute", "Cultural", "Responsive", "SEO"],
    },
    {
      title: "Myntra Clone",
      description: "A fashion e-commerce clone replicating Myntra's shopping experience, with product filtering, detail pages, and backend cart management.",
      image: myntraClone,
      website: "https://myntra-cloneweb.netlify.app/",
      category: "Fashion Tech",
      tags: ["React", "TypeScript", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "Vedancy",
      description: "A premium wellness brand offering Ayurvedic and herbal supplements. Built on Shopify with a clean, trust-building user experience and high-converting product pages.",
      image: vedIn,
      website: "https://vedancy.com/",
      category: "Wellness",
      tags: ["React", "Next.js", "TypeScript", "Sanity", "Vercel"],
    },
    {
      title: "Realtime Chess",
      description: "Multiplayer chess game using WebSockets. Features real-time moves, room-based play, and responsive design.",
      image: realtimeChess,
      website: "https://realtimechess.netlify.app/",
      category: "Gaming",
      tags: ["React", "TypeScript", "Socket.io", "Node.js", "Redis"],
    },
    {
      title: "Damati Foods",
      description: "A gourmet food brand offering authentic and premium culinary products crafted with Indian flavors and traditions.",
      image: damatiFoods,
      website: "https://damatifoods.com/",
      category: "Food & Beverage",
      tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    },
    {
      title: "Specsmakers",
      description: "A modern eyewear brand offering affordable yet stylish glasses, blending function, fashion, and visual clarity.",
      image: specsmaker,
      website: "https://specsmakers.in/",
      category: "Fashion",
      tags: ["React", "Next.js", "TypeScript", "Tailwind", "Accessibility"],
    },
    {
      title: "Kyra Bags",
      description: "A modern handbag brand celebrating contemporary fashion with utility, crafted for everyday confidence and style.",
      image: kyrabags,
      website: "https://kyrabags.in/",
      category: "Fashion",
      tags: ["React", "Next.js", "TypeScript", "Tailwind", "Responsive"],
    },
    {
      title: "Snuggl",
      description: "A lifestyle brand focused on comfort-first products designed to bring warmth, ease, and everyday relaxation.",
      image: snuggle,
      website: "https://shopsnuggl.com/",
      category: "Lifestyle",
      tags: ["React", "Next.js", "TypeScript", "Tailwind", "Zustand"],
    },
    {
      title: "Goli",
      description: "A globally recognized wellness brand known for its Apple Cider Vinegar and Ashwagandha gummies — built on Shopify to deliver a vibrant, health-focused experience.",
      image: golii,
      website: "https://goli.com/",
      category: "Wellness",
      tags: ["React", "Next.js", "TypeScript", "Shopify API", "GraphQL"],
    },
    {
      title: "SRI.World",
      description: "A sustainability-driven brand that empowers conscious living through ethically made products and clean practices.",
      image: sriworld,
      website: "https://sri.world/",
      category: "Sustainability",
      tags: ["React", "Next.js", "TypeScript", "Tailwind", "Sustainability"],
    },
    {
      title: "Moiz School",
      description: "An educational institution offering Islamic learning and values-based education in a modern digital environment.",
      image: moizschool,
      website: "https://moizschool.com/",
      category: "Education",
      tags: ["React", "Next.js", "TypeScript", "Tailwind", "Education"],
    },
    {
      title: "Armi Supplements",
      description: "A modern wellness brand offering science-backed supplements designed to support daily vitality, performance, and optimal living.",
      image: armi,
      website: "https://armisupplements.com/",
      category: "Wellness",
      tags: ["React", "Next.js", "TypeScript", "Tailwind", "Wellness"],
    },
    {
      title: "EazyPPay",
      description: "An online payment solution designed to simplify digital transactions for businesses and customers alike.",
      image: eazypay,
      website: "https://eazyppay.com/",
      category: "Fintech",
      tags: ["React", "TypeScript", "Node.js", "Express", "Payment Gateway"],
    },
    {
      title: "Le Poppy",
      description: "A lifestyle brand curating beautifully designed products for modern living, inspired by minimalism and warmth.",
      image: lepoppy,
      website: "https://le-poppy.com/",
      category: "Lifestyle",
      tags: ["React", "Next.js", "TypeScript", "Tailwind", "Minimalism"],
    },
    {
      title: "Ad Labs by More Than Scaling",
      description: "A conversion-focused sales funnel built to enroll clients into ad strategy labs using compelling, high-converting pages.",
      image: adLabs,
      website: "https://start.morethanscaling.com/ad-labs",
      category: "Marketing",
      tags: ["React", "Next.js", "TypeScript", "Tailwind", "Conversion"],
    },
    {
      title: "Anjan Datta — Yarns of Indigo",
      description: "A soulful brand celebrating mindful living and artisanal heritage through yoga-inspired storytelling and natural aesthetics.",
      image: anjan,
      website: "https://n.revirtodemo.com/",
      category: "Wellness",
      tags: ["React", "Next.js", "TypeScript", "Tailwind", "Holistic"],
    },
    {
      title: "The Shashank Yoga",
      description: "A soulful brand celebrating mindful living and artisanal heritage through yoga-inspired storytelling and natural aesthetics.",
      image: yogaa,
      website: "https://theshashankyoga.com/",
      category: "Wellness",
      tags: ["React", "Next.js", "TypeScript", "Tailwind", "Yoga"],
    },
    {
      title: "O² Nutrition",
      description: "At O² Nutrition, we believe that fitness is not just about building bodies — it's about building trust, discipline, and a future where every athlete has access to the right fuel for their journey.",
      image: o2nutrition,
      website: "https://o2nutrition.in/",
      category: "Sports Nutrition",
      tags: ["React", "Vite", "Next.js", "Payload", "VPS Server"],
    }
  ];
  
  const nextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentProject((prev) => (prev + 1) % projects.length);
    resetInterval();
  };

  const prevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    resetInterval();
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [projects.length]);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentProject]);

  return (
    <section id='work'>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col gap-10 md:gap-20'>
            {/* Header */}
            <div className='max-w-3xl text-center mx-auto'>
              <h2>
                Crafting digital experiences that{' '}
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  transform brands
                </span>
              </h2>
            </div>

            {/* Carousel */}
            <div className='relative overflow-hidden'>
              <div className='flex transition-transform duration-700 ease-out'
                   style={{ transform: `translateX(-${currentProject * 100}%)` }}>
                {projects?.map((project, index) => (
                  <div 
                    key={index} 
                    className='w-full flex-shrink-0'
                  >
                        <div className='group cursor-pointer h-full'>
                          <div className='relative overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-800 h-[600px] md:h-[700px]'>
                            <img
                              src={project.image}
                              alt={project.title}
                              className='w-full h-full object-fill transition-transform duration-700 group-hover:scale-105'
                            />
                            
                            {/* Overlay */}
                            <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'>
                              <div className='absolute inset-0 p-8 md:p-10 flex flex-col justify-between'>
                                {/* Top - Category & Link */}
                                <div className='flex justify-between items-start'>
                                  <span className='inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20'>
                                    {project.category}
                                  </span>
                                  <a
                                    href={project.website}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group/link'
                                  >
                                    <ArrowUpRight className='w-6 h-6 text-white transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5' />
                                  </a>
                                </div>

                                {/* Bottom - Content */}
                                <div className='space-y-8'>
                                  <h3 className='text-3xl md:text-4xl font-bold text-white'>
                                    {project.title}
                                  </h3>
                                  <p className='text-white/90 text-base md:text-lg leading-relaxed line-clamp-2 mb-8'>
                                    {project.description}
                                  </p>
                                  <div className='flex gap-2 flex-wrap'>
                                    {project.tags?.slice(0, 4).map((tag, tagIndex) => (
                                      <span
                                        key={tagIndex}
                                        className='px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20'
                                      >
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Default state - Just title at bottom */}
                            <div className='absolute bottom-0 left-0 right-0 p-8 md:p-10 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-500'>
                              <h3 className='text-2xl md:text-3xl font-bold text-white mb-2'>
                                {project.title}
                              </h3>
                              <span className='text-white/70 text-sm'>{project.category}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              


              {/* Progress Indicators */}
              <div className='flex justify-center gap-2 mt-8'>
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true);
                        setCurrentProject(index);
                        resetInterval();
                      }
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentProject 
                        ? 'w-12 bg-purple-600' 
                        : 'w-1.5 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;