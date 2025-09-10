
import React from 'react';
import type { Category } from '../types';

interface CategorySectionProps {
  title: string;
  items: Category[];
  isPickup?: boolean;
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, items, isPickup = false }) => {
  const gridCols = isPickup ? "md:grid-cols-4" : "md:grid-cols-2";
  const itemCols = isPickup ? "" : "md:grid-cols-2";
  const gap = isPickup ? "gap-4" : "gap-1";
  const itemGap = isPickup ? "" : "gap-1";

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl tracking-widest mb-10">{title}</h2>
        
        {isPickup ? (
             <div className={`grid grid-cols-2 ${gridCols} ${gap}`}>
                {items.map(item => (
                    <a href="#" key={item.id} className="relative aspect-square block group">
                        <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity group-hover:bg-opacity-10">
                            <span className="text-white text-center text-base tracking-wider">{item.name}</span>
                        </div>
                    </a>
                ))}
            </div>
        ) : (
            <div className={`grid grid-cols-1 ${gridCols} ${gap}`}>
                <div className={`grid grid-cols-1 ${itemCols} ${itemGap}`}>
                     <a href="#" key={items[0].id} className="relative block group">
                        <img src={items[0].imageUrl} alt={items[0].name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center transition-opacity group-hover:bg-opacity-10">
                            <span className="text-white text-xs">{items[0].subName}</span>
                            <span className="text-white text-center text-2xl tracking-wider font-medium">{items[0].name}</span>
                        </div>
                    </a>
                    <a href="#" key={items[1].id} className="relative block group">
                        <img src={items[1].imageUrl} alt={items[1].name} className="w-full h-full object-cover" />
                         <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center transition-opacity group-hover:bg-opacity-10">
                            <span className="text-white text-xs">{items[1].subName}</span>
                            <span className="text-white text-center text-2xl tracking-wider font-medium">{items[1].name}</span>
                        </div>
                    </a>
                </div>
                 <a href="#" key={items[2].id} className="relative block group">
                    <img src={items[2].imageUrl} alt={items[2].name} className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center transition-opacity group-hover:bg-opacity-10">
                        <span className="text-white text-xs">{items[2].subName}</span>
                        <span className="text-white text-center text-2xl tracking-wider font-medium">{items[2].name}</span>
                    </div>
                </a>
                <a href="#" key={items[3].id} className="relative block group">
                    <img src={items[3].imageUrl} alt={items[3].name} className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center transition-opacity group-hover:bg-opacity-10">
                        <span className="text-white text-xs">{items[3].subName}</span>
                        <span className="text-white text-center text-2xl tracking-wider font-medium">{items[3].name}</span>
                    </div>
                </a>
                 <div className={`grid grid-cols-1 ${itemCols} ${itemGap}`}>
                     <a href="#" key={items[4].id} className="relative block group">
                        <img src={items[4].imageUrl} alt={items[4].name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center transition-opacity group-hover:bg-opacity-10">
                            <span className="text-white text-xs">{items[4].subName}</span>
                            <span className="text-white text-center text-2xl tracking-wider font-medium">{items[4].name}</span>
                        </div>
                    </a>
                    <a href="#" key={items[5].id} className="relative block group">
                        <img src={items[5].imageUrl} alt={items[5].name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center transition-opacity group-hover:bg-opacity-10">
                            <span className="text-white text-xs">{items[5].subName}</span>
                            <span className="text-white text-center text-2xl tracking-wider font-medium">{items[5].name}</span>
                        </div>
                    </a>
                </div>
            </div>
        )}
      </div>
    </section>
  );
};

export default CategorySection;
