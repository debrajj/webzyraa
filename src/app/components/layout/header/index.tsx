'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import HeaderLink from './Navigation/HeaderLink'
import { headerData } from './Navigation/Menudata'
import Logo from './Logo'
import MobileHeader from './Navigation/MobileHeader'
import ThemeToggler from './ThemeToggle'

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const pathname = usePathname()

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  return (
    <>
      <header className={`fixed top-0 z-50 w-full`}>
        <div className='container'>
          <nav
            className={`flex items-center py-3 px-4 justify-between ${
              sticky
                ? ' rounded-full shadow-sm bg-white dark:bg-dark_black'
                : null
            } `}>
            <div className='flex items-center'>
              <Logo />
            </div>
            <div className='hidden lg:flex bg-dark_black/5 dark:bg-white/5 rounded-3xl py-3 px-1 outfit-font'>
              <ul className='flex gap-0 2xl:gap-1.5'>
                {headerData.map((item, index) => (
                  <HeaderLink key={index} item={item} />
                ))}
              </ul>
            </div>
            <div className='flex items-center gap-1 xl:gap-4'>
              {/* ---------------------Light/Dark Mode button-------------------- */}
              <ThemeToggler />
              
              {/* ---------------------Call Now Button-----------------  */}
              <div className='flex items-center gap-2'>
                <Link href={'tel:8638703614'} className='hidden lg:flex items-center gap-2 text-white px-2.5 xl:px-4 py-2  bg-dark_black dark:bg-white/20 rounded-full hover:opacity-90'>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Call Now
                </Link>
              </div>

              <div className='hidden max-lg:flex'>
                <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'>
                    <path
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeMiterlimit='10'
                      strokeWidth='1.5'
                      d='M4.5 12h15m-15 5.77h15M4.5 6.23h15'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </div>

        {/* ------------------------- Mobile sidebar starts ------------------------- */}
        {sidebarOpen && (
          <div
            className='fixed top-0 left-0 w-full h-full bg-black/50 z-40'
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[calc(100vw-2rem)] bg-white dark:bg-dark_black shadow-lg transform transition-transform duration-300 ${
            sidebarOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50 overflow-hidden`}>
          <div className='flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700'>
            <h2 className='text-lg font-bold text-dark_black dark:text-white'>Menu</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className='p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors'
              aria-label='Close mobile menu'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='text-dark_black dark:text-white'>
                <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='p-4 outfit-font'>
            <ul className='flex flex-col gap-0'>
              {headerData.map((item, index) => (
                <MobileHeader key={index} item={item} onClose={() => setSidebarOpen(false)} />
              ))}
            </ul>
            <div className='mt-4 pt-3 border-t border-gray-200 dark:border-gray-700'>
              <Link
                href='tel:8638703614'
                onClick={() => setSidebarOpen(false)}
                className='flex items-center justify-center gap-2 w-full p-3 bg-dark_black dark:bg-white text-white dark:text-dark_black rounded-lg hover:opacity-90 transition-opacity'>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
