
import React from 'react';
import Navbar from '../components/Navbar';
import { toast } from '../components/ui/sonner';

const Blog = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    toast.success('Thank you for subscribing to our blog!');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-miggle-beige text-foreground font-sans">
      <Navbar />
      
      {/* Blog Header */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-miggle-peach/30 to-miggle-beige">
        <div className="container-inner">
          <h1 className="text-4xl md:text-6xl font-handwriting font-bold mb-6 text-center">
            <span className="hand-drawn">The Analog Diaries</span>
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl mx-auto mb-8">
            Stories, thoughts, and updates about Miggle Light and the beautiful world of analog creativity
          </p>
          
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                name="email"
                placeholder="Your email for blog updates" 
                className="flex-1 px-6 py-3 rounded-full bg-white bg-opacity-70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-miggle-peach border-none" 
                required 
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* No Blog Posts Message */}
      <section className="py-16 px-4">
        <div className="container-inner">
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-12 text-center shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-6 text-miggle-peach/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <h2 className="text-2xl md:text-3xl font-handwriting mb-4">Coming Soon</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              I'm currently crafting some thoughtful articles about Miggle Light and analog creativity. 
              Subscribe above to be notified when new content is published.
            </p>
            <div className="w-24 h-1 bg-miggle-yellow rounded-full mx-auto"></div>
          </div>
        </div>
      </section>
      
      {/* Footer (copied from Index page for consistency) */}
      <footer className="py-8 px-4 bg-miggle-beige">
        <div className="container-inner">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="font-handwriting text-2xl">Miggle Light</span>
              <p className="text-sm text-muted-foreground">© 2025 Miggle Light. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-black transition-colors">Privacy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-black transition-colors">Terms</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-black transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
