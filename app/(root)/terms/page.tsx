// pages/terms.tsx

const Terms = () => {
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg p-8">
        {/* Header */}
        <header className="text-right mb-8">
          <h1 className="text-4xl font-semibold text-gray-900">الشروط والأحكام</h1>
          <p className="text-lg text-gray-600 mt-2">
            يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام منصتنا.
          </p>
        </header>

        {/* Section 1 - Introduction */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">مقدمة</h2>
          <p className="text-lg text-gray-700 mt-4">
            هذه الشروط والأحكام هي اتفاقية قانونية بينك وبين منصتنا، وتهدف إلى
            تنظيم استخدامك للخدمات المقدمة. باستخدامك للموقع، فإنك توافق على هذه
            الشروط والأحكام.
          </p>
        </section>

        {/* Section 2 - User Responsibilities */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">مسؤوليات المستخدم</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
            <li>يجب عليك استخدام المنصة بما يتوافق مع القوانين المحلية والدولية.</li>
            <li>يجب أن تكون المعلومات المقدمة دقيقة وصحيحة.</li>
            <li>لا يجوز لك استخدام المنصة في أنشطة غير قانونية أو ضارة.</li>
          </ul>
        </section>

        {/* Section 3 - Privacy and Data Protection */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">الخصوصية وحماية البيانات</h2>
          <p className="text-lg text-gray-700 mt-4">
            نحن نولي أهمية كبيرة لخصوصيتك. سيتم جمع ومعالجة البيانات الشخصية فقط وفقًا
            للسياسات المعتمدة لدينا. للمزيد من المعلومات حول كيفية جمع بياناتك
            الشخصية واستخدامها، يرجى الاطلاع على سياسة الخصوصية.
          </p>
        </section>

        {/* Section 4 - Terms of Sale */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">شروط البيع</h2>
          <p className="text-lg text-gray-700 mt-4">
            عند شراء أي منتج من منصتنا، فإنك توافق على الشروط التالية:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
            <li>جميع المبيعات نهائية ولا يمكن إلغاءها بعد إتمام الدفع.</li>
            <li>يجب دفع المبالغ المطلوبة بالكامل قبل شحن أي منتج.</li>
            <li>يحق للمنصة رفض أو إلغاء أي طلب إذا تم اكتشاف أن المعلومات المقدمة غير صحيحة.</li>
          </ul>
        </section>

        {/* Section 5 - Limitation of Liability */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">تحديد المسؤولية</h2>
          <p className="text-lg text-gray-700 mt-4">
            لا تتحمل منصتنا أي مسؤولية عن الأضرار المباشرة أو غير المباشرة التي قد
            تنشأ نتيجة لاستخدامك للخدمات أو المنتجات المقدمة.
          </p>
        </section>

        {/* Section 6 - Termination of Access */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">إنهاء الوصول</h2>
          <p className="text-lg text-gray-700 mt-4">
            نحتفظ بالحق في إنهاء أو تعليق الوصول إلى خدماتنا في أي وقت ودون إشعار
            مسبق إذا تم خرق هذه الشروط.
          </p>
        </section>

        {/* Section 7 - Governing Law */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">القانون الحاكم</h2>
          <p className="text-lg text-gray-700 mt-4">
            تخضع هذه الشروط والأحكام للقوانين المعمول بها في الجزائر.
          </p>
        </section>

        {/* Section 8 - Contact Us */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">اتصل بنا</h2>
          <p className="text-lg text-gray-700 mt-4">
            إذا كانت لديك أي أسئلة حول هذه الشروط والأحكام، يمكنك التواصل معنا عبر
            البريد الإلكتروني: 
            <a href="#" className="text-teal-600">support@suradiq.com</a>
          </p>
        </section>
      </div>
    </div>
  )
}

export default Terms
