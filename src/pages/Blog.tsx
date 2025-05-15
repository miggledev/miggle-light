
import React from 'react';
import Navbar from '../components/Navbar';
import BlogPostCard from '../components/BlogPostCard';
import { toast } from '../components/ui/sonner';

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "The Journey of Creating Miggle Light",
    excerpt: "How a simple idea about combining analog joy with clever design turned into something special.",
    date: "May 10, 2025",
    image: "/placeholder.svg", 
    category: "Behind the Scenes",
    readTime: "4 min read"
  },
  {
    id: 2,
    title: "Why Analog Still Matters in a Digital World",
    excerpt: "The psychological benefits of handwriting and how it improves memory, creativity, and focus.",
    date: "May 5, 2025",
    image: "/placeholder.svg",
    category: "Analog Life",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Sustainable Materials in Miggle Light",
    excerpt: "A deep dive into the eco-friendly materials that make up Miggle Light and why they were chosen.",
    date: "April 28, 2025",
    image: "/placeholder.svg",
    category: "Sustainability",
    readTime: "5 min read"
  }
];

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
      
      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="container-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
          
          {/* Coming Soon Message */}
          <div className="mt-16 text-center">
            <p className="text-lg font-handwriting">More stories coming soon...</p>
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-1 bg-miggle-yellow rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container-inner">
          <h2 className="text-3xl md:text-4xl font-handwriting mb-12 text-center">Featured <span className="hand-drawn">Article</span></h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="aspect-video rounded-2xl bg-miggle-peach/20 flex items-center justify-center overflow-hidden">
                <img src="/placeholder.svg" alt="Featured Blog Post" className="object-cover w-full h-full" />
              </div>
            </div>
            <div className="md:w-1/2">
              <span className="text-sm font-medium bg-miggle-yellow/30 px-3 py-1 rounded-full">Design Process</span>
              <h3 className="text-2xl md:text-3xl font-handwriting mt-3 mb-4">The Art of Crafting Each Miggle Light By Hand</h3>
              <p className="text-muted-foreground mb-6">
                From selecting sustainable materials to the final stitches, every Miggle Light is created with careful attention to detail and a focus on quality that can only come from handcrafting.
              </p>
              <a href="#" className="btn-primary inline-block">Read Article</a>
            </div>
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
