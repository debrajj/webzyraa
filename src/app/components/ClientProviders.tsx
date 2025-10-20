'use client'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import Header from './layout/header'
import Footer from './layout/footer/Footer'
import ScrollToTop from './scroll-to-top'

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute='class'
        enableSystem={false}
        defaultTheme='light'>
        {/* ---------------------Header Starts-----------------  */}
        <Header />
        {/* ---------------------Header Ends-------------------  */}
        {children}
        {/* ---------------------Footer Starts-----------------  */}
        <Footer />
        {/* ---------------------Footer Ends-----------------  */}
        <ScrollToTop />
      </ThemeProvider>
    </SessionProvider>
  )
}