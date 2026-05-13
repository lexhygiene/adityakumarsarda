import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8 text-text-muted text-[13px] tracking-wider uppercase font-semibold w-full">
      <div className="text-center md:text-left">© 2026 ADITYA SARDA. ALL RIGHTS RESERVED.</div>
      <div className="flex flex-wrap justify-center gap-8">
        <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
        <a href="https://axisgroupco.com/#contact" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Strategy</a>
        <a href="https://axisgroupco.com/sustainability" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Sustainability</a>
      </div>
    </footer>
  );
}
