'use client'
import Image from 'next/image'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

function WebResult() {
  const [data, setData] = useState<any>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        setData(data?.WebResultTagList)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <section id='aboutus'>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col  lg:gap-16 gap-5'>
            <div className='flex flex-col items-center justify-center text-center gap-3'>
              <h2 className='max-w-6xl text-base sm:text-lg md:text-2xl lg:text-3xl px-4 lg:px-16 leading-tight'>
                Crafting exceptional, well experienced & technology driven
                strategies to drive impactful results with
              </h2>
              <div className='flex justify-center gap-2 md:gap-0'>
                  {data?.map((items:any, index:any) => (
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
                <h2 ref={ref} className='2xl:text-6xl md:text-4xl text-lg md:text-3xl lg:text-2xl'>
                  {inView ? <CountUp start={0} end={99} duration={3} /> : '0'}
                  <sup>+</sup>
                </h2>
                <p className='mt-2 text-xs md:text-base text-dark_black/60 dark:text-white/60'>
                  Projects<br />Completed
                </p>
                <div className='hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-28 w-px bg-dark_black/10 dark:bg-white/10' />
              </div>
              <div className='relative flex-1 2xl:px-24 px-3 md:px-16 md:py-8 py-2'>
                <div className='absolute left-0 top-1/2 transform -translate-y-1/2 h-16 md:h-28 w-px bg-dark_black/10 dark:bg-white/10' />
                <h2 className='2xl:text-6xl md:text-4xl text-lg md:text-3xl lg:text-2xl'>
                  04
                  <sup>+</sup>
                </h2>
                <p className='mt-2 text-xs md:text-base text-dark_black/60 dark:text-white/60'>
                  Years<br />Experience
                </p>
                <div className='absolute right-0 top-1/2 transform -translate-y-1/2 h-16 md:h-28 w-px bg-dark_black/10 dark:bg-white/10' />
              </div>
              <div className='relative flex-1 2xl:px-24 px-3 md:px-16 md:py-8 py-2'>
                <h2 className='2xl:text-6xl md:text-4xl text-lg md:text-3xl lg:text-2xl'>
                  {inView ? <CountUp start={0} end={10} duration={3} /> : '0'}
                  <sup>+</sup>
                </h2>
                <p className='mt-2 text-xs md:text-base text-dark_black/60 dark:text-white/60'>
                  Media<br />Publications
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
