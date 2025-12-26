import React from 'react';

const ResumeSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 font-sans text-left">
      {/* العنوان الرئيسي */}
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-[#052d54] mb-2 relative inline-block">
          Resume
          <div className="w-14 h-1 bg-blue-500 mt-3"></div>
        </h2>
        <p className="mt-6 text-gray-600 leading-relaxed max-w-4xl">
          My programming journey began with curiosity about website development. Learning my first language fueled a passion for problem-solving and creativity. I see programming as the language of the future and am committed to continuous improvement in this dynamic field.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* العمود الأول: Summary & Certificates */}
        <div className="space-y-10">
          {/* Summary */}
          <div className="relative pl-8 border-l-2 border-[#052d54]">
            <div className="absolute w-4 h-4 bg-white border-2 border-[#052d54] rounded-full -left-[9px] top-0"></div>
            <h3 className="text-2xl font-bold text-[#052d54] uppercase mb-4">Summary</h3>
            <div className="space-y-2">
              <h4 className="text-xl font-bold text-gray-800">Abd Alfatah</h4>
              <p className="text-gray-600 italic mb-4">
                I major in software engineering. I have developed several websites as projects in the past. Currently, I am striving to gain more experience and knowledge in web development.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 ml-2">
                <li>Amman Jordan</li>
                <li>+962 782407533</li>
                <li>abdalfatah.aljuaidi@gmail.com</li>
              </ul>
            </div>
          </div>

          {/* Certificates */}
          <div className="relative pl-8 border-l-2 border-[#052d54]">
            <div className="absolute w-4 h-4 bg-white border-2 border-[#052d54] rounded-full -left-[9px] top-0"></div>
            <h3 className="text-2xl font-bold text-[#052d54] uppercase mb-6">Certificates</h3>
            
            <div className="space-y-8">
              <CertificateItem title="Application Developer" company="the hope international company" date="Feb-2022" />
              <CertificateItem title="BBC Course" company="BBC english center 12 level" date="Apr-2021" />
              <CertificateItem title="Unity Gaming" company="the hope international company" date="May-2021" />
              <CertificateItem title="communication skills" company="Amman arab university" date="July-2022" />
            </div>
          </div>
        </div>

        {/* العمود الثاني: Education & Experience */}
        <div className="space-y-10">
          {/* Education */}
          <div className="relative pl-8 border-l-2 border-[#052d54]">
            <div className="absolute w-4 h-4 bg-white border-2 border-[#052d54] rounded-full -left-[9px] top-0"></div>
            <h3 className="text-2xl font-bold text-[#052d54] uppercase mb-4">Bachelor OF Software Engineer</h3>
            <span className="inline-block bg-blue-50 text-[#052d54] px-3 py-1 text-xs font-bold mb-4">2020-2024</span>
            <p className="text-gray-600 leading-relaxed">
              As a software engineering student at Amman Arab University, I'm dedicated to enhancing my web development skills. With experience in building multiple websites, I'm passionate about crafting seamless digital experiences. Through my studies, I'm equipped to excel in this dynamic field.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="relative pl-8 border-l-2 border-[#052d54]">
            <div className="absolute w-4 h-4 bg-white border-2 border-[#052d54] rounded-full -left-[9px] top-0"></div>
            <h3 className="text-2xl font-bold text-[#052d54] uppercase mb-6">Professional Experience</h3>
            
            <div className="space-y-8">
              <ExperienceItem title="Full Insight Technology Solution company" desc="I worked at Full Insight Technology Solution for a year" date="2024" />
              <ExperienceItem title="University of Jordan center" desc="I worked at the University of Jordan Gateway tele-marketing center" date="2023" />
              <ExperienceItem title="sales representative" desc="I worked as a daily sales representative" date="2023" />
              <ExperienceItem title="training" desc="I trained at Hope International Company in the field of web development" date="2024" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// مكون فرعي للشهادات
const CertificateItem = ({ title, company, date }) => (
  <div>
    <h4 className="font-bold text-gray-800 uppercase tracking-tight">{title}</h4>
    <p className="text-sm text-gray-500 italic">Certificates of {title} {company && `, ${company}`}</p>
    <span className="inline-block bg-blue-50 text-[#052d54] px-3 py-1 text-xs font-bold mt-2">{date}</span>
  </div>
);

// مكون فرعي للخبرات
const ExperienceItem = ({ title, desc, date }) => (
  <div>
    <h4 className="font-bold text-gray-800 uppercase tracking-tight">{title}</h4>
    <p className="text-sm text-gray-600 mt-1">{desc}</p>
    <span className="inline-block bg-blue-50 text-[#052d54] px-3 py-1 text-xs font-bold mt-2">{date}</span>
  </div>
);

export default ResumeSection;