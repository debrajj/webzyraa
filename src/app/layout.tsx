import './globals.css'
import ClientProviders from './components/ClientProviders'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Webzyraa',
  description: 'Webzyraa - Your Digital Solution',
  icons: {
    icon: '/images/logo/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
