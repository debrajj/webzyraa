'use client'
import { motion } from 'framer-motion'

export default function AboutHero() {
  const bottomAnimation = {
    initial: { y: '20%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.3 },
  }

  return (
    <section className='pt-24 pb-8 md:pt-40 md:pb-16 2xl:pb-24'>
      <div className='relative w-full before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-0 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient'>
        <div className='container relative z-10'>
          <motion.div
            {...bottomAnimation}
            className='text-center max-w-4xl mx-auto'>
            <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4 md:mb-6'>
              About{' '}
              <span className='instrument-font italic font-normal text-purple_blue'>
                Webzyra
              </span>
            </h1>
            <p className='text-lg md:text-xl text-dark_black/70 dark:text-white/70 max-w-3xl mx-auto'>
              A creative and tech-driven digital agency built on years of freelance experience 
              and a passion for helping businesses grow online.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}