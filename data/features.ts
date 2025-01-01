export interface Features {
    id: number;
    icon: string;
    title: string;
    description: string;
  }

export const features: Features[] = [
    {
        id: 67632,
        icon: "Users",
        title: "مجتمع قراء نشط",
        description: "تواصل مع محبي القراءة ومشاركة الخبرات والتجارب",
    },
      {
        id: 97654,
        icon: "MessageCircle",
        title: "نوادي القراءة",
        description: "انضم لنوادي القراءة وشارك في النقاشات الأدبية"
      },
      {
        id: 76548,
        icon: "BookMarked",
        title: "مراجعات وتقييمات",
        description: "اكتشف آراء القراء وشارك تقييمك للكتب"
      },
      {
        id: 97643,
        icon: "BarChart2",
        title: "تتبع القراءات",
        description: "سجل وتتبع قراءاتك وأهدافك القرائية"
      },
      {
        id: 78564,
        icon: "BookOpen",
        title: "استكشاف الكتب",
        description: "اكتشف كتباً جديدة بناءً على اهتماماتك"
      },
      {
        id: 87636,
        icon: "ShoppingBag",
        title: "سوق الكتب",
        description: "تواصل مباشرة مع البائعين والمشترين من مجتمع القراء"
      }
  ];