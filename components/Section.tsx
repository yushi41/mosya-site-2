
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  buttonText?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, buttonText = "続きを見る" }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl tracking-widest mb-10">{title}</h2>
        {children}
        <div className="text-center mt-10">
          <a href="#" className="bg-sky-500 text-white text-center py-3 px-12 tracking-widest inline-block hover:bg-sky-600 transition-colors text-sm">
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section;
