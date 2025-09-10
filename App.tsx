
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import CategorySection from './components/CategorySection';
import BlogSection from './components/BlogSection';
import InformationSection from './components/InformationSection';
import Footer from './components/Footer';
import { bestSellers, newArrivals, pickupItems, categories, blogPosts, informationItems } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <ProductSection title="ベストセラー" products={bestSellers} showNumbers={true} />
        <ProductSection title="新着&再入荷商品" products={newArrivals} />
        <CategorySection title="PICK UP" items={pickupItems} isPickup={true} />
        <CategorySection title="CATEGORY" items={categories} />
        
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <a href="#" className="block">
              <img src="https://picsum.photos/1200/400?grayscale&blur=1" alt="Subscription Banner" className="w-full h-auto" />
            </a>
          </div>
        </div>

        <BlogSection posts={blogPosts} />
        <InformationSection items={informationItems} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
