
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative h-[60vh] bg-gray-100">
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1600/900')" }}>
            </div>
            <div className="relative h-full flex items-end pb-16 md:items-center md:pb-0">
                <div className="container mx-auto px-4">
                   <div className="w-full md:w-1/3">
                        <a href="#" className="bg-sky-500 text-white text-center py-3 px-8 tracking-widest inline-block hover:bg-sky-600 transition-colors">
                            COLD BREW
                        </a>
                   </div>
                </div>
            </div>
            <div className="absolute bottom-4 right-4 flex space-x-2">
                <button className="h-2 w-2 rounded-full bg-white"></button>
                <button className="h-2 w-2 rounded-full bg-white/50"></button>
                <button className="h-2 w-2 rounded-full bg-white/50"></button>
                <button className="h-2 w-2 rounded-full bg-white/50"></button>
            </div>
        </section>
    );
};

export default Hero;
