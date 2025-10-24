'use client'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import StarRating from '../../shared/star-rating'
import { avatarList } from '@/data'
import OptimizedAvatar from '@/components/OptimizedAvatar'

function HeroSection() {
  const bottomAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.2 }
  }

  return (
    <section id='home'>
      <div className='relative w-full pt-40 pb-16 md:pb-20 2xl:pb-24 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10'>
        <div className='container relative z-10'>
          <div className='flex flex-col gap-8'>
            {/* ---------------- heading text --------------- */}
            <motion.div
              {...bottomAnimation}
              className='relative flex flex-col text-center items-center gap-4'>
              <h1 className='font-semibold w-full px-1.5 lg:px-20 lg:pt-12 text-3xl sm:text-5xl md:text-5xl lg:text-7xl leading-tight sm:leading-snug lg:leading-none'>
                We turn your business into the brand
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  {' '}
                  people can't stop talking about
                </span>
              </h1>
              <p className='max-w-38 text-dark_black/60 dark:text-white/60'>
  At Webzyra, we create designs that convert, campaigns that go viral, and websites that sell. <span className="hidden md:inline">We'll transform your business into the brand everyone remembers and recommends.</span>
</p>


            </motion.div>

            <motion.div
              {...bottomAnimation}
              className='flex flex-col items-center justify-center gap-4'>
              <div className='flex flex-col items-center justify-center gap-4 w-full sm:flex-row sm:gap-8'>
                {/* ----------- Get started Link -------------- */}
                <Link
                  href='/contact'
                  className='group bg-purple_blue text-white font-medium flex flex-row justify-between items-center py-0.5 md:py-1 px-3 md:px-5 rounded-full w-49 md:max-w-64 md:w-full border border-purple_blue transition-all duration-200 ease-in-out hover:bg-transparent hover:text-purple_blue'>
                  <span className='flex text-start transform transition-transform duration-200 ease-in-out group-hover:translate-x-28'>
                    Get Started
                  </span>
                  <svg
                    width='40'
                    height='40'
                    viewBox='0 0 40 40'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='transform transition-transform duration-200 ease-in-out group-hover:-translate-x-44 group-hover:rotate-45'>
                    <rect
                      width='40'
                      height='40'
                      rx='20'
                      className='fill-white transition-colors duration-200 ease-in-out group-hover:fill-purple_blue'
                    />
                    <path
                      d='M15.832 15.3334H24.1654V23.6667'
                      className='stroke-[#1B1D1E] transition-colors duration-200 ease-in-out group-hover:stroke-white'
                      strokeWidth='1.66667'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M15.832 23.6667L24.1654 15.3334'
                      className='stroke-[#1B1D1E] transition-colors duration-500 ease-in-out group-hover:stroke-white'
                      strokeWidth='1.66667'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Link>

                {/* --------------- avatar division -------------- */}
                <div className='flex items-center gap-1 md:gap-7'>
                  <ul className='avatar flex flex-row items-center'>
                    {avatarList?.map((items:any, index:any) => (
                      <li key={index} className='-mr-2 z-1 avatar-hover:ml-2'>
                        <OptimizedAvatar
                          src={items.image}
                          alt={items.title}
                          priority={index < 2}
                          className='rounded-full border-2 border-blue-500 md:border-white w-7 h-7 md:w-11 md:h-11'
                        />
                      </li>
                    ))}
                  </ul>
                  {/* -------------- Star rating division --------------- */}
                  <div className='gap-1 flex flex-col scale-75 md:scale-100'>
                    <div>
                      <StarRating count={4} color='#F59E0B' />
                    </div>
                    <p className='text-xs md:text-sm font-normal text-dark_black/60 dark:text-white/60'>
                      Trusted by 200+ businesses
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
