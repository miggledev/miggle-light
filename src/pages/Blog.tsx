
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import BlogPostCard from '../components/BlogPostCard';
import PictureFrame from '../components/PictureFrame';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: 'The Return to Analog: Why Paper Still Matters',
    excerpt: "In a world dominated by digital screens, there's a growing appreciation for the tactile experience of writing on paper. This post explores the cognitive and emotional benefits of analog note-taking.",
    date: 'May 12, 2025',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5vdGVib29rfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    category: 'Analog Living',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Sustainable Materials in Everyday Products',
    excerpt: "How conscious choices in materials can reduce our environmental impact without sacrificing quality or aesthetics. Featuring Miggle Light's approach to sustainable design.",
    date: 'April 29, 2025',
    image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VzdGFpbmFibGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    category: 'Sustainability',
    readTime: '4 min read'
  },
  {
    id: 3,
    title: 'Design Philosophy: When Less Really Is More',
    excerpt: 'Exploring the minimalist approach to product design and how it leads to more thoughtful, useful, and beautiful objects that enhance our daily lives.',
    date: 'April 15, 2025',
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW1hbGlzdCUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    category: 'Design',
    readTime: '3 min read'
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-miggle-beige">
      <Helmet>
        <title>Miggle Light Blog - Ideas, Updates, and Inspiration</title>
        <meta name="description" content="Explore articles about analog living, sustainable design, and updates about Miggle Light's development journey." />
      </Helmet>
      
      <Navbar />
      
      <div className="pt-32 pb-16 px-4">
        <div className="container-inner">
          <h1 className="text-5xl md:text-6xl font-handwriting font-bold mb-8 text-center">The Miggle <span className="hand-drawn">Blog</span></h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-16">
            Thoughts, ideas, and updates from our journey to create a more thoughtful analog experience.
          </p>

          {/* Prototype Display Section */}
          <section className="mb-16 bg-white p-8 rounded-xl shadow-sm">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-handwriting mb-8 text-center">The <span className="hand-drawn">Prototype</span></h2>
              <div className="mx-auto">
                <PictureFrame 
                  imageUrl="/lovable-uploads/aac03905-1301-4f12-9c86-91ef5353e226.png"
                  altText="Miggle Light Prototype Notebook"
                  caption="An early prototype of the Miggle Light notebook with pen holder"
                />
              </div>
              <div className="mt-8 text-center max-w-2xl mx-auto">
                <p className="text-lg">
                  This early prototype shows the essential elements that make Miggle Light special - 
                  simplicity, functionality, and an analog experience designed with care.
                </p>
              </div>
            </div>
          </section>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
      
      <footer className="py-8 px-4 bg-miggle-beige border-t border-miggle-grayBlue/20">
        <div className="container-inner">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="font-handwriting text-2xl">Miggle Light</span>
              <p className="text-sm text-muted-foreground">© 2025 Miggle from Miguel. All rights reserved.</p>
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
