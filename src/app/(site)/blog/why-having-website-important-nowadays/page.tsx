import Link from 'next/link'
import { Poppins, Lato } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] })

export default function BlogPost() {
  return (
    <div className={`min-h-screen bg-white dark:bg-black ${lato.className}`}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-8">
            ← Back to Blog
          </Link>
          
          <article>
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
                  Web Development
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  8 min read
                </span>
              </div>
              
              <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white leading-tight ${poppins.className}`}>
                Why Having a Website Is So Important Nowadays | Webzyra
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span>January 15, 2025</span>
                <span>•</span>
                <span>By Webzyra Team</span>
              </div>
            </header>

            <div className="prose prose-xl dark:prose-invert max-w-none">
              <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white ${poppins.className}`}>Why a Website Is Essential in 2025</h2>

              <p className={`text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed ${lato.className}`}>
                In today's fast-paced digital era, your website is the face of your business. Whether you run a startup, a local store, or a large company, having a strong online presence is no longer optional — it's essential. In 2025, the competition is fiercer than ever, and customers expect to find information instantly, trust credible sources, and shop online with ease. That's where a well-designed, optimized website comes in.
              </p>

              <div className="my-12 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/assets/webzyra_blog_1.png" 
                  alt="Why having a website is important" 
                  className="w-full h-auto object-cover"
                />
              </div>

              <h3 className={`text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white ${poppins.className}`}>Online Presence 24/7</h3>
              <p className={`text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed ${lato.className}`}>Unlike physical stores that close at night, your website works round the clock — even when you don't. It's like having a 24/7 salesperson who never takes a break. Customers can browse your products, read about your services, or send inquiries anytime, anywhere. This means that your business stays active even when you're asleep, helping you generate leads and sales automatically.</p>

              <h3 className={`text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white ${poppins.className}`}>Builds Trust and Credibility</h3>
              <p className={`text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed ${lato.className}`}>First impressions matter — and your website is often the first point of contact with potential customers. A professionally designed website immediately adds legitimacy to your brand. People trust businesses that look polished and organized online. Whether you're offering web development services in Guwahati or selling products across Assam, a clean and modern website tells visitors that you're serious about your business and here to stay.</p>

              <h3 className={`text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white ${poppins.className}`}>Improves Brand Visibility</h3>
              <p className={`text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed ${lato.className}`}>A website doesn't just display your products or services; it helps you get discovered. With proper SEO (Search Engine Optimization) and modern web design, your business can rank higher on Google search results. This allows potential customers from Silchar, Guwahati, and beyond to easily find you. The more visible your website is, the more opportunities you create to connect with your audience and grow your brand presence.</p>

              <h3 className={`text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white ${poppins.className}`}>Increases Sales and Conversions</h3>
              <p className={`text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed ${lato.className}`}>Your website is also your digital storefront. With platforms like Shopify, WordPress, or custom-coded solutions, you can set up an online store that makes buying simple, fast, and secure. Visitors can explore products, read reviews, and make payments seamlessly. By offering this level of convenience, you not only boost sales but also improve customer satisfaction — turning one-time visitors into loyal customers.</p>

              <h3 className={`text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white ${poppins.className}`}>Cost-Effective Marketing</h3>
              <p className={`text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed ${lato.className}`}>Traditional advertising like print, TV, or billboards can be expensive and difficult to measure. In contrast, digital marketing through your website is affordable, trackable, and powerful. You can run targeted ad campaigns, analyze traffic data, and continuously improve results. A well-optimized website paired with tools like Google Analytics, SEO, and social media integration ensures you get the best return on investment (ROI) for your marketing budget.</p>

              <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white ${poppins.className}`}>Which Platform Is Best for Your Business?</h2>

              <p className={`text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed ${lato.className}`}>When it comes to creating a website, choosing the right platform is crucial. Each option offers unique advantages depending on your business goals, budget, and technical skills. Here's a quick comparison:</p>

              <h3 className={`text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white ${poppins.className}`}>Shopify</h3>
              <p className={`text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed ${lato.className}`}>Perfect for e-commerce stores that want to launch quickly and grow without worrying about technical hassles. Shopify is beginner-friendly and provides everything you need — from hosting to secure payment gateways.</p>
              
              <p className={`text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed ${lato.className}`}><strong>Pros:</strong></p>
              <ul className="mb-4">
                <li>- Easy drag-and-drop interface (no coding needed)</li>
                <li>- Secure, reliable, and fast hosting</li>
                <li>- Excellent integrations for payments and apps</li>
              </ul>
              
              <p className={`text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed ${lato.className}`}><strong>Cons:</strong></p>
              <ul className="mb-4">
                <li>- Monthly subscription fees</li>
                <li>- Limited flexibility for custom features</li>
              </ul>
              
              <p className={`text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed ${lato.className}`}><strong>Best for:</strong> Online stores, dropshipping businesses, and product-based brands.</p>

              <h3 className={`text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white ${poppins.className}`}>WordPress</h3>
              <p className={`text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed ${lato.className}`}>Ideal for blogs, company websites, and service-based businesses, WordPress offers endless flexibility with thousands of plugins and themes. It's a favorite among developers and marketers alike because of its SEO capabilities and scalability.</p>
              
              <p className={`text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed ${lato.className}`}><strong>Pros:</strong></p>
              <ul className="mb-4">
                <li>- Highly customizable with plugins and themes</li>
                <li>- Excellent for search engine optimization</li>
                <li>- Cost-effective hosting and setup options</li>
              </ul>
              
              <p className={`text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed ${lato.className}`}><strong>Cons:</strong></p>
              <ul className="mb-4">
                <li>- Requires regular updates and maintenance</li>
                <li>- May slow down if overloaded with plugins</li>
              </ul>
              
              <p className={`text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed ${lato.className}`}><strong>Best for:</strong> Agencies, freelancers, portfolios, and small to mid-sized businesses.</p>

              <h3 className={`text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white ${poppins.className}`}>Custom-Coded Website</h3>
              <p className={`text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed ${lato.className}`}>For those who want complete control and uniqueness, custom-coded websites built using HTML, CSS, JavaScript, or frameworks like Next.js offer unmatched flexibility and performance. These websites are tailor-made to suit your brand's goals and deliver the best user experience possible.</p>
              
              <p className={`text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed ${lato.className}`}><strong>Pros:</strong></p>
              <ul className="mb-4">
                <li>- 100% unique design and functionality</li>
                <li>- Faster loading speed and enhanced security</li>
                <li>- Scalable for future growth</li>
              </ul>
              
              <p className={`text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed ${lato.className}`}><strong>Cons:</strong></p>
              <ul className="mb-4">
                <li>- Requires experienced developers</li>
                <li>- Higher initial development cost</li>
              </ul>
              
              <p className={`text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed ${lato.className}`}><strong>Best for:</strong> Startups, enterprises, and brands focused on innovation and performance.</p>

              <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white ${poppins.className}`}>Final Thoughts</h2>
              <p className={`text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed ${lato.className}`}>In 2025, your website is more than just an online brochure — it's your digital identity, your sales engine, and your marketing powerhouse. Whether you choose Shopify for simplicity, WordPress for flexibility, or custom coding for uniqueness, the key is to ensure your site is user-friendly, responsive, and SEO-optimized.</p>
              
              <p className={`text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed ${lato.className}`}>If you're looking for the best web development company in Silchar, Assam, that understands your vision and can help you build a modern, high-performing website — Webzyra is here to help. Our team specializes in Shopify, WordPress, and custom-coded solutions, delivering results that help your business stand out in a competitive digital world.</p>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-8 rounded-2xl mt-12 mb-12">
                <h3 className={`text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-purple-900 dark:text-purple-100 ${poppins.className}`}>Looking for the best web development company?</h3>
                <p className="text-purple-800 dark:text-purple-200 mb-6">
                  Contact Webzyra today and turn your digital vision into reality!
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
                >
                  Contact Webzyra
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}