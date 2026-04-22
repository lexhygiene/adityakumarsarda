/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Warehouse, 
  Pickaxe, 
  Leaf, 
  ArrowRight, 
  Mail, 
  Linkedin, 
  ExternalLink,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { useState, useEffect } from 'react';

const businesses = [
  {
    id: 'jute',
    title: 'Jute Manufacturing',
    description: 'Revitalizing India\'s golden fiber through modern manufacturing and export trade, focusing on eco-conscious solutions.',
    icon: Leaf,
    color: 'rgba(242, 125, 38, 0.1)',
    accent: 'text-accent-orange',
    accentBg: 'bg-accent-orange',
    link: 'https://axisgroupco.com/business/jute'
  },
  {
    id: 'mining',
    title: 'Mining & Crusher',
    description: 'Strategic resource extraction and crusher-based operations with a commitment to environmental stewardship.',
    icon: Pickaxe,
    color: 'rgba(45, 90, 39, 0.1)',
    accent: 'text-emerald-400',
    accentBg: 'bg-emerald-400',
    link: 'https://axisgroupco.com/business/mining'
  },
  {
    id: 'realestate',
    title: 'Commercial Real Estate',
    description: 'Curating premium commercial asset portfolios that redefine modern Indian business infrastructure.',
    icon: Building2,
    color: 'rgba(242, 125, 38, 0.1)',
    accent: 'text-accent-orange',
    accentBg: 'bg-accent-orange',
    link: 'https://axisgroupco.com/business/real-estate'
  },
  {
    id: 'warehousing',
    title: 'Warehousing & Logistics',
    description: 'High-capacity logistics infrastructure supporting the resilient backbone of India\'s supply chain.',
    icon: Warehouse,
    color: 'rgba(45, 90, 39, 0.1)',
    accent: 'text-emerald-400',
    accentBg: 'bg-emerald-400',
    link: 'https://axisgroupco.com/business/warehousing'
  }
];

const philosophy = [
  {
    title: 'Long-Term Thinking',
    content: 'Enduring businesses are built through consistency and strategic patience.'
  },
  {
    title: 'Execution Discipline',
    content: 'Strong execution is the foundation of sustainable success.'
  },
  {
    title: 'Asset-Based Growth',
    content: 'Focus on building and managing tangible, revenue-generating assets.'
  },
  {
    title: 'Responsible Enterprise',
    content: 'Growth must align with responsibility toward stakeholders and communities.'
  },
  {
    title: 'Multi-Generational Vision',
    content: 'Building enterprises that remain relevant across generations.'
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Businesses', href: '#businesses' },
    { name: 'Vision', href: '#vision' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-bg selection:bg-accent-orange/30 selection:text-white relative overflow-x-hidden">
      {/* Background Glows */}
      <div className="bg-glow glow-orange" />
      <div className="bg-glow glow-green" />

      {/* Navigation */}
      <nav 
        className="fixed top-8 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-5xl z-50 transition-all duration-500"
      >
        <div className={`glass px-8 py-4 rounded-full flex justify-between items-center transition-all ${isScrolled ? 'shadow-2xl shadow-black/50' : ''}`}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tight font-serif"
          >
            ADITYA SARDA
          </motion.div>

          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-[13px] uppercase tracking-widest font-semibold text-text-muted hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="contact-pill"
            >
              GET IN TOUCH
            </a>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden backdrop-blur-2xl bg-black/80 pt-32 px-6"
          >
            <div className="flex flex-col gap-8 items-center text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-serif tracking-tight hover:text-accent-orange transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="contact-pill text-lg px-8 py-3"
              >
                GET IN TOUCH
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-48 pb-24 space-y-32">
        <section className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-8xl font-normal tracking-tight mb-8 leading-[1.1]">
              Building <span className="italic text-accent-orange">Enterprises</span> Through Discipline & Vision
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <p className="text-xl text-text-muted leading-relaxed font-light flex-grow max-w-2xl">
                Aditya Kumar Sarda is an Indian industrialist and Chairman of <span className="text-white font-medium">Axis Group</span>, orchestrating a multi-sector conglomerate focused on sustainable growth and national impact.
              </p>
              <motion.a 
                href="https://axisgroupco.com/#about"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-accent-orange font-bold tracking-widest text-xs uppercase group translate-y-1"
              >
                Explore Axis Group <ArrowRight size={16} />
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* Journey Section */}
        <section id="about" className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/5 bg-white/5 shadow-2xl shadow-black/40">
              <img 
                src="https://res.cloudinary.com/dgt6ktxld/image/upload/v1776884416/446d3335-aaa2-4369-85c3-79b469502ea1.png" 
                alt="Aditya Sarda"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass !rounded-2xl p-8 flex flex-col items-center">
              <span className="text-4xl font-serif text-accent-orange">BU</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-text-muted">Boston University Alumnus</span>
            </div>
          </motion.div>

          <div className="space-y-8">
            <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-accent-orange">My Journey</h2>
            <h3 className="text-4xl md:text-5xl font-serif leading-tight">Revitalizing Traditions, Scaling Horizons</h3>
            <div className="space-y-6 text-text-muted text-lg font-light leading-relaxed">
              <p>
                Aditya Kumar Sarda began his professional journey after completing his BSBA from Boston University, USA. He entered the family business at a time when the jute industry was under severe stress.
              </p>
              <p>
                Through focused execution and strategic intervention, he played a key role in reviving and scaling the business into a competitive and profitable enterprise. Today, his leadership extends across mining, real estate, and warehousing.
              </p>
            </div>
            <div className="flex gap-12 pt-4">
               <div>
                  <div className="text-2xl font-serif text-white">Execution</div>
                  <div className="text-xs uppercase tracking-widest text-accent-orange font-bold mt-1">Discipline</div>
               </div>
               <div>
                  <div className="text-2xl font-serif text-white">Strategic</div>
                  <div className="text-xs uppercase tracking-widest text-accent-orange font-bold mt-1">Clarity</div>
               </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-accent-green">Leadership Philosophy</h2>
            <h3 className="text-4xl font-serif italic text-white">The Foundation of Success</h3>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {philosophy.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 glass rounded-[2rem] border-white/5 space-y-4 hover:border-accent-green/30 transition-all flex flex-col justify-center text-center group"
              >
                <div className="text-accent-green font-bold text-lg font-serif italic group-hover:scale-110 transition-transform">0{idx + 1}</div>
                <h4 className="text-white font-semibold text-sm uppercase tracking-wider">{item.title}</h4>
                <p className="text-text-muted text-xs leading-relaxed font-light">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Business Divisions Bantu Grid */}
        <section id="businesses" className="space-y-16">
          <div className="flex justify-between items-end">
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-accent-orange">Industrial Impact</h2>
              <h3 className="text-4xl md:text-6xl font-serif">Building Enterprises</h3>
            </div>
            <div className="h-[1px] hidden md:block flex-grow mx-16 bg-border mb-4 opacity-30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businesses.map((biz, idx) => (
              <motion.div
                key={biz.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="card-glass group flex flex-col justify-between h-[360px]"
              >
                <div>
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: biz.color }}
                  >
                    <biz.icon className={biz.accent} size={24} />
                  </div>
                  <h3 className="text-2xl font-serif mb-4">{biz.title}</h3>
                  <p className="text-[14px] text-text-muted leading-relaxed font-light">
                    {biz.description}
                  </p>
                </div>
                <a 
                  href={biz.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="space-y-4 group/btn"
                >
                  <div className={`h-[2px] w-10 ${biz.accentBg}`} />
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-text-muted opacity-0 group-hover:opacity-100 transition-opacity group-hover/btn:text-white">
                    Operational Excellence <ArrowRight size={10} />
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Social Impact Section */}
        <section id="philanthropy" className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-accent-orange">Social Impact</h2>
              <h3 className="text-4xl md:text-5xl font-serif">Axis Foundation</h3>
            </div>
            <p className="text-lg text-text-muted font-light leading-relaxed">
              Reflecting a belief that business must contribute to long-term societal progress, Aditya supports critical initiatives through Axis Foundation.
            </p>
            <div className="space-y-4">
              {['Education', 'Healthcare', 'Community Development'].map((item) => (
                <div key={item} className="flex items-center gap-4 text-white font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 card-glass !p-12 !bg-accent-green/5 relative overflow-hidden group">
             <div className="absolute -top-12 -right-12 text-accent-green opacity-5 group-hover:rotate-12 transition-transform duration-1000">
                <Leaf size={320} />
             </div>
             <div className="relative z-10 space-y-8">
                <h4 className="text-3xl font-serif italic text-white/90">"Business must serve a higher purpose."</h4>
                <p className="text-text-muted leading-relaxed">
                  The foundation focuses on creating sustainable models for community upliftment, ensuring that growth translates into visible progress for the underprivileged sectors of society.
                </p>
             </div>
          </div>
        </section>

        {/* Contact Form Integrated in Bento style */}
        <section id="contact" className="grid md:grid-cols-5 gap-6">
           <div className="md:col-span-2 card-glass !bg-accent-orange/5 space-y-8 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-xs uppercase tracking-widest font-bold text-accent-orange">Inquiries</h2>
                <h3 className="text-4xl font-serif">Get in touch</h3>
                <p className="text-text-muted font-light">Interested in collaborations or learning more about our ventures?</p>
              </div>
              <div className="space-y-4">
                <a href="mailto:contact@adityasarda.com" className="block text-xl hover:text-accent-orange transition-colors">contact@adityasarda.com</a>
                <div className="flex gap-4">
                   <Linkedin className="text-text-muted hover:text-white cursor-pointer" />
                   <ArrowRight className="text-accent-orange" />
                </div>
              </div>
           </div>
           <div className="md:col-span-3 card-glass !p-10 space-y-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid md:grid-cols-2 gap-6">
                    <input type="text" className="bg-white/5 border border-border px-6 py-4 rounded-xl focus:outline-none focus:border-accent-orange transition-all placeholder:text-text-muted/30" placeholder="Your Name" />
                    <input type="email" className="bg-white/5 border border-border px-6 py-4 rounded-xl focus:outline-none focus:border-accent-orange transition-all placeholder:text-text-muted/30" placeholder="Email Address" />
                 </div>
                 <textarea className="w-full bg-white/5 border border-border px-6 py-4 rounded-xl focus:outline-none focus:border-accent-orange transition-all placeholder:text-text-muted/30 min-h-[150px]" placeholder="Your Message"></textarea>
                 <button className="contact-pill w-full !py-5 uppercase tracking-[0.2em]">Send Inquiry</button>
              </form>
           </div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8 text-text-muted text-[13px] tracking-wider uppercase font-semibold">
          <div>© 2026 ADITYA SARDA. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <a href="https://axisgroupco.com/#contact" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Strategy</a>
            <a href="https://axisgroupco.com/sustainability" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Sustainability</a>
          </div>
      </footer>
    </div>
  );
}
