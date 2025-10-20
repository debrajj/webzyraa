'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function MissionVision() {
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 }
  }

  return (
    <section className='py-8 md:py-16 2xl:py-20 bg-gradient-to-b from-transparent via-blue_gradient/20 to-transparent dark:via-dark_blue_gradient/20'>
      <div className='container'>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-8 md:mb-12 lg:mb-16'>
          <h2>
            Our{' '}
            <span className='instrument-font italic font-normal dark:text-white/70'>
              Purpose
            </span>
          </h2>
          <p className='text-lg text-dark_black/70 dark:text-white/70 max-w-2xl mx-auto'>
            Driven by innovation and guided by purpose
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12'>
          <motion.div
            {...cardVariants}
            transition={{ delay: 0.2 }}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
            className='group'>
            <div className='bg-white dark:bg-dark_black/50 rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 h-full'>
              <div className='flex items-center mb-4 md:mb-6'>
                <div className='w-12 h-12 bg-dark_black dark:bg-white/10 rounded-lg flex items-center justify-center mr-4'>
                  <svg className='w-6 h-6 text-white dark:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                  </svg>
                </div>
                <h3 className='text-2xl md:text-3xl font-semibold text-dark_black dark:text-white'>
                  Mission
                </h3>
              </div>
              <p className='text-base md:text-lg leading-relaxed text-dark_black/70 dark:text-white/70'>
                To empower businesses and individuals with modern digital tools and creative 
                solutions that help them stand out, engage audiences, and achieve sustainable 
                growth online.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...cardVariants}
            transition={{ delay: 0.4 }}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
            className='group'>
            <div className='bg-white dark:bg-dark_black/50 rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 h-full'>
              <div className='flex items-center mb-4 md:mb-6'>
                <div className='w-12 h-12 bg-dark_black dark:bg-white/10 rounded-lg flex items-center justify-center mr-4'>
                  <svg className='w-6 h-6 text-white dark:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                  </svg>
                </div>
                <h3 className='text-2xl md:text-3xl font-semibold text-dark_black dark:text-white'>
                  Vision
                </h3>
              </div>
              <p className='text-base md:text-lg leading-relaxed text-dark_black/70 dark:text-white/70'>
                To become a trusted creative-tech agency recognized for beautiful design, 
                clean code, and impactful digital results that inspire growth and innovation.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className='mt-8 md:mt-12 lg:mt-16'>
          <div className='py-12 md:py-20 lg:py-28 px-6 border border-dark_black/10 rounded-3xl bg-[linear-gradient(90deg,#CDEFFB_0%,#FFFFFF_33.23%,#FFFFFF_65.77%,#FDEECB_100%)] backdrop-blur-[200px] dark:opacity-80'>
            <div className='flex flex-col gap-4 md:gap-6 items-center md:max-w-3xl mx-auto'>
              <div className='flex flex-col gap-2 md:gap-3 items-center text-center'>
                <h2 className='text-3xl md:text-5xl dark:text-dark_black'>
                  Innovative Solutions for{' '}
                  <span className='instrument-font italic font-normal dark:text-black/70'>
                    Bold Brands
                  </span>
                </h2>
                <p className='dark:text-dark_black'>
                  Looking to elevate your brand? We craft immersive experiences
                  that captivate, engage, and make your business unforgettable
                  in every interaction.
                </p>
              </div>
              <Link
                href='/contact'
                className='group w-fit text-white font-medium bg-dark_black rounded-full flex items-center gap-4 py-0.5 md:py-2 pl-3 md:pl-5 pr-1 md:pr-2 hover:bg-transparent border border-dark_black'>
                <span className='group-hover:translate-x-9 group-hover:text-dark_black transform transition-transform duration-200 ease-in-out'>
                  Let's Collaborate
                </span>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='group-hover:-translate-x-36 transition-all duration-200 ease-in-out group-hover:rotate-45'>
                  <rect
                    width='32'
                    height='32'
                    rx='16'
                    fill='white'
                    className='fill-white transition-colors duration-200 ease-in-out group-hover:fill-black'
                  />
                  <path
                    d='M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668'
                    stroke='#1B1D1E'
                    strokeWidth='1.42857'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='stroke-[#1B1D1E] transition-colors duration-200 ease-in-out group-hover:stroke-white'
                  />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}