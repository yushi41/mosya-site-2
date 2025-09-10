
import React from 'react';

const Footer: React.FC = () => {
  const footerLinks = {
    information: [
      { name: "お知らせ", href: "#" },
      { name: "プレスリリース", href: "#" },
      { name: "メンバーシップ", href: "#" },
      { name: "ご利用規約", href: "#" },
      { name: "よくある質問・お問い合わせ", href: "#" },
      { name: "会社概要", href: "#" },
      { name: "採用情報", href: "#" },
      { name: "特定商取引法に基づく表記", href: "#" },
      { name: "プライバシーポリシー", href: "#" },
      { name: "コミュニティガイドライン", href: "#" },
    ],
    about: [
      { name: "ブルーイングガイド", href: "#" },
      { name: "COFFEE CLASS", href: "#" },
      { name: "私たちのストーリー", href: "#" },
      { name: "私たちのコーヒー", href: "#" },
      { name: "サステナビリティ", href: "#" },
      { name: "Coffee in Nature", href: "#" },
      { name: "QUICK STAND", href: "#" },
    ]
  };

  return (
    <footer className="bg-white text-gray-600">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold tracking-widest text-sm mb-4 text-gray-800">INFORMATION</h4>
              <ul className="space-y-2 text-xs">
                {footerLinks.information.map(link => (
                  <li key={link.name}><a href={link.href} className="hover:text-sky-500">{link.name}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold tracking-widest text-sm mb-4 text-gray-800">ABOUT</h4>
              <ul className="space-y-2 text-xs">
                {footerLinks.about.map(link => (
                  <li key={link.name}><a href={link.href} className="hover:text-sky-500">{link.name}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold tracking-widest text-sm mb-4 text-gray-800">メールマガジン</h4>
            <div className="text-xs space-y-4">
              <p>
                ブルーボトルコーヒーの最新情報や、限定プロダクト、イベント情報などをお届けします。※キャリアメール（携帯メール）でご登録いただくと、当ストアからのメールが届かない場合がございます。
              </p>
              <p>
                ご登録いただくことで、当社の<a href="#" className="underline hover:text-sky-500">利用規約</a>と<a href="#" className="underline hover:text-sky-500">プライバシーポリシー</a>に同意したものとみなされます。
              </p>
              <form className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2">
                <input type="email" placeholder="Eメールアドレスを入力" className="w-full md:w-auto flex-grow border border-gray-300 px-4 py-2 text-sm focus:ring-sky-500 focus:border-sky-500" />
                <button type="submit" className="bg-sky-500 text-white px-8 py-2.5 text-sm tracking-widest hover:bg-sky-600 transition-colors w-full md:w-auto">登録</button>
              </form>
            </div>
            <div className="flex space-x-6 mt-8 text-xl text-gray-800">
                <a href="#" className="hover:text-sky-500"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="hover:text-sky-500"><i className="fab fa-twitter"></i></a>
                <a href="#" className="hover:text-sky-500"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-xs tracking-widest text-gray-500">©2025 BLUE BOTTLE COFFEE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
