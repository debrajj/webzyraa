export function generateMetadata({ title, description }: { title: string; description: string }) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_US',
      url: 'https://webzyra.in',
      siteName: 'Webzyra',
      images: [{
        url: 'https://webzyra.in/images/logo/webzyra-og.png',
        width: 1200,
        height: 630,
        alt: 'Webzyra - Professional Web Development Services'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://webzyra.in/images/logo/webzyra-og.png'],
      creator: '@webzyra'
    },
  }
}