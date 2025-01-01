export interface HowItWorks {
    id: number;
    icon: string;
    title: string;
    description: string;
  }

export const steps: HowItWorks[] = [
    {
        id: 76543,
      icon: "UserPlus",
      title: "أنشئ حسابك",
      description: "سجل عضوية مجانية وأكمل ملفك الشخصي"
    },
    {
        id: 63236,
      icon: "Users",
      title: "انضم للمجتمع",
      description: "شارك في نوادي القراءة والنقاشات"
    },
    {
        id: 23247,
      icon: "BookOpen",
      title: "شارك تجاربك",
      description: "اكتب مراجعات وقيّم الكتب التي قرأتها"
    },
    {
        id: 98985,
      icon: "ShoppingBag",
      title: "تبادل الكتب",
      description: "اعرض كتبك للبيع أو ابحث عن كتب تهمك"
    }
  ];