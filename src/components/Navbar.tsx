
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="py-4 px-6 fixed top-0 w-full z-50 bg-miggle-beige/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-handwriting font-bold">
          <span className="text-black">Miggle</span> 
          <span className="text-black opacity-70">Light</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          <a href="/#about" className="text-black hover:text-black/70 transition-colors">What is it?</a>
          <a href="/#features" className="text-black hover:text-black/70 transition-colors">Features</a>
          <a href="/#handcrafted" className="text-black hover:text-black/70 transition-colors">Handcrafted</a>
          <Link to="/blog" className="text-black hover:text-black/70 transition-colors">Blog</Link>
          <a href="/#signup" className="text-black hover:text-black/70 transition-colors">Coming Soon</a>
        </div>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
