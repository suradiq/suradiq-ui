// pages/about.tsx
import Image from 'next/image';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center text-white" style={{ backgroundImage: 'url(/about_bg.jpg)' }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-40">
          <div className="text-center px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">قصتنا</h2>
            <p className="text-lg md:text-xl mb-6">
            بدأت منصتنا كفكرة بسيطة لتسهيل شراء وبيع الكتب في مجتمعنا العربي. مع مرور الوقت، تطورت فكرتنا إلى منصة شاملة تضم مئات الآلاف من الكتب في مختلف المجالات. نحن نؤمن بأن الكتب هي بوابة المعرفة، وأن الوصول إليها يجب أن يكون سهلاً وآمناً.
          </p>
            <a href="#about" className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700">اعرف المزيد</a>
          </div>
        </div>
      </section>

      {/* About Mission Section */}
      <section id="about" className="flex items-center justify-between px-6 py-24 bg-gray-100">
      <div className="w-1/2 flex justify-center items-center">
          <Image
            src="/mission.png"
            alt="Mission"
            width={500}
            height={280}
            className="rounded-lg"
          />
        </div>

        <div className="w-1/2 pr-12">
          <h2 className="text-3xl font-semibold mb-4">مهمتنا</h2>
          <p className="text-lg">مهمتنا هي تمكين المجتمع العربي من الوصول إلى أفضل الكتب عبر منصة سهلة الاستخدام، مع تعزيز الاتصال والمشاركة بين القراء والبائعين.</p>
        </div>
      </section>

      {/* About Vision Section */}
      <section className="flex items-center justify-between px-6 py-24 bg-white">
        <div className="w-1/2 order-2 md:order-1 pr-12">
          <h2 className="text-3xl font-semibold mb-4">رؤيتنا</h2>
          <p className="text-lg">نحن نرى مستقبلاً حيث يمكن للجميع في العالم العربي الاستفادة من المعرفة والكتب بطرق سهلة وآمنة، مما يعزز ثقافة القراءة والتعلم.</p>
        </div>
        <div className="w-1/2 order-1 md:order-2 flex justify-center items-center">
          <Image
            src="/vision.jpg"
            alt="Vision"
            width={500}
            height={280}
            className="rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
