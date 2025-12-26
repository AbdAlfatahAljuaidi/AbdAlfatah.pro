import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { IoHappyOutline, IoTimeOutline } from "react-icons/io5";
import { BsListCheck, BsCupHot } from "react-icons/bs";

const FactsSection = () => {
  // استخدام الـ Hook لمراقبة متى يظهر القسم على الشاشة
  const { ref, inView } = useInView({
    triggerOnce: true, // يبدأ العد مرة واحدة فقط عند الظهور الأول
    threshold: 0.2,    // يبدأ عندما يظهر 20% من القسم على الشاشة
  });

  const stats = [
    {
      id: 1,
      number: 5, // حولناها لأرقام بدلاً من نصوص للعمل مع العداد
      label: "Happy Clients",
      subLabel: "Our Aims",
      icon: <IoHappyOutline className="text-[44px] text-[#00aaff]" />,
    },
    {
      id: 2,
      number: 25,
      label: "Projects",
      subLabel: "accomplished",
      icon: <BsListCheck className="text-[44px] text-[#00aaff]" />,
    },
    {
      id: 3,
      number: 100,
      label: "Hours Of Support",
      subLabel: "Help",
      icon: <IoTimeOutline className="text-[44px] text-[#00aaff]" />,
    },
    {
      id: 4,
      number: 150,
      label: "Coffee Cups",
      subLabel: "Done",
      icon: <BsCupHot className="text-[44px] text-[#00aaff]" />,
    },
  ];

  return (
    <section 
      ref={ref} // نربط المرجع هنا لمراقبة القسم
      className="max-w-7xl mx-auto px-6 pb-12 font-sans text-left bg-white"
    >
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-[#052d54] mb-2 relative inline-block">
          Facts
          <div className="w-14 h-1 bg-blue-500 mt-3"></div>
        </h2>
        <p className="mt-8 text-gray-600 leading-relaxed text-[16px]">
          My website is a reflection of my creative journey and technical expertise. It serves as a dynamic canvas where innovative design intersects with seamless development...
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
        {stats.map((item) => (
          <div key={item.id} className="flex items-start gap-5">
            <div className="flex-shrink-0 pt-1">
              {item.icon}
            </div>
            
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-gray-900 leading-none">
                {/* استخدام CountUp مع شرط الظهور */}
                {inView ? (
                  <CountUp 
                    start={0} 
                    end={item.number} 
                    duration={2.5} // مدة الحركة بالثواني
                    separator="," 
                  />
                ) : (
                  0
                )}
              </span>
              <span className="text-[19px] font-bold text-[#333] mt-2 leading-tight">
                {item.label}
              </span>
              <span className="text-[13px] text-gray-400 mt-1 font-medium">
                {item.subLabel}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FactsSection;