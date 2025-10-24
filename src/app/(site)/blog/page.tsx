import Link from 'next/link'
import { Poppins, Lato } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] })

const blogPosts = [
  {
    id: 'why-having-website-important-nowadays',
    title: 'Why Having a Website Is So Important Nowadays',
    excerpt: 'In today\'s fast-paced digital world, having a professional website is not just an option — it\'s a necessity.',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Web Development'
  }
]

export default function BlogPage() {
  return (
    <div className={`min-h-screen bg-white dark:bg-black ${lato.className}`}>
      <div className="container mx-auto px-4 py-16 pt-20">
        <div className="text-center mb-16">
          <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 ${poppins.className}`}>
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Our Blog
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Insights, tips, and trends in web development, design, and digital marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group">
              <Link href={`/blog/${post.id}`}>
                <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 overflow-hidden">
                    <img 
                      src="/images/assets/webzyra_blog_1.png" 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className={`text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors ${poppins.className}`}>
                      {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}