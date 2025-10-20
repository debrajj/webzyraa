import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FooterLogo from './FooterLogo'
import { useTheme } from 'next-themes'

const Footer = () => {
  const [footerData, setfooterData] = useState<any>(null);
  const { theme } = useTheme();
  
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
    <footer className='relative pt-16 pb-6 bg-white dark:bg-black overflow-hidden border-t border-gray-200 dark:border-white/10'>
      {/* Subtle Grid Background */}
      <div className='absolute inset-0 opacity-[0.02] dark:opacity-[0.05]'>
        <div className='absolute inset-0' style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(99,102,241,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Gradient Accents */}
      <div className='absolute inset-0 pointer-events-none overflow-hidden'>
        <div className='absolute -top-40 -left-40 w-80 h-80 bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-3xl' />
        <div className='absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-3xl' />
      </div>

      <div className='container relative z-10'>
        {/* Main Content Section */}
        <div className='flex flex-col xl:flex-row py-6 md:py-16 gap-6 md:gap-16 xl:gap-20 justify-between'>
          {/* Brand Section with Creative Typography */}
          <div className='flex flex-col gap-4 md:gap-8 max-w-xl'>
            <div className='hidden md:block transform hover:scale-105 transition-transform duration-500'>
              <FooterLogo />
            </div>
            
            {/* Large Creative Text */}
            <div className='relative'>
              <h2 className='text-3xl md:text-4xl xl:text-5xl font-bold leading-tight tracking-tight'>
                <span className='block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
                  Let's Create
                </span>
                <span className='block text-black dark:text-white mt-1'>
                  Something Amazing
                </span>
              </h2>
            </div>

            <p className='text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mt-2'>
              {footerData?.brand?.tagline}
            </p>

            {/* Social Links */}
            <div className='flex flex-wrap gap-3 mt-4'>
              {footerData?.brand?.socialLinks.map((item:any, index:any) => (
                <Link
                  key={index}
                  href={item.link}
                  target='_blank'
                  className='group relative'>
                  <div className='p-3 bg-gray-100 dark:bg-white/5 hover:bg-purple-100 dark:hover:bg-purple-900/20 border border-gray-200 dark:border-white/10 rounded-xl transform group-hover:scale-110 transition-all duration-300'>
                    <Image
                      src={theme === 'dark' ? item.dark_icon : item.icon}
                      className='w-5 h-5 opacity-70 group-hover:opacity-100 transition-all duration-300 object-contain'
                      alt='social-icon'
                      height={20}
                      width={20}
                      unoptimized={true}
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
                <h3 className='font-semibold text-sm md:text-base text-black dark:text-white uppercase tracking-wide'>
                  {footerData?.sitemap?.name}
                </h3>
              </div>
              <ul className='flex flex-col gap-3 md:gap-4'>
                {footerData?.sitemap?.links.map((item:any, index:any) => (
                  <li key={index}>
                    <Link 
                      href={item.url}
                      className='text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 text-sm'>
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    href='/about'
                    className='text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 text-sm'>
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Other Pages */}
            <div className='flex flex-col gap-4 md:gap-6'>
              <div>
                <h3 className='font-semibold text-sm md:text-base text-black dark:text-white uppercase tracking-wide'>
                  {footerData?.otherPages?.name}
                </h3>
              </div>
              <ul className='flex flex-col gap-3 md:gap-4'>
                {footerData?.otherPages?.links.map((item:any, index:any) => (
                  <li key={index}>
                    <Link 
                      href={item.url}
                      className='text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 text-sm'>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div className='flex flex-col gap-4 md:gap-6'>
              <div>
                <h3 className='font-semibold text-sm md:text-base text-black dark:text-white uppercase tracking-wide'>
                  Contact
                </h3>
              </div>
              <div className='flex flex-col gap-3'>
                <p className='text-gray-600 dark:text-gray-400 text-sm'>
                  Silchar, Assam
                </p>
                <Link 
                  href='mailto:webzyra1@gmail.com'
                  className='text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 text-sm break-all'>
                  webzyra1@gmail.com
                </Link>
                <Link 
                  href='tel:8638703614'
                  className='text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 text-sm'>
                  +91 8638703614
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='my-8 md:my-12 h-px w-full bg-gradient-to-r from-transparent via-gray-300 dark:via-white/10 to-transparent' />

        {/* Bottom Section */}
        <div className='flex flex-col sm:flex-row justify-center items-center gap-2 pb-6'>
          <p className='text-gray-500 dark:text-gray-500 text-xs text-center'>
            {footerData?.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer