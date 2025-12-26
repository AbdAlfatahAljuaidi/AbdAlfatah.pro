import React from 'react';
// استيراد كافة الأيقونات من مجموعة Font Awesome
import { FaCode, FaCheckDouble, FaPenNib } from "react-icons/fa";

export const Services = () => {
  const services = [
    { 
      title: "Web development", 
      icon: <FaCode size={20}/>, 
      desc: "Providing customized web development solutions to achieve your digital goals with the highest quality and latest technologies" 
    },
    { 
      title: "Tester", 
      icon: <FaCheckDouble size={20}/>, 
      desc: "Ensuring seamless user experiences through rigorous testing and quality assurance protocols" 
    },
    { 
      title: "UI/UX", 
      icon: <FaPenNib size={20}/>, 
      desc: "Creating user-friendly interfaces with captivating designs to optimize user experience" 
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 pt-16 bg-white">
      {/* العنوان */}
      <h2 className="text-4xl font-bold text-[#052d54] mb-2 relative inline-block">
        Services
        <div className="w-14 h-1 bg-blue-500 mt-3"></div>
      </h2>

      {/* الوصف */}
      <p className="mt-6 text-gray-500 mb-12 max-w-6xl leading-relaxed">
        Welcome to our services page! We specialize in customized web development solutions to elevate your online presence. From website redesigns to e-commerce solutions, our experienced team delivers high-quality, user-friendly websites tailored to your business needs. Let's collaborate to bring your vision to life and achieve your online goals!
      </p>
      
      {/* شبكة الخدمات */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((s, i) => (
          <div key={i} className="flex items-start gap-5 group">
            {/* الدائرة الزرقاء مع الأيقونة */}
            <div className="bg-[#00aaff] p-4 rounded-full text-white flex-shrink-0 transition-all duration-300 group-hover:bg-[#052d54] group-hover:scale-110 shadow-lg">
              {s.icon}
            </div>
            
            {/* النصوص */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-[#00aaff] transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};