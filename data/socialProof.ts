export interface Statistic {
    id: string;
    number: string;
    label: string;
    prefix?: string;
    suffix?: string;
    icon?: string;
    description?: string;
  }
  
  export const stats: Statistic[] = [
    {
      id: "active-users",
      number: "100,000",
      label: "مستخدم نشط",
      suffix: "+",
      icon: "Users",
      description: "مستخدمون نشطون شهرياً على المنصة"
    },
    {
      id: "books-sold",
      number: "500,000",
      label: "كتاب تم بيعه",
      suffix: "+",
      icon: "BookOpen",
      description: "إجمالي الكتب المباعة عبر المنصة"
    },
    {
      id: "successful-deals",
      number: "10,000",
      label: "صفقة ناجحة",
      suffix: "+",
      icon: "CheckCircle",
      description: "صفقات تمت بنجاح بين البائعين والمشترين"
    },
    {
      id: "active-sellers",
      number: "500",
      label: "بائعون نشطون",
      suffix: "+",
      icon: "Store",
      description: "بائعون نشطون يقدمون كتباً متنوعة"
    }
  ];