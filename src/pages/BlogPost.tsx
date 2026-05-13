import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client, urlFor } from '../lib/sanity';
import { PortableText } from '@portabletext/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, ArrowLeft, Share2 } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const query = `*[_type == "post" && slug.current == $slug][0] {
          title,
          mainImage,
          publishedAt,
          body,
          "author": author->name
        }`;
        const data = await client.fetch(query, { slug });
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
    window.scrollTo(0, 0);
  }, [slug]);

  const ptComponents = {
    block: {
      h1: ({ children }: any) => <h1 className="text-4xl font-serif text-white mt-12 mb-6">{children}</h1>,
      h2: ({ children }: any) => <h2 className="text-3xl font-serif text-white mt-10 mb-5">{children}</h2>,
      h3: ({ children }: any) => <h3 className="text-2xl font-serif text-white mt-8 mb-4">{children}</h3>,
      normal: ({ children }: any) => <p className="text-lg text-text-muted font-light leading-relaxed mb-6">{children}</p>,
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-accent-primary pl-6 my-10 italic text-2xl font-serif text-white/90">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-6 space-y-2 text-text-muted">{children}</ul>,
      number: ({ children }: any) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-text-muted">{children}</ol>,
    },
    marks: {
      link: ({ children, value }: any) => (
        <a href={value.href} className="text-accent-primary hover:underline transition-all" target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    },
  };

  if (loading) return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
       <div className="w-12 h-12 border-2 border-accent-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!post) return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center text-center px-6">
       <h1 className="text-4xl font-serif text-white mb-8">Article not found</h1>
       <Link to="/blog" className="contact-pill inline-flex items-center gap-2">
         <ArrowLeft size={16} /> Back to Blog
       </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-bg selection:bg-accent-primary/30 selection:text-white relative overflow-x-hidden w-full flex flex-col">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 md:px-12 pt-48 pb-24 flex-grow w-full">
        <Link to="/blog" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-text-muted hover:text-white transition-colors mb-12 group">
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" /> Back to Insights
        </Link>

        <header className="space-y-8 mb-16">
          <div className="flex items-center gap-6 text-xs uppercase tracking-widest font-bold text-accent-primary">
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </div>
            {post.author && (
              <div className="flex items-center gap-2">
                <User size={14} />
                By {post.author}
              </div>
            )}
          </div>

          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] tracking-tight">
            {post.title}
          </h1>

          <div className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
            {post.mainImage && (
              <img
                src={urlFor(post.mainImage).width(1200).url()}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </header>

        <article className="prose prose-invert max-w-none">
          <PortableText value={post.body} components={ptComponents} />
        </article>

        <footer className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex gap-4">
              <button 
                onClick={() => navigator.share?.({ title: post.title, url: window.location.href })}
                className="glass p-4 rounded-full text-white hover:text-accent-primary transition-colors flex items-center gap-2 text-xs font-bold tracking-widest uppercase"
              >
                <Share2 size={16} /> Share Article
              </button>
           </div>
           <Link to="/blog" className="text-xs uppercase tracking-widest font-bold text-text-muted hover:text-white transition-colors">
              Read more articles
           </Link>
        </footer>
      </main>

      <Footer />
    </div>
  );
}
