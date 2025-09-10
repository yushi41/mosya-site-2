
import type { Product, Category, BlogPost, InformationItem } from './types';

export const bestSellers: Product[] = [
  { id: 1, name: "ベラ・ドノヴァン", price: "¥2,150", imageUrl: "https://picsum.photos/seed/product1/400/400" },
  { id: 2, name: "ゴブレットグラス", price: "¥3,300", imageUrl: "https://picsum.photos/seed/product2/400/400" },
  { id: 3, name: "エスプレッソ クラフトインスタントコーヒー 50本セット", price: "¥14,929", imageUrl: "https://picsum.photos/seed/product3/400/400" },
  { id: 4, name: "エンブロイダリーエコバッグ -コーヒーリーブス-", price: "¥6,771", imageUrl: "https://picsum.photos/seed/product4/400/400" },
  { id: 5, name: "クリアコールドタンブラー(16OZ)", price: "¥4,950", imageUrl: "https://picsum.photos/seed/product5/400/400" },
  { id: 6, name: "【オンライン限定】スリー・アフリカズ(挽き豆)セット", price: "¥2,150", imageUrl: "https://picsum.photos/seed/product6/400/400" },
  { id: 7, name: "ブルーボトル コミューターカップ ウィズ ストロー(16OZ)", price: "¥4,989", imageUrl: "https://picsum.photos/seed/product7/400/400" },
  { id: 8, name: "【オンライン限定】クリアコールドタンブラー(16OZ) & インスタントコーヒー セット", price: "¥8,752", imageUrl: "https://picsum.photos/seed/product8/400/400" },
];

export const newArrivals: Product[] = [
  { id: 9, name: "【期間限定】10周年ブレンド", price: "¥2,900", imageUrl: "https://picsum.photos/seed/product9/400/400", soldOut: true },
  { id: 10, name: "【期間限定】10周年ブレンド&ティンキャニスターセット", price: "¥6,600", imageUrl: "https://picsum.photos/seed/product10/400/400", soldOut: true },
  { id: 11, name: "ブルーボトルコーヒー × ヒューマンメイド キーチャーム", price: "¥3,850", imageUrl: "https://picsum.photos/seed/product11/400/400" },
  { id: 12, name: "ブラジル・カコンデ・セラード シガーノ バレー・ナチュラル", price: "¥1,431から", imageUrl: "https://picsum.photos/seed/product12/400/400" },
  { id: 13, name: "【再入荷】ダブルウォール アロマ グラス", price: "¥3,080", imageUrl: "https://picsum.photos/seed/product13/400/400" },
  { id: 14, name: "清澄トート -10周年エディション-", price: "¥9,900", imageUrl: "https://picsum.photos/seed/product14/400/400" },
  { id: 15, name: "【オンライン限定】コーヒーミル&コールドブリューボトルビーンズセット", price: "¥8,434", imageUrl: "https://picsum.photos/seed/product15/400/400" },
  { id: 16, name: "ストーンマグ&プレートセット", price: "¥4,400", imageUrl: "https://picsum.photos/seed/product16/400/400" },
];

export const pickupItems: Category[] = [
    { id: 1, name: "透明のグラス&ボトル", imageUrl: "https://picsum.photos/seed/pickup1/600/600" },
    { id: 2, name: "インスタントコーヒー", imageUrl: "https://picsum.photos/seed/pickup2/600/600" },
    { id: 3, name: "x ヒューマンメイド", imageUrl: "https://picsum.photos/seed/pickup3/600/600" },
    { id: 4, name: "ギフトセット", imageUrl: "https://picsum.photos/seed/pickup4/600/600" },
];

export const categories: Category[] = [
  { id: 1, name: "COFFEE", subName: "コーヒー", imageUrl: "https://picsum.photos/seed/cat1/600/400" },
  { id: 2, name: "DRINKWARE", subName: "ドリンクウェア", imageUrl: "https://picsum.photos/seed/cat2/600/400" },
  { id: 3, name: "GOODS", subName: "グッズ", imageUrl: "https://picsum.photos/seed/cat3/600/400" },
  { id: 4, name: "FOOD", subName: "フード", imageUrl: "https://picsum.photos/seed/cat4/600/400" },
  { id: 5, name: "BREWING", subName: "抽出器具", imageUrl: "https://picsum.photos/seed/cat5/600/400" },
  { id: 6, name: "ONLINE EXCLUSIVE", subName: "オンライン限定", imageUrl: "https://picsum.photos/seed/cat6/600/400" },
];

export const blogPosts: BlogPost[] = [
  { id: 1, date: "2025.09.01", title: "10TH ANNIVERSARY BLEND", imageUrl: "https://picsum.photos/seed/blog1/400/300" },
  { id: 2, date: "2025.08.29", title: "# MUSIC WITH COFFEE VOL.130 : LAST WAVES", imageUrl: "https://picsum.photos/seed/blog2/400/300" },
  { id: 3, date: "2025.08.22", title: "# MUSIC WITH COFFEE VOL.129 : SUMMER ECHO", imageUrl: "https://picsum.photos/seed/blog3/400/300" },
];

export const informationItems: InformationItem[] = [
  { id: 1, date: "2025.08.08", tag: "お知らせ", title: "【重要】過去にeギフト（配送）サービスをご利用いただいたお客様へお詫びと誤送信のお知らせ" },
  { id: 2, date: "2025.08.08", tag: "お知らせ", title: "eギフト（配送）サービス（オンラインストア）をご利用いただいたお客様へメール誤送信のお知らせ" },
  { id: 3, date: "2025.07.31", tag: "お知らせ", title: "商品配送に関するお知らせ（オンラインストア）" },
];
