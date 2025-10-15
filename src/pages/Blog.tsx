import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      title: 'The Future of AI in Enterprise Compliance',
      excerpt: 'Discover how artificial intelligence is revolutionizing compliance monitoring and risk management across industries.',
      author: 'Sarah John',
      date: '2024-01-15',
      category: 'AI & Technology',
      // image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
      image: '/group-afro-americans-working-together.jpg',
      readTime: '5 min read'
    },
    {
      title: 'GDPR Compliance in 2024: What You Need to Know',
      excerpt: 'Stay ahead of evolving privacy regulations with our comprehensive guide to GDPR compliance best practices.',
      author: 'Emmah M',
      date: '2024-01-10',
      category: 'Privacy & Compliance',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
      readTime: '7 min read'
    },
    {
      title: 'Building Trust Through Data Privacy',
      excerpt: 'Learn how implementing robust data privacy measures can enhance customer trust and drive business growth.',
      author: 'Michael M',
      date: '2024-01-05',
      category: 'Privacy & Security',
      image: 'https://cdn.pixabay.com/photo/2021/01/08/07/52/compliance-5899194_1280.jpg',
      readTime: '6 min read'
    },
    {
      title: 'Machine Learning for Predictive Compliance',
      excerpt: 'Explore how machine learning algorithms can predict compliance risks before they become critical issues.',
      author: 'David Patrick',
      date: '2023-12-28',
      category: 'AI & Technology',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      readTime: '8 min read'
    },
    {
      title: 'The ROI of Automated Compliance Systems',
      excerpt: 'Calculate the return on investment of implementing automated compliance monitoring in your organization.',
      author: 'Sarah John',
      date: '2023-12-20',
      category: 'Business Strategy',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg',
      readTime: '4 min read'
    },
    {
      title: 'Zero-Trust Security: A Modern Approach',
      excerpt: 'Understanding zero-trust architecture and how it can protect your organization from evolving cyber threats.',
      author: 'Emmah M',
      date: '2023-12-15',
      category: 'Security',
      image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg',
      readTime: '6 min read'
    }
  ];

  const categories = ['All', 'AI & Technology', 'Privacy & Compliance', 'Business Strategy', 'Security'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary via-gray-800 to-brand-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, insights, and thought leadership 
            in compliance, privacy, and artificial intelligence.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={posts[0].image}
                    alt={posts[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      {posts[0].category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(posts[0].date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {posts[0].author}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{posts[0].title}</h2>
                  <p className="text-gray-600 mb-6">{posts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{posts[0].readTime}</span>
                    <Link
                      to="#"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white bg-opacity-90 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Link
                      to="#"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm group"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-r from-brand-primary via-gray-800 to-brand-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights on compliance, 
            privacy, and AI technologies.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;