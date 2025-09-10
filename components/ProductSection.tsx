
import React from 'react';
import Section from './Section';
import ProductCard from './ProductCard';
import type { Product } from '../types';

interface ProductSectionProps {
  title: string;
  products: Product[];
  showNumbers?: boolean;
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, products, showNumbers = false }) => {
  return (
    <Section title={title}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} number={showNumbers ? index + 1 : undefined} />
        ))}
      </div>
    </Section>
  );
};

export default ProductSection;
