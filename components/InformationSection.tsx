
import React from 'react';
import Section from './Section';
import type { InformationItem } from '../types';

interface InformationSectionProps {
  items: InformationItem[];
}

const InformationSection: React.FC<InformationSectionProps> = ({ items }) => {
  return (
    <div className="bg-gray-50">
        <Section title="INFORMATION" buttonText="過去のお知らせ">
        <div className="max-w-3xl mx-auto">
            {items.map(item => (
            <a href="#" key={item.id} className="flex flex-col md:flex-row items-start md:items-center py-4 border-b border-gray-200 last:border-b-0 group">
                <div className="flex items-center mb-2 md:mb-0">
                    <span className="text-sm text-gray-500 mr-4">{item.date}</span>
                    <span className="bg-sky-500 text-white text-xs px-3 py-1">{item.tag}</span>
                </div>
                <p className="md:ml-6 text-sm group-hover:text-sky-500">{item.title}</p>
            </a>
            ))}
        </div>
        </Section>
    </div>
  );
};

export default InformationSection;
