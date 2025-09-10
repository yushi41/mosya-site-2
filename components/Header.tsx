
import React from 'react';

const BlueBottleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.2381 37.5238C12.2381 37.5238 23.4286 28.5238 23.4286 18.0476C23.4286 7.57143 18.3333 0.95238 12.2381 0.95238C6.14286 0.95238 0.952381 7.57143 0.952381 18.0476C0.952381 28.5238 12.2381 37.5238 12.2381 37.5238Z" stroke="#00A0DE" strokeWidth="1.5"/>
    </svg>
);

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="bg-sky-500 text-white text-center text-xs py-1">
                税込5,500円以上で送料無料（一部対象外あり） あと ¥5500
            </div>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-sm tracking-widest hover:text-sky-500">オンラインストア</a>
                        <a href="#" className="text-sm tracking-widest hover:text-sky-500">ベストセラー</a>
                        <a href="#" className="text-sm tracking-widest hover:text-sky-500">カフェ一覧</a>
                        <a href="#" className="text-sm tracking-widest hover:text-sky-500">ブログ</a>
                    </nav>

                    <div className="absolute left-1/2 -translate-x-1/2 md:static md:left-auto md:translate-x-0">
                        <a href="#">
                           <BlueBottleIcon className="h-8 w-auto text-sky-500"/>
                        </a>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-xs tracking-widest">
                        <a href="#" className="flex flex-col items-center hover:text-sky-500">
                            <i className="fa-solid fa-arrow-right-to-bracket text-lg"></i>
                            <span>LOGIN</span>
                        </a>
                        <a href="#" className="flex flex-col items-center hover:text-sky-500">
                            <i className="fa-solid fa-magnifying-glass text-lg"></i>
                            <span>SEARCH</span>
                        </a>
                        <a href="#" className="flex flex-col items-center hover:text-sky-500">
                             <i className="fa-solid fa-bag-shopping text-lg"></i>
                            <span>CART</span>
                        </a>
                    </div>
                </div>
            </div>
             <div className="md:hidden flex justify-center items-center space-x-6 pb-4 border-t border-gray-100 pt-2">
                <a href="#" className="text-xs tracking-widest hover:text-sky-500">オンラインストア</a>
                <a href="#" className="text-xs tracking-widest hover:text-sky-500">ベストセラー</a>
                <a href="#" className="text-xs tracking-widest hover:text-sky-500">カフェ一覧</a>
                <a href="#" className="text-xs tracking-widest hover:text-sky-500">ブログ</a>
            </div>
        </header>
    );
};

export default Header;
