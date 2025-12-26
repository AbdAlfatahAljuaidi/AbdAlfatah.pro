import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skills = [
    { name: "HTML", level: 95 }, // حولنا النسب لأرقام لتسهيل الحساب
    { name: "Tailwind", level: 80 },
    { name: "CSS", level: 85 },
    { name: "React.Js", level: 80 },
    { name: "javascript", level: 80 },
    { name: "Node.js", level: 75 },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 font-sans text-left">
      {/* العنوان والوصف */}
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-[#052d54] mb-2 relative inline-block">
          Skills
          <div className="w-14 h-1 bg-blue-500 mt-3"></div>
        </h2>
        <p className="mt-6 text-gray-600 leading-relaxed text-lg">
          My website highlights a range of skills tailored for the digital landscape...
        </p>
      </div>

      {/* شبكة المهارات */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-800 uppercase text-sm tracking-wide">
                {skill.name}
              </span>
              {/* عرض النسبة المئوية */}
              <span className="font-bold text-gray-600 text-sm">
                {skill.level}%
              </span>
            </div>
            
            {/* خلفية شريط المهارة */}
            <div className="w-full bg-gray-100 h-5 relative">
              {/* الجزء الملون مع حركة Framer Motion */}
              <motion.div 
                className="bg-[#3498db] h-full"
                initial={{ width: 0 }} // القيمة البدائية
                whileInView={{ width: `${skill.level}%` }} // القيمة عند الرؤية
                viewport={{ once: true }} // الحركة تحدث مرة واحدة فقط
                transition={{ duration: 1.5, ease: "easeOut" }} // مدة الحركة
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;