import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { client, urlFor } from '../lib/sanity';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface Post {
  title: string;
  slug: { current: string };
  mainImage: string;
  publishedAt: string;
  excerpt: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc) {
          title,
          slug,
          mainImage,
          publishedAt,
          "excerpt": array::join(string::split(pt::text(body), "")[0..150], "") + "..."
        }`;
        const data = await client.fetch(query);
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg selection:bg-accent-primary/30 selection:text-white relative overflow-x-hidden w-full flex flex-col">
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bg-glow glow-primary opacity-50" />
      </div>

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-48 pb-24 flex-grow w-full">
        <header className="mb-20 space-y-4">
          <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-accent-primary">Insights & Perspectives</h2>
          <h1 className="text-5xl md:text-7xl font-serif text-white">The Blog</h1>
          <p className="text-xl text-text-muted font-light max-w-2xl leading-relaxed">
            Exploring the intersections of industry, sustainability, and leadership in the modern era.
          </p>
        </header>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="h-[500px] glass rounded-[2rem] animate-pulse" />
            ))}
          </div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {posts.map((post, idx) => (
              <motion.article
                key={post.slug.current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col h-full"
              >
                <Link to={`/blog/${post.slug.current}`} className="block relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/5 shadow-2xl">
                  {post.mainImage && (
                    <img
                      src={post.mainImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="glass p-4 rounded-full">
                      <ArrowRight className="text-white" />
                    </div>
                  </div>
                </Link>

                <div className="py-8 flex flex-col flex-grow space-y-4">
                  <div className="flex items-center gap-6 text-[11px] uppercase tracking-widest font-bold text-accent-primary">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                  </div>

                  <Link to={`/blog/${post.slug.current}`}>
                    <h3 className="text-3xl font-serif text-white group-hover:text-accent-primary transition-colors leading-tight">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-text-muted font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 mt-auto">
                    <Link
                      to={`/blog/${post.slug.current}`}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white group/btn"
                    >
                      Read Full Article 
                      <div className="w-8 h-[1px] bg-accent-primary transition-all group-hover/btn:w-12" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 glass rounded-[2rem]">
            <p className="text-text-muted text-xl font-light italic">No posts found. Stay tuned for upcoming insights.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
