'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import StarRating from '../../shared/star-rating'

function HeroSection() {
  const ref = useRef(null)
   const [avatarList, setAvatarList] = useState<any>([]);
   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()        
        setAvatarList(data)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching services:', error)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const bottomAnimation = {
    initial: { y: '20%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 },
  }

  return (
    <section id='home'>
      <div className='relative w-full pt-40 pb-16 md:pb-20 2xl:pb-24 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10'>
        <div className='container relative z-10'>
          <div ref={ref} className='flex flex-col gap-8'>
            {/* ---------------- heading text --------------- */}
            <motion.div
              {...bottomAnimation}
              className='relative flex flex-col text-center items-center gap-4'>
              <h1 className='font-semibold w-full lg:px-16 lg:pt-12 text-4xl sm:text-5xl md:text-5xl lg:text-7xl leading-tight sm:leading-snug lg:leading-none'>
                Building powerful websites with
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  {' '}
                  modern technology
                </span>
              </h1>
              <p className='max-w-38 text-dark_black/60 dark:text-white/60'>
  At Webzyra, we help startups tackle UI/UX design, social media marketing, and web
  development. <span className="hidden md:inline">From stunning interfaces to engaging social campaigns,
  we bring your digital vision to life.</span>
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
                    {!isLoading && avatarList?.avatarList?.map((items:any, index:any) => (
                      <li key={index} className='-mr-2 z-1 avatar-hover:ml-2'>
                        <Image
                          src={items.image}
                          alt='Image'
                          width={44}
                          height={44}
                          quality={100}
                          className='rounded-full border-2 border-blue-500 md:border-white w-7 h-7 md:w-11 md:h-11'
                          unoptimized={true}
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
                      Trusted by 500+ businesses
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
