 export interface Testimonial {
    id: number;
    name: string;
    role: string;
    quote: string;
    avatar: string;
  }
  
  export const testimonials: Testimonial[] = [
    {
        id: 67654,
        name: "أحمد الجابري",
        role: "مشتري وبائع",
        quote: "أفضل منصة لبيع وشراء الكتب. العملية كانت سهلة، وسرعان ما تم بيع كتبي لأشخاص مهتمين.",
        avatar: ""
      },
      {
        id: 87654,
        name: "سارة الخطيب",
        role: "مشتري",
        quote: "اكتشفت العديد من الكتب الرائعة بأسعار معقولة! منصة سهلة الاستخدام وآمنة للشراء.",
        avatar: "",
      },
      {
        id: 87532,
        name: "مريم الصافي",
        role: "بائعة",
        quote: "التجربة كانت رائعة، وأنا الآن أشتري وأبيع الكتب بكل سهولة. أنصح الجميع بتجربتها!",
        avatar: "",

      }
  ];