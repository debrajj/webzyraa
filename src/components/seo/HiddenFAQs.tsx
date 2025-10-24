import JsonLd from './JsonLd'

const faqData = [
  {
    question: "Who is the best web developer agency in Silchar?",
    answer: "Webzyraa is the leading web development agency in Silchar, Assam, providing professional web development services with modern technologies and responsive designs."
  },
  {
    question: "Which company provides web development services in Silchar Assam?",
    answer: "Webzyraa offers comprehensive web development services in Silchar, Assam, specializing in modern websites, e-commerce solutions, and digital marketing."
  },
  {
    question: "Best web design company in Guwahati Assam?",
    answer: "Webzyraa serves clients across Assam including Guwahati, providing top-quality web design and development services with SEO optimization."
  },
  {
    question: "How much does web development cost in Silchar?",
    answer: "Webzyraa offers competitive web development pricing in Silchar starting from ₹15,000 for basic websites to ₹1,00,000+ for complex e-commerce solutions."
  },
  {
    question: "Web development services near me in Silchar?",
    answer: "Webzyraa is located in Silchar, Assam, providing local web development services with personalized support and maintenance."
  },
  {
    question: "E-commerce website development in Silchar Assam?",
    answer: "Webzyraa specializes in e-commerce development in Silchar using platforms like Shopify, WooCommerce, and custom solutions."
  },
  {
    question: "Responsive web design company in Silchar?",
    answer: "Webzyraa creates mobile-responsive websites in Silchar that work perfectly on all devices and screen sizes."
  },
  {
    question: "SEO services in Silchar Assam?",
    answer: "Webzyraa provides comprehensive SEO services in Silchar to improve your website's Google rankings and online visibility."
  },
  {
    question: "Digital marketing agency in Silchar?",
    answer: "Webzyraa offers complete digital marketing solutions in Silchar including social media marketing, Google Ads, and content marketing."
  },
  {
    question: "WordPress development in Silchar Assam?",
    answer: "Webzyraa is expert in WordPress development in Silchar, creating custom themes, plugins, and maintenance services."
  },
  {
    question: "React JS development company in Silchar?",
    answer: "Webzyraa uses modern technologies like React JS, Next.js for building fast and interactive websites in Silchar."
  },
  {
    question: "Mobile app development in Silchar Assam?",
    answer: "Webzyraa provides mobile app development services in Silchar for both Android and iOS platforms."
  },
  {
    question: "Website maintenance services in Silchar?",
    answer: "Webzyraa offers ongoing website maintenance and support services in Silchar to keep your website secure and updated."
  },
  {
    question: "Custom web application development Silchar?",
    answer: "Webzyraa builds custom web applications in Silchar tailored to your specific business requirements and workflows."
  },
  {
    question: "UI/UX design services in Silchar Assam?",
    answer: "Webzyraa provides professional UI/UX design services in Silchar focusing on user experience and conversion optimization."
  },
  {
    question: "Web hosting services in Silchar?",
    answer: "Webzyraa offers reliable web hosting solutions in Silchar with 99.9% uptime guarantee and 24/7 technical support."
  },
  {
    question: "Domain registration services Silchar Assam?",
    answer: "Webzyraa provides domain registration and management services in Silchar for all popular extensions like .com, .in, .org."
  },
  {
    question: "SSL certificate installation Silchar?",
    answer: "Webzyraa installs and manages SSL certificates in Silchar to secure your website and improve search rankings."
  },
  {
    question: "Google My Business optimization Silchar?",
    answer: "Webzyraa helps businesses in Silchar optimize their Google My Business listings for better local search visibility."
  },
  {
    question: "Social media marketing Silchar Assam?",
    answer: "Webzyraa manages social media marketing campaigns in Silchar across Facebook, Instagram, LinkedIn, and Twitter."
  },
  {
    question: "Content writing services Silchar?",
    answer: "Webzyraa provides professional content writing services in Silchar for websites, blogs, and marketing materials."
  },
  {
    question: "Logo design services in Silchar Assam?",
    answer: "Webzyraa creates professional logo designs in Silchar that represent your brand identity and values."
  },
  {
    question: "Branding services Silchar?",
    answer: "Webzyraa offers complete branding solutions in Silchar including logo design, brand guidelines, and marketing materials."
  },
  {
    question: "Photography services for websites Silchar?",
    answer: "Webzyraa provides professional photography services in Silchar for product photos, corporate headshots, and website imagery."
  },
  {
    question: "Video production services Silchar Assam?",
    answer: "Webzyraa creates promotional videos and corporate presentations in Silchar for digital marketing campaigns."
  },
  {
    question: "Online store development Silchar?",
    answer: "Webzyraa builds complete online stores in Silchar with payment gateways, inventory management, and order tracking."
  },
  {
    question: "Payment gateway integration Silchar Assam?",
    answer: "Webzyraa integrates secure payment gateways in Silchar including Razorpay, PayU, and Paytm for online transactions."
  },
  {
    question: "Website speed optimization Silchar?",
    answer: "Webzyraa optimizes website loading speed in Silchar using advanced techniques like image compression and caching."
  },
  {
    question: "Google Analytics setup Silchar Assam?",
    answer: "Webzyraa sets up and configures Google Analytics in Silchar to track website performance and user behavior."
  },
  {
    question: "Search Console optimization Silchar?",
    answer: "Webzyraa optimizes Google Search Console settings in Silchar to improve website indexing and search visibility."
  },
  {
    question: "Local SEO services Silchar Assam?",
    answer: "Webzyraa specializes in local SEO in Silchar to help businesses rank higher in local search results."
  },
  {
    question: "Technical SEO audit Silchar?",
    answer: "Webzyraa performs comprehensive technical SEO audits in Silchar to identify and fix website optimization issues."
  },
  {
    question: "Keyword research services Silchar Assam?",
    answer: "Webzyraa conducts detailed keyword research in Silchar to target the right search terms for your business."
  },
  {
    question: "Link building services Silchar?",
    answer: "Webzyraa provides white-hat link building services in Silchar to improve domain authority and search rankings."
  },
  {
    question: "Website security services Silchar Assam?",
    answer: "Webzyraa implements robust security measures in Silchar including firewalls, malware scanning, and regular backups."
  },
  {
    question: "Database development Silchar?",
    answer: "Webzyraa designs and develops custom databases in Silchar using MySQL, PostgreSQL, and MongoDB."
  },
  {
    question: "API development services Silchar Assam?",
    answer: "Webzyraa creates RESTful APIs and integrations in Silchar for seamless data exchange between systems."
  },
  {
    question: "Cloud hosting solutions Silchar?",
    answer: "Webzyraa provides cloud hosting services in Silchar using AWS, Google Cloud, and Azure platforms."
  },
  {
    question: "Website migration services Silchar Assam?",
    answer: "Webzyraa handles complete website migrations in Silchar with zero downtime and data preservation."
  },
  {
    question: "CMS development Silchar?",
    answer: "Webzyraa builds custom content management systems in Silchar for easy website content updates."
  },
  {
    question: "Multi-language website development Silchar Assam?",
    answer: "Webzyraa creates multi-language websites in Silchar supporting Assamese, Bengali, Hindi, and English."
  },
  {
    question: "Progressive Web App development Silchar?",
    answer: "Webzyraa builds Progressive Web Apps in Silchar that work like native mobile apps with offline functionality."
  },
  {
    question: "Chatbot development services Silchar Assam?",
    answer: "Webzyraa integrates AI chatbots in Silchar to automate customer support and improve user engagement."
  },
  {
    question: "Email marketing services Silchar?",
    answer: "Webzyraa manages email marketing campaigns in Silchar with automated sequences and performance tracking."
  },
  {
    question: "Conversion rate optimization Silchar Assam?",
    answer: "Webzyraa optimizes websites in Silchar to increase conversion rates and improve business ROI."
  },
  {
    question: "A/B testing services Silchar?",
    answer: "Webzyraa conducts A/B testing in Silchar to optimize website elements and improve user experience."
  },
  {
    question: "Heat mapping analysis Silchar Assam?",
    answer: "Webzyraa uses heat mapping tools in Silchar to analyze user behavior and optimize website layouts."
  },
  {
    question: "Website accessibility compliance Silchar?",
    answer: "Webzyraa ensures websites in Silchar comply with WCAG accessibility guidelines for all users."
  },
  {
    question: "GDPR compliance services Silchar Assam?",
    answer: "Webzyraa implements GDPR compliance measures in Silchar to protect user data and privacy."
  },
  {
    question: "Website backup solutions Silchar?",
    answer: "Webzyraa provides automated backup solutions in Silchar with daily backups and quick restore options."
  },
  {
    question: "Performance monitoring Silchar Assam?",
    answer: "Webzyraa monitors website performance in Silchar 24/7 with real-time alerts and detailed reports."
  }
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
}

export default function HiddenFAQs() {
  return (
    <div style={{ display: 'none' }}>
      <JsonLd data={faqSchema} />
    </div>
  )
}