import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: isHome ? '#about' : '/#about' },
    { name: 'Businesses', href: isHome ? '#businesses' : '/#businesses' },
    { name: 'Vision', href: isHome ? '#vision' : '/#vision' },
    { name: 'Contact', href: isHome ? '#contact' : '/#contact' },
  ];

  return (
    <>
      <nav 
        className="fixed top-8 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-5xl z-50 transition-all duration-500"
      >
        <div className={`glass px-8 py-4 rounded-full flex justify-between items-center transition-all ${isScrolled ? 'shadow-2xl shadow-black/50' : ''}`}>
          <Link to="/" className="text-2xl font-bold tracking-tight font-serif text-white">
            ADITYA SARDA
          </Link>

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
              href={isHome ? "#contact" : "/#contact"}
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
                  className="text-3xl font-serif tracking-tight hover:text-accent-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={isHome ? "#contact" : "/#contact"}
                onClick={() => setMobileMenuOpen(false)}
                className="contact-pill text-lg px-8 py-3"
              >
                GET IN TOUCH
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
