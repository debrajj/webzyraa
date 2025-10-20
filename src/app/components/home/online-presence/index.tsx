'use client'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function OnlinePresence() {
  const [onlinePresenceList, setonlinePresenceList] = useState<any>(null);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch('/api/page-data')
          if (!res.ok) throw new Error('Failed to fetch')
  
          const data = await res.json()
          setonlinePresenceList(data?.onlinePresenceList)
        } catch (error) {
          console.error('Error fetching services:', error)
        }
      }
  
      fetchData()
    }, [])

  return (
    <section id='work' className='2xl:py-20 py-11'>
      <div className='container'>
        <div className='flex flex-col justify-center items-center gap-10 md:gap-20'>
          <div className='max-w-2xl text-center'>
            <h2>
              How we transformed a small business's
              <span className='instrument-font italic font-normal dark:text-white/70'>
                {' '}
                online presence
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className='w-full mt-10 md:mt-20'>
        <div className='online-presence-swiper'>
          {onlinePresenceList && (
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1.15}
              spaceBetween={16}
              centeredSlides={false}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                320: { slidesPerView: 1.15, spaceBetween: 16 },
                425: { slidesPerView: 1.18, spaceBetween: 18 },
                640: { slidesPerView: 1.2, spaceBetween: 20 },
                768: { slidesPerView: 1.22, spaceBetween: 24 },
                1024: { slidesPerView: 1.25, spaceBetween: 28 },
                1280: { slidesPerView: 1.27, spaceBetween: 30 },
              }}
              style={{ overflow: 'visible' }}
              className='w-full !overflow-visible'
            >
                {onlinePresenceList?.map((items:any, index:any) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className='group flex flex-col gap-6 cursor-pointer pb-12'>
                        <div className='relative'>
                          <Image
                            src={items.image}
                            alt={items.title}
                            width={625}
                            height={500}
                            className='rounded-2xl w-full h-[280px] sm:h-[320px] md:h-[420px] lg:h-[460px] xl:h-[500px] object-contain md:object-cover'
                            unoptimized={true}
                          />
                          <Link
                            href={items.link || 'https://www.framer.com/@wrap-pixel/'}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='absolute top-0 left-0 bg-black/50 w-full h-full rounded-2xl hidden group-hover:flex'>
                            <span className='flex justify-end p-5 w-full'>
                              <ExternalLink
                                size={50}
                                className='text-white'
                              />
                            </span>
                          </Link>
                        </div>
                        <div className='flex flex-col items-center text-center gap-4'>
                          <h5 className='group-hover:text-purple_blue text-xl font-semibold'>
                            {items.title}
                          </h5>
                          {items.description && (
                            <p className='text-sm text-gray-600 dark:text-gray-400 max-w-md'>
                              {items.description}
                            </p>
                          )}
                          <div className='flex gap-3 flex-wrap justify-center'>
                            {items.tag?.slice(0, 3).map((tag:any, tagIndex:number) => (
                              <p
                                key={tagIndex}
                                className='text-sm border border-dark_black/10 dark:border-white/50 w-fit py-1.5 px-4 rounded-full hover:bg-dark_black hover:text-white transition-colors'>
                                {tag}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            )}
          </div>
        </div>
    </section>
  )
}

export default OnlinePresence
