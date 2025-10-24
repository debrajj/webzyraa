'use client'
import Image from 'next/image'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { WebResultTagList } from '@/data'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

function WebResult() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <section id='aboutus'>
      <div className='section-spacing'>
        <div className='container'>
          <div className='flex flex-col lg:gap-10 gap-4'>
            <div className='flex flex-col items-center justify-center text-center gap-3'>
              <TextGenerateEffect
                words="Delivering game-changing results through cutting-edge technology and data-driven strategies that scale with"
                className="max-w-6xl px-4 lg:px-16 font-normal text-[16px] leading-[24px] md:font-medium md:text-[36px] md:leading-[40px] text-[rgb(27,29,30)]"
                duration={0.6}
              />
              <div className='flex justify-center gap-2 md:gap-0'>
                  {WebResultTagList.map((items:any, index:any) => (
                    <span
                      key={index}
                      className={`inline-flex m-0.5 md:m-2 py-1 md:py-1 px-2.5 md:px-5 gap-1 md:gap-3 rounded-full ${items.bg_color} ${items.txt_color} items-center text-xs md:text-3xl md:text-5xl lg:text-3xl`}>
                      <Image
                        src={items.image}
                        alt={items.name}
                        width={40}
                        height={40}
                        className='w-4 h-4 md:w-10 md:h-10'
                      />
                      <span className='instrument-font italic font-normal'>
                        {items.name}
                      </span>
                    </span>
                  ))}
              </div>
            </div>
            <div className='flex flex-row justify-center items-center text-center w-full'>
              <div className='relative flex-1 2xl:px-24 px-3 md:px-16 md:py-8 py-2'>
                <h2 ref={ref} className='2xl:text-6xl md:text-4xl text-4xl md:text-3xl lg:text-2xl leading-none'>
                  {inView ? <CountUp start={0} end={99} duration={3} /> : '0'}
                  <sup>+</sup>
                </h2>
                <p className='mt-2 text-xs md:text-base text-dark_black/60 dark:text-white/60'>
                  Success<br />Stories
                </p>
                <div className='hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-28 w-px bg-dark_black/10 dark:bg-white/10' />
              </div>
              <div className='relative flex-1 2xl:px-24 px-3 md:px-16 md:py-8 py-2'>
                <div className='absolute left-0 top-1/2 transform -translate-y-1/2 h-16 md:h-28 w-px bg-dark_black/10 dark:bg-white/10' />
                <h2 className='2xl:text-6xl md:text-4xl text-4xl md:text-3xl lg:text-2xl leading-none'>
                  {inView ? <CountUp start={0} end={4} duration={3} formattingFn={(value) => value.toString().padStart(2, '0')} /> : '00'}
                  <sup>+</sup>
                </h2>
                <p className='mt-2 text-xs md:text-base text-dark_black/60 dark:text-white/60'>
                  Years<br />Experience
                </p>
                <div className='absolute right-0 top-1/2 transform -translate-y-1/2 h-16 md:h-28 w-px bg-dark_black/10 dark:bg-white/10' />
              </div>
              <div className='relative flex-1 2xl:px-24 px-3 md:px-16 md:py-8 py-2'>
                <h2 className='2xl:text-6xl md:text-4xl text-4xl md:text-3xl lg:text-2xl leading-none'>
                  {inView ? <CountUp start={0} end={10} duration={3} /> : '0'}
                  <sup>+</sup>
                </h2>
                <p className='mt-2 text-xs md:text-base text-dark_black/60 dark:text-white/60'>
                  Industry<br />Awards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebResult
