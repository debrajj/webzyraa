interface JsonLdProps {
  data: Record<string, any>
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Webzyraa',
  url: 'https://webzyraa.com',
  logo: 'https://webzyraa.com/images/logo/Webzyra_black_bg.png',
  description: 'Best web development agency in Silchar, Assam providing professional web development and digital solutions',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Silchar',
    addressRegion: 'Assam',
    addressCountry: 'India'
  },
  areaServed: ['Silchar', 'Guwahati', 'Assam', 'India'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['English', 'Hindi', 'Assamese']
  },
  sameAs: [
    'https://twitter.com/webzyraa',
    'https://linkedin.com/company/webzyraa'
  ]
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Webzyraa',
  url: 'https://webzyraa.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://webzyraa.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
}