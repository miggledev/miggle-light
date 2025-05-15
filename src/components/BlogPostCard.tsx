
import React from 'react';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
};

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium bg-miggle-yellow/30 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-muted-foreground">
            {post.readTime}
          </span>
        </div>
        <h3 className="text-xl font-handwriting mb-2 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground">{post.date}</span>
          <a href="#" className="text-sm font-medium text-black hover:text-miggle-peach transition-colors">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
