'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import HeaderLink from './Navigation/HeaderLink'
import { headerData } from './Navigation/Menudata'
import Logo from './Logo'
import MobileHeader from './Navigation/MobileHeader'
import ThemeToggler from './ThemeToggle'

const Header = () => {
  const { data: session } = useSession()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [user, setUser] = useState<{ user: any } | null>(null)
  const [sticky, setSticky] = useState(false)
  const pathname = usePathname()

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  const handleSignOut = () => {
    localStorage.removeItem('user')
    signOut()
    setUser(null)
  }

  return (
    <>
      <header className={`fixed top-0 z-50 w-full`}>
        <div className='container p-3'>
          <nav
            className={`flex items-center py-3 px-4 justify-between ${
              sticky
                ? ' rounded-full shadow-sm bg-white dark:bg-dark_black'
                : null
            } `}>
            <div className='flex items-center'>
              <Logo />
            </div>
            <div className='hidden lg:flex bg-dark_black/5 dark:bg-white/5 rounded-3xl py-3 px-1'>
              <ul className='flex gap-0 2xl:gap-1.5'>
                {headerData.map((item, index) => (
                  <HeaderLink key={index} item={item} />
                ))}
              </ul>
            </div>
            <div className='flex items-center gap-1 xl:gap-4'>
              {/* ---------------------Light/Dark Mode button-------------------- */}
              <ThemeToggler />
              
              {/* ---------------------SignUp SignIn Button-----------------  */}
              {user?.user || session?.user ? (
                <div className='hidden lg:flex gap-4'>
                  <button
                    onClick={() => handleSignOut()}
                    className='flex group font-normal items-center gap-1 transition-all duration-200 ease-in-out text-white px-4 py-2 bg-dark_black dark:bg-white/15 rounded-full hover:text-dark_black hover:bg-white dark:hover:bg-white/5 dark:hover:text-white border border-dark_black'>
                    Sign Out
                    <Icon icon='solar:logout-outline' width='25' height='25' />
                  </button>
                  <div className='relative group'>
                    <Image
                      src='/images/home/avatar_1.jpg'
                      alt='Image'
                      width={40}
                      height={40}
                      quality={100}
                      className='rounded-full cursor-pointer'
                    />
                    <p className='absolute w-fit text-sm text-center z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 bg-white dark:bg-white/5 text-dark_black/60 p-1 min-w-28 rounded-lg shadow-2xl top-full left-1/2 transform -translate-x-1/2 mt-3'>
                      {user?.user || session?.user?.name}
                    </p>
                  </div>
                </div>
              ) : (
                <div className='flex items-center gap-2'>
                  <Link href={'/contact'} className='hidden lg:block text-white px-2.5 xl:px-4 py-2  bg-dark_black dark:bg-white/20 rounded-full hover:opacity-90'>
                    Call Now
                  </Link>
                </div>
              )}

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
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-dark_black shadow-lg transform transition-transform duration-300 max-w-xs ${
            sidebarOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50`}>
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
          <div className='p-4'>
            <ul className='flex flex-col gap-0'>
              {headerData.map((item, index) => (
                <MobileHeader key={index} item={item} onClose={() => setSidebarOpen(false)} />
              ))}
            </ul>
            <div className='mt-4 pt-3 border-t border-gray-200 dark:border-gray-700'>
              {user || session?.user ? (
                <div className='space-y-2'>
                  <button
                    onClick={() => signOut()}
                    className='flex w-full items-center gap-2 p-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors'>
                    <Icon icon='solar:logout-outline' width='20' height='20' />
                    <span>Sign Out</span>
                  </button>
                  <div className='flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg'>
                    <Image
                      src='/images/home/avatar_1.jpg'
                      alt='Profile'
                      width={24}
                      height={24}
                      className='rounded-full'
                    />
                    <span className='text-sm text-dark_black dark:text-white truncate'>
                      {user?.user?.email || session?.user?.name}
                    </span>
                  </div>
                </div>
              ) : (
                <Link
                  href='/contact'
                  onClick={() => setSidebarOpen(false)}
                  className='flex items-center justify-center w-full p-3 bg-dark_black dark:bg-white text-white dark:text-dark_black rounded-lg hover:opacity-90 transition-opacity'>
                  Call Now
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
