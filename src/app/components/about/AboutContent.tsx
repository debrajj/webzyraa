'use client'
import { motion } from 'framer-motion'

export default function AboutContent() {
  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 }
  }

  return (
    <section className='py-8 md:py-16 2xl:py-20'>
      <div className='container'>
        <div className='grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center'>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-4 md:space-y-6'>
            <h2>
              Who We{' '}
              <span className='instrument-font italic font-normal dark:text-white/70'>
                Are
              </span>
            </h2>
            <div className='space-y-3 md:space-y-4 text-dark_black/70 dark:text-white/70'>
              <p className='text-base md:text-lg leading-relaxed'>
                We specialize in delivering high-performing websites, intuitive UI/UX designs, 
                and strategic social media solutions that connect brands with their audiences.
              </p>
              <p className='text-base md:text-lg leading-relaxed'>
                Our approach blends clean design, smart technology, and creative storytelling 
                to craft meaningful digital experiences that drive results.
              </p>
              <p className='text-base md:text-lg leading-relaxed'>
                At Webzyra, every project is a collaboration — focused on innovation, 
                detail, and lasting impact in the digital space.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='relative'>
            <div className='bg-gradient-to-br from-purple_blue/10 to-blue/10 dark:from-purple_blue/20 dark:to-blue/20 rounded-2xl p-6 md:p-8 lg:p-12'>
              <div className='grid grid-cols-2 gap-4 md:gap-6'>
                <motion.div
                  {...fadeInUp}
                  transition={{ delay: 0.2 }}
                  className='text-center'>
                  <div className='2xl:text-6xl md:text-4xl text-lg'>99<sup>+</sup></div>
                  <div className='text-xs md:text-base text-dark_black/60 dark:text-white/60'>
                    Projects<br />Completed
                  </div>
                </motion.div>
                <motion.div
                  {...fadeInUp}
                  transition={{ delay: 0.4 }}
                  className='text-center'>
                  <div className='2xl:text-6xl md:text-4xl text-lg'>04<sup>+</sup></div>
                  <div className='text-xs md:text-base text-dark_black/60 dark:text-white/60'>
                    Years<br />Experience
                  </div>
                </motion.div>
                <motion.div
                  {...fadeInUp}
                  transition={{ delay: 0.6 }}
                  className='text-center'>
                  <div className='2xl:text-6xl md:text-4xl text-lg'>10<sup>+</sup></div>
                  <div className='text-xs md:text-base text-dark_black/60 dark:text-white/60'>
                    Media<br />Publications
                  </div>
                </motion.div>
                <motion.div
                  {...fadeInUp}
                  transition={{ delay: 0.8 }}
                  className='text-center'>
                  <div className='2xl:text-6xl md:text-4xl text-lg'>24/7</div>
                  <div className='text-xs md:text-base text-dark_black/60 dark:text-white/60'>
                    Support<br />Anytime
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}