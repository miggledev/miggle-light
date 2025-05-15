import React, { useState } from 'react';
import { toast } from '../components/ui/sonner';
import { NotebookIcon, StylusIcon, EcoIcon, MagnetIcon, GlowIcon, HeartHandsIcon } from '../components/HandDrawnIcons';
import Navbar from '../components/Navbar';
const Index = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    toast.success('Thank you for signing up! We\'ll notify you when Miggle Light launches.');
    setEmail('');
  };
  return <div className="min-h-screen bg-miggle-beige text-foreground font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="container-inner relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-handwriting font-bold mb-6 leading-tight">
                <span className="block">Who said</span>
                <span className="block">digital notebook?</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-md">
                Meet the handmade, eco-friendly smart notebook case designed for analog lovers.
              </p>
              <a href="#signup" className="btn-primary inline-block">
                Get Notified
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center animate-float">
              <div className="relative">
                <div className="w-64 h-80 md:w-80 md:h-96 bg-white rounded-xl shadow-lg border-4 border-dashed border-miggle-peach flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-miggle-green/20 to-miggle-yellow/30 opacity-60"></div>
                  <NotebookIcon className="w-40 h-40 opacity-50" />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-miggle-yellow rounded-full animate-glow glow-effect"></div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-miggle-peach rounded-full flex items-center justify-center shadow-md animate-float" style={{
                animationDelay: '1s'
              }}>
                  <span className="font-handwriting text-lg">Coming<br />Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-miggle-green rounded-full opacity-50"></div>
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-miggle-yellow rounded-full opacity-50"></div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container bg-white">
        <div className="container-inner">
          <h2 className="text-4xl md:text-5xl font-handwriting mb-6 text-center">What is <span className="hand-drawn">Miggle Light</span>?</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl mb-8">
              Miggle Light is a smart notebook case that embraces the beauty of analog while offering clever non-digital features. It's where traditional craftsmanship meets thoughtful innovation.
            </p>
            <p className="text-lg md:text-xl mb-8">
              Made from sustainable materials and crafted with care, Miggle Light provides a cozy home for your favorite notebook while enhancing your analog experience with small, delightful features.
            </p>
            <p className="text-lg md:text-xl font-handwriting text-2xl">
              No electronics. No batteries. Just pure analog joy.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-container bg-miggle-green/20">
        <div className="container-inner">
          <h2 className="text-4xl md:text-5xl font-handwriting mb-12 text-center">Key <span className="hand-drawn">Features</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card flex flex-col items-center text-center">
              <StylusIcon className="drawing-icon" />
              <h3 className="text-2xl font-handwriting mb-3">Miggle Stylus</h3>
              <p className="text-muted-foreground">
                A specially designed stylus that sits in the middle of your notebook, always accessible when inspiration strikes.
              </p>
            </div>
            
            <div className="feature-card flex flex-col items-center text-center">
              <GlowIcon className="drawing-icon" />
              <h3 className="text-2xl font-handwriting mb-3">Nightpaper</h3>
              <p className="text-muted-foreground">
                A fluorescent glow strip that provides just enough light for nighttime note-taking without disturbing others.
              </p>
            </div>
            
            <div className="feature-card flex flex-col items-center text-center">
              <MagnetIcon className="drawing-icon" />
              <h3 className="text-2xl font-handwriting mb-3">Magnetic Attachments</h3>
              <p className="text-muted-foreground">
                Cleverly placed magnets to secure your notebook, pen, and other small items in just the right places.
              </p>
            </div>
            
            <div className="feature-card flex flex-col items-center text-center">
              <EcoIcon className="drawing-icon" />
              <h3 className="text-2xl font-handwriting mb-3">Eco-Friendly</h3>
              <p className="text-muted-foreground">
                Made from recyclable materials that are gentle on our planet. Fully biodegradable when its long life finally ends.
              </p>
            </div>
            
            <div className="feature-card flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
              <NotebookIcon className="drawing-icon" />
              <h3 className="text-2xl font-handwriting mb-3">Smart Storage</h3>
              <p className="text-muted-foreground">
                Thoughtfully designed pockets and compartments to keep your materials organized and accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It's Different Section */}
      <section className="section-container bg-white">
        <div className="container-inner">
          <h2 className="text-4xl md:text-5xl font-handwriting mb-10 text-center">Why it's <span className="hand-drawn">Different</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 bg-miggle-yellow/30 p-6 rounded-xl shadow-sm">
                <h3 className="text-2xl font-handwriting mb-2">Smartness Without Electronics</h3>
                <p>While other "smart" products rely on batteries and screens, Miggle Light uses clever design to enhance your analog experience.</p>
              </div>
              
              <div className="mb-6 bg-miggle-peach/30 p-6 rounded-xl shadow-sm">
                <h3 className="text-2xl font-handwriting mb-2">Sustainable By Design</h3>
                <p>Created with materials that can be fully recycled or composted, Miggle Light is kind to our planet from beginning to end.</p>
              </div>
              
              <div className="bg-miggle-green/30 p-6 rounded-xl shadow-sm">
                <h3 className="text-2xl font-handwriting mb-2">Tactile Comfort</h3>
                <p>Designed to feel good in your hands, with textures and weights that make writing a physical pleasure.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-64 md:h-96 bg-gradient-to-br from-miggle-peach/50 to-miggle-yellow/50 rounded-2xl flex items-center justify-center">
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-handwriting text-5xl mb-3 opacity-90">No</div>
                    <ul className="space-y-3 text-lg opacity-80">
                      <li className="line-through">Batteries</li>
                      <li className="line-through">Charging</li>
                      <li className="line-through">Updates</li>
                      <li className="line-through">Tech Support</li>
                      <li className="line-through">Obsolescence</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Handcrafted Section */}
      <section id="handcrafted" className="section-container bg-miggle-grayBlue/30">
        <div className="container-inner">
          <h2 className="text-4xl md:text-5xl font-handwriting mb-12 text-center">Handcrafted with <span className="hand-drawn">Love</span></h2>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <HeartHandsIcon className="w-40 h-40 mx-auto opacity-80" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-miggle-peach/30 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <p className="text-lg mb-6">Each Miggle Light is crafted by hand in my little workshop with attention to every detail. I take pride in making a product that will help in your creative.</p>
              
              <blockquote className="border-l-4 border-miggle-yellow pl-4 italic">
                "I believe there's something special about objects made with care and intention. That's why every stitch, fold, and finish on your Miggle Light is done by my own hands."
                <footer className="text-right font-handwriting text-lg mt-2">— The Creator</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section id="signup" className="section-container bg-gradient-to-br from-miggle-peach/50 to-miggle-yellow/50">
        <div className="container-inner max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-handwriting mb-6 text-center">Coming <span className="hand-drawn">Soon</span></h2>
          <p className="text-center text-lg md:text-xl mb-10">
            Miggle Light is currently in the final stages of development.<br />Be the first to know when it's ready to illuminate your analog world.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="email" placeholder="Your email address" className="flex-1 px-6 py-3 rounded-full bg-white bg-opacity-70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-miggle-peach border-none" value={email} onChange={e => setEmail(e.target.value)} required />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Notify Me
              </button>
            </div>
            <p className="text-sm text-center mt-4 text-muted-foreground">
              We respect your privacy. No spam, ever.
            </p>
          </form>
          
          <div className="mt-16 text-center">
            <p className="font-handwriting text-2xl mb-4">Share the analog love</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
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
    </div>;
};
export default Index;
