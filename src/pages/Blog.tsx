import React from 'react';
import Navbar from '../components/Navbar';
import { toast } from '../components/ui/sonner';
import { Mail, MessageCircle, Send, Calendar, Clock, Share, Link } from 'lucide-react';
import BlogPostCard from '../components/BlogPostCard';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'The First Concept Prototype, the Miggle Light',
    excerpt: 'Join us on the journey of creating our first physical concept prototype of the Miggle Light, an analog smart notebook case.',
    date: 'May 15, 2025',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1287&auto=format&fit=crop',
    category: 'Behind the Scenes',
    readTime: '4 min read'
  },
  {
    id: 2,
    title: 'The Materials That Make Miggle Light Unique',
    excerpt: 'A deep dive into our material choices and why sustainable, eco-friendly options are at the heart of our design philosophy.',
    date: 'May 10, 2025',
    image: 'https://images.unsplash.com/photo-1621600411688-4be93c2c1208?q=80&w=1470&auto=format&fit=crop',
    category: 'Design',
    readTime: '3 min read'
  },
  {
    id: 3,
    title: 'Why We\'re Embracing the Analog Renaissance',
    excerpt: 'In a world dominated by screens, we explore why analog tools are making a powerful comeback and how they benefit creativity.',
    date: 'May 5, 2025',
    image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=1470&auto=format&fit=crop',
    category: 'Philosophy',
    readTime: '5 min read'
  }
];

// Full blog post content (for the first blog post)
const firstBlogPost = {
  title: 'The First Concept Prototype, the Miggle Light',
  date: 'May 15, 2025',
  author: 'Mig Sufrem',
  category: 'Behind the Scenes',
  readTime: '4 min read',
  image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1287&auto=format&fit=crop',
  content: `
    <p class="text-lg mb-4">Creating something truly unique requires a blend of inspiration, experimentation, and a willingness to embrace the unexpected. Today, I'm excited to share with you the journey of creating the first physical prototype of the Miggle Light.</p>
    
    <p class="mb-4">It all started with a simple question: How can we bring the tactile joy of analog notebooks into a modern context without compromising what makes them special in the first place?</p>
    
    <h2 class="text-2xl font-handwriting my-6">The Concept Phase</h2>
    
    <p class="mb-4">The earliest sketches of Miggle Light weren't even called by that name. They were rough drawings in my own notebook, ironically enough – ideas about how to enhance the notebook experience without introducing screens, batteries, or anything that would take away from the pure analog experience.</p>
    
    <p class="mb-4">I wanted something that would give structure and protection to notebooks, but also add functionality in clever, non-digital ways. The designs evolved from simple covers to more intricate cases with built-in bookmarks, pen holders, and even the earliest concept of what would become our signature magnetic page markers.</p>
    
    <h2 class="text-2xl font-handwriting my-6">Materials Matter</h2>
    
    <p class="mb-4">Finding the right materials was one of the biggest challenges. I knew from the beginning that sustainability wasn't optional – it was fundamental to what Miggle Light would represent. The prototype went through several iterations of environmentally friendly materials:</p>
    
    <ul class="list-disc pl-5 mb-4 space-y-2">
      <li>i just used some sort of cardboard.</li>
    </ul>
    
    <h2 class="text-2xl font-handwriting my-6">The First Working Prototype</h2>
    
    <p class="mb-4">After dozens of paper mock-ups and material tests, the first working prototype of Miggle Light came together in my small workshop. It wasn't pretty – held together with more hope than glue in some places – but it worked! The magnetic closure had a satisfying snap, the pages stayed perfectly flat when opened, and the built-in bookmark system worked even better than expected.</p>
    
    <p class="mb-4">What I remember most vividly is the moment I inserted my favorite notebook into the case for the first time. There was something almost magical about how it transformed an ordinary notebook into something special, intentional, and delightful to use.</p>
    
    <h2 class="text-2xl font-handwriting my-6">Unexpected Discoveries</h2>
    
    <p class="mb-4">As with any prototype, there were surprises along the way. Some features I thought would be essential turned out to be unnecessary. Others that started as afterthoughts became central to the design. The angle of the spine, the texture of the materials, the way light played across the surface – all of these elements evolved through hands-on experimentation.</p>
    
    <p class="mb-4">Perhaps the most unexpected discovery was how people responded to the prototype. When I shared it with friends and early testers, they didn't focus on the features I had labored over. Instead, they talked about how it made them feel. "It makes me want to write more," one said. Another mentioned that it "feels like an invitation to slow down and be present." These reactions helped shape the direction of subsequent iterations.</p>
    
    <h2 class="text-2xl font-handwriting my-6">Looking Forward</h2>
    
    <p class="mb-4">That first prototype is still on my desk, a humble reminder of where Miggle Light began. It's miles away from what the final product will be, but its soul – its essence – remains intact. As we move forward with refinements and prepare for production, I'm committed to preserving that special quality that made people connect with it from the beginning.</p>
    
    <p class="mb-4">In the coming weeks, I'll be sharing more details about specific features, our manufacturing process, and how you can be among the first to experience Miggle Light for yourself. Until then, I'd love to hear your thoughts about analog tools and what makes them special to you.</p>
  `
};

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

  // State to control whether we show full blog post or blog listing
  const [showFullPost, setShowFullPost] = React.useState(true);
  const [currentPost, setCurrentPost] = React.useState(firstBlogPost);

  // Function to handle clicking on a blog post
  const handlePostClick = (postId: number) => {
    // In a real app, you'd fetch the post data here
    setCurrentPost(firstBlogPost); // For now, always show the first blog post
    setShowFullPost(true);
    window.scrollTo(0, 0);
  };

  // Function to go back to the blog listing
  const handleBackToBlog = () => {
    setShowFullPost(false);
    window.scrollTo(0, 0);
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
          
          <p className="text-center max-w-2xl mx-auto mb-8 bg-miggle-yellow/20 p-4 rounded-lg border border-miggle-yellow/30">
            <span className="font-medium">Miggle Light is kind-of-opensource!</span> Follow our journey as we share insights, designs, and creative processes.
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
      
      {showFullPost ? (
        /* Full Blog Post */
        <section className="py-16 px-4">
          <div className="container-inner max-w-4xl">
            <button 
              onClick={handleBackToBlog} 
              className="mb-8 flex items-center text-miggle-peach hover:text-miggle-peach/80 transition-colors"
            >
              ← Back to all posts
            </button>
            
            <article className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={currentPost.image} 
                  alt={currentPost.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="text-xs font-medium bg-miggle-yellow/30 px-3 py-1 rounded-full">
                    {currentPost.category}
                  </span>
                  <span className="text-xs font-medium bg-miggle-green/30 px-3 py-1 rounded-full flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {currentPost.readTime}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-handwriting mb-4">
                  {currentPost.title}
                </h1>
                
                <div className="flex items-center justify-between mb-8 pb-8 border-b border-miggle-peach/10">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-miggle-peach/30 flex items-center justify-center text-sm font-medium">
                      MS
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium">{currentPost.author}</div>
                      <div className="text-xs text-muted-foreground flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />{currentPost.date}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="p-2 rounded-full hover:bg-miggle-yellow/20 transition-colors" title="Share">
                      <Share className="h-4 w-4 text-miggle-peach" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-miggle-yellow/20 transition-colors" title="Copy link">
                      <Link className="h-4 w-4 text-miggle-peach" />
                    </button>
                  </div>
                </div>
                
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: currentPost.content }} />
                
                <div className="mt-12 pt-8 border-t border-miggle-peach/10">
                  <h3 className="text-xl font-handwriting mb-4">Share this post</h3>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 rounded-md bg-miggle-yellow/20 hover:bg-miggle-yellow/30 transition-colors flex items-center">
                      <Share className="h-4 w-4 mr-2" />
                      Share
                    </button>
                    <button className="px-4 py-2 rounded-md bg-miggle-yellow/20 hover:bg-miggle-yellow/30 transition-colors flex items-center">
                      <Link className="h-4 w-4 mr-2" />
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      ) : (
        /* Blog Posts Listing */
        <section className="py-16 px-4">
          <div className="container-inner">
            <h2 className="text-3xl font-handwriting mb-8">Latest Posts</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map(post => (
                <div key={post.id} onClick={() => handlePostClick(post.id)} className="cursor-pointer">
                  <BlogPostCard post={post} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Contact Section */}
      <section className="py-16 px-4 bg-miggle-grayBlue/30">
        <div className="container-inner max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-handwriting mb-12 text-center">Get in <span className="hand-drawn">Touch</span></h2>
          
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-md">
            <p className="text-center text-lg mb-10">
              Have questions about Miggle Light? Want to collaborate or just say hello? 
              I'd love to hear from you!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-miggle-peach/20 hover:bg-miggle-peach/30 transition-colors">
                <Mail className="h-8 w-8 mb-4 text-miggle-peach" />
                <h3 className="font-handwriting text-xl mb-2">Email</h3>
                <a href="mailto:migsufrem@gmail.com" className="text-foreground hover:underline">
                  migsufrem@gmail.com
                </a>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-miggle-yellow/20 hover:bg-miggle-yellow/30 transition-colors">
                <MessageCircle className="h-8 w-8 mb-4 text-miggle-peach" />
                <h3 className="font-handwriting text-xl mb-2">Discord</h3>
                <p className="text-foreground">@stumbdev_</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-miggle-green/20 hover:bg-miggle-green/30 transition-colors">
                <Send className="h-8 w-8 mb-4 text-miggle-peach" />
                <h3 className="font-handwriting text-xl mb-2">Telegram</h3>
                <p className="text-foreground">@sufremoak</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer (copied from Index page for consistency) */}
      <section className="py-8 px-4 bg-miggle-beige">
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
      </section>
    </div>
  );
};

export default Blog;
