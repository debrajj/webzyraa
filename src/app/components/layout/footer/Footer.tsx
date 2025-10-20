import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../header/Logo'

const Footer = () => {
  const [footerData, setfooterData] = useState<any>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/footer-data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()        
        setfooterData(data?.footerData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <footer className='relative pt-12 pb-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:bg-gradient-to-br dark:from-gray-900 dark:to-black overflow-hidden rounded-t-[70px]'>
      {/* Animated Grid Background */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute inset-0' style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Geometric Shapes */}
      <div className='absolute inset-0 pointer-events-none overflow-hidden'>
        <div className='absolute -top-20 -left-20 w-64 h-64 border-4 border-lime-400/20 rotate-45 animate-pulse' />
        <div className='absolute top-40 right-20 w-40 h-40 border-4 border-cyan-400/20 rotate-12' />
        <div className='absolute bottom-40 left-1/4 w-32 h-32 border-4 border-pink-400/20 -rotate-12 animate-pulse' />
        <div className='absolute -bottom-10 -right-10 w-96 h-96 bg-gradient-to-br from-lime-400/10 to-transparent rounded-full blur-3xl' />
      </div>

      <div className='container relative z-10'>
        {/* Main Content Section */}
        <div className='flex flex-col xl:flex-row py-6 md:py-16 gap-6 md:gap-16 xl:gap-20 justify-between'>
          {/* Brand Section with Creative Typography */}
          <div className='flex flex-col gap-4 md:gap-8 max-w-xl'>
            <div className='hidden md:block transform hover:scale-105 transition-transform duration-500'>
              <Logo />
            </div>
            
            {/* Large Creative Text */}
            <div className='relative'>
              <h2 className='text-2xl md:text-2xl xl:text-3xl font-black leading-none tracking-tighter'>
                <span className='block text-[#4A28FD] animate-pulse'>
                  LET'S
                </span>
                <span className='block text-black dark:text-white mt-1 md:mt-2 -ml-1 md:-ml-2 italic skew-y-2'>
                  CREATE TOGETHER
                </span>
              </h2>
              <div className='absolute -bottom-2 md:-bottom-4 left-0 w-20 md:w-32 h-1 md:h-2 bg-[#4A28FD] transform -skew-x-12' />
            </div>

            <p className='text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed font-light mt-2 md:mt-4'>
              {footerData?.brand?.tagline}
            </p>

            {/* Social Links with Creative Layout */}
            <div className='flex flex-wrap gap-2 md:gap-3 mt-2 md:mt-4'>
              {footerData?.brand?.socialLinks.map((item:any, index:any) => (
                <Link
                  key={index}
                  href={item.link}
                  target='_blank'
                  className='group relative'>
                  <div className='absolute inset-0 bg-[#4A28FD] rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500' />
                  <div className='relative p-3 md:p-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300'>
                    <Image
                      src={item.dark_icon || item.icon}
                      className='brightness-200 group-hover:brightness-[300] transition-all duration-300 w-5 h-5 md:w-6 md:h-6'
                      alt='social-icon'
                      height={24}
                      width={24}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Links Grid with Modern Design */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 xl:gap-12'>
            {/* Sitemap */}
            <div className='flex flex-col gap-3 md:gap-6'>
              <div>
                <h3 className='font-black text-base md:text-lg text-black dark:text-white uppercase tracking-wider'>
                  {footerData?.sitemap?.name}
                </h3>
              </div>
              <ul className='flex flex-col gap-3 md:gap-4'>
                {footerData?.sitemap?.links.map((item:any, index:any) => (
                  <li key={index} className='group/link'>
                    <Link 
                      href={item.url}
                      className='flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-[#4A28FD] transition-all duration-300 font-medium'>
                      <span className='w-0 h-0.5 bg-[#4A28FD] group-hover/link:w-6 transition-all duration-300' />
                      <span className='group-hover/link:translate-x-1 transition-transform duration-300 uppercase text-xs md:text-sm tracking-wide'>
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Pages */}
            <div className='flex flex-col gap-4 md:gap-6'>
              <div>
                <h3 className='font-black text-base md:text-lg text-black dark:text-white uppercase tracking-wider'>
                  {footerData?.otherPages?.name}
                </h3>
              </div>
              <ul className='flex flex-col gap-3 md:gap-4'>
                {footerData?.otherPages?.links.map((item:any, index:any) => (
                  <li key={index} className='group/link'>
                    <Link 
                      href={item.url}
                      className='flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-[#4A28FD] transition-all duration-300 font-medium'>
                      <span className='w-0 h-0.5 bg-[#4A28FD] group-hover/link:w-6 transition-all duration-300' />
                      <span className='group-hover/link:translate-x-1 transition-transform duration-300 uppercase text-xs md:text-sm tracking-wide'>
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div className='flex flex-col gap-4 md:gap-6'>
              <div>
                <h3 className='font-black text-base md:text-lg text-black dark:text-white uppercase tracking-wider'>
                  Contact
                </h3>
              </div>
              <div className='flex flex-col gap-3 md:gap-2'>
                <p className='text-slate-600 dark:text-slate-400 leading-relaxed font-light text-sm md:text-xs'>
                  Silchar, Assam
                </p>
                <Link 
                  href='mailto:webzyra1@gmail.com'
                  className='group/email flex items-center gap-2'>
                  <span className='text-lg transform group-hover/email:scale-125 group-hover/email:rotate-12 transition-all duration-300'>✉</span>
                  <span className='text-slate-600 dark:text-slate-400 hover:text-[#4A28FD] transition-all duration-300 font-medium text-sm md:text-xs break-all'>
                    webzyra1@gmail.com
                  </span>
                </Link>
                <Link 
                  href='tel:8638703614'
                  className='group/phone flex items-center gap-2'>
                  <span className='text-lg transform group-hover/phone:scale-125 group-hover/phone:rotate-12 transition-all duration-300'>📞</span>
                  <span className='text-slate-600 dark:text-slate-400 hover:text-[#4A28FD] transition-all duration-300 font-medium text-sm md:text-xs'>
                    8638703614
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with Gradient */}
        <div className='relative my-8 md:my-12'>
          <div className='h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent' />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#4A28FD] rotate-45' />
        </div>

        {/* Bottom Section */}
        <div className='flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-6 pb-6 md:pb-8'>
          <p className='text-slate-500 dark:text-slate-500 text-xs md:text-sm font-light tracking-widest uppercase text-center sm:text-left'>
            {footerData?.copyright}
          </p>
          
          {/* Decorative Element */}
          <div className='flex gap-1 md:gap-2'>
            <div className='w-8 md:w-12 h-1 bg-[#4A28FD] transform -skew-x-12' />
            <div className='w-6 md:w-8 h-1 bg-[#4A28FD]/70 transform -skew-x-12' />
            <div className='w-4 md:w-6 h-1 bg-[#4A28FD]/40 transform -skew-x-12' />
          </div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className='absolute bottom-0 left-0 right-0 h-1 bg-[#4A28FD] opacity-50' />
    </footer>
  )
}

export default Footer