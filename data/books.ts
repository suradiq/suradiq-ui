export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  category: string;
  language: string;
  condition: string;
  coverImg: string;
  description: string;
  publishYear: number;
  publisher: string;
  pages: number;
}

export const books: Book[] = [
  {
    id: 1,
    title: "العَبَرات",
    author: "مصطفى لطفي المنفلوطي",
    price: 45,
    category: "أدب عربي",
    language: "العربية",
    condition: "جديد",
    coverImg: "/images/books/abarat.jpg",
    description: "مجموعة قصصية تتناول قضايا إنسانية واجتماعية بأسلوب أدبي رفيع",
    publishYear: 1915,
    publisher: "دار الشروق",
    pages: 224
  },
  {
    id: 2,
    title: "خواطر شاب",
    author: "أدهم شرقاوي",
    price: 55,
    category: "تنمية ذاتية",
    language: "العربية",
    condition: "جديد",
    coverImg: "/images/books/khawater-shab.jpg",
    description: "مجموعة من الخواطر والتأملات في الحياة والمجتمع والعلاقات الإنسانية",
    publishYear: 2020,
    publisher: "دار نوفا بلس",
    pages: 180
  },
  {
    id: 3,
    title: "أنت لي",
    author: "سارة النمس",
    price: 40,
    category: "رواية",
    language: "العربية",
    condition: "جديد",
    coverImg: "/images/books/anta-lee.jpg",
    description: "رواية رومانسية تتناول قصة حب تتخللها صراعات وتحديات اجتماعية",
    publishYear: 2022,
    publisher: "دار الرواية العربية",
    pages: 320
  },
  {
    id: 4,
    title: "لأنك الله",
    author: "إسلام جمال",
    price: 35,
    category: "ديني",
    language: "العربية",
    condition: "جديد",
    coverImg: "/images/books/laanak-allah.jpg",
    description: "كتاب يتناول العلاقة الروحانية بين العبد وربه بأسلوب معاصر",
    publishYear: 2021,
    publisher: "دار الحضارة",
    pages: 192
  }
];