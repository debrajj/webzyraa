'use client'
import Link from 'next/link'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ServiceCards } from '../../ui/service-cards'

function Innovation() {
  const ref = useRef(null)
  const inView = useInView(ref)

  const bottomAnimation = (index: any) => ({
    initial: { y: '25%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '25%', opacity: 0 },
    transition: { duration: 0.3, delay: 0.3 + index * 0.3 },
  })
  return (
    <section id='services' className='bg-white dark:bg-black'>
      <div ref={ref} className='section-spacing'>
        <div className='container'>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col justify-center items-center gap-6 lg:gap-10'>
              <motion.div
                {...bottomAnimation(1)}
                className='max-w-(--breakpoint-Xsm) text-center'>
                <h2>
                  Where strategy meets{' '}
                  <span className='instrument-font italic font-normal dark:text-white/70'>
                    execution
                  </span>
                </h2>
              </motion.div>
              <motion.div
                {...bottomAnimation(2)}
                className='w-full'>
                <ServiceCards />
              </motion.div>
            </div>
            <motion.div
              {...bottomAnimation(3)}
              className='flex flex-col gap-4 xl:flex xl:flex-row bg-dark_black items-center justify-between dark:bg-white/5 py-8 px-7 sm:px-12 rounded-3xl w-full border-2 border-gray-800 dark:border-white/20'>
              <h4 className='text-white text-center xl:text-left text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl leading-tight'>
                Ready to 10x Your Growth?<br className='hidden md:block' />
                <span className='hidden md:inline'>Let's Build Your Digital Empire Together!</span>
              </h4>
              <div className='flex flex-col sm:flex-row gap-3 items-center'>
                <Link
                  href='/contact'
                  className='group gap-2 text-dark_black font-medium bg-white rounded-full flex items-center lg:gap-4 py-0.5 md:py-2 pl-3 md:pl-5 pr-1 md:pr-2 border border-white dark:border-opacity-50 hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out'>
                  <span className='group-hover:translate-x-9 transform transition-transform duration-200 ease-in-out'>
                    Let’s Collaborate
                  </span>
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='group-hover:-translate-x-36 transition-all duration-200 ease-in-out'>
                    <rect
                      width='32'
                      height='32'
                      rx='16'
                      fill='#1B1D1E'
                      className=' transition-colors duration-200 ease-in-out group-hover:fill-white'
                    />
                    <path
                      d='M11.832 11.3335H20.1654M20.1654 11.3335V19.6668M20.1654 11.3335L11.832 19.6668'
                      stroke='white'
                      strokeWidth='1.42857'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='group-hover:stroke-black'
                    />
                  </svg>
                </Link>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Innovation
