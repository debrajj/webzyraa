import './globals.css'
import { Outfit } from 'next/font/google'
import ClientProviders from './components/ClientProviders'
import JsonLd, { organizationSchema, websiteSchema } from '@/components/seo/JsonLd'
import HiddenFAQs from '@/components/seo/HiddenFAQs'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import { generateMetadata } from '@/lib/seo'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata = {
  ...generateMetadata({
    title: 'Webzyra - Best Web Development Company | Professional Digital Solutions',
    description: 'Webzyra is the leading web development company. We create modern, responsive websites, e-commerce solutions, and digital marketing services that drive business growth.',
  }),

  
  icons: {
    icon: '/images/logo/favicon.png',
  },
  alternates: {
    canonical: 'https://webzyra.in',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={outfit.variable}>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <HiddenFAQs />
        <PerformanceMonitor />
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}