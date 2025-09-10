
import React from 'react';
import Section from './Section';
import type { BlogPost } from '../types';

interface BlogSectionProps {
  posts: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  return (
    <Section title="BLOG">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map(post => (
          <a href="#" key={post.id} className="group">
            <div className="aspect-[4/3] bg-gray-100 mb-4 overflow-hidden">
              <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <p className="text-xs text-gray-500 mb-1">{post.date}</p>
            <h3 className="text-sm font-medium group-hover:text-sky-500">{post.title}</h3>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default BlogSection;
