
import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  number?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, number }) => {
  return (
    <div className="text-center">
      {number && <p className="text-lg mb-2">No.{number}</p>}
      <div className="relative bg-gray-100 aspect-square mb-4">
        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
        {product.soldOut && (
          <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1">SOLD OUT</div>
        )}
      </div>
      <p className="text-sm mb-1">{product.name}</p>
      <p className="text-sm font-medium">{product.price}</p>
    </div>
  );
};

export default ProductCard;
