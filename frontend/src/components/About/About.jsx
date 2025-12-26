import React from "react";
import Image from '../../assets/About.jpeg'
import { MdChevronRight } from "react-icons/md"; // استخدام أيقونة بدلاً من النص العادي

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-[#0b2c5d]">About</h2>
          <div className="w-14 h-1 bg-blue-500 mt-3"></div>
        </div>

        {/* Intro */}
        <p className="text-gray-600 max-w-full mb-10 leading-relaxed">
          Welcome to My website, the home of my work and personal showcase that
          summarizes my journey as a software engineer in the world of the web.
          The goal of this website is to present samples of my work and projects,
          which reflect my abilities and skills in web software development.
        </p>

        {/* Content */}
        {/* تقليل gap من 12 إلى 6 أو 8 لتقريب النص من الصورة */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

          {/* Image - أخذ 4 أعمدة من أصل 12 */}
          <div className="md:col-span-4">
            <img
              src={Image}
              alt="Profile"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Info - أخذ 8 أعمدة من أصل 12 */}
          <div className="md:col-span-8 flex flex-col justify-start">
            <h3 className="text-3xl font-bold text-[#0b2c5d] mb-4">
              Full Stack Developer.
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed italic">
              Passionate about blending design and development, I specialize in
              creating visually stunning and user-friendly websites. Let's
              build something remarkable together.
            </p>

            {/* Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 text-gray-700">
              <DetailItem label="Website" value="Abd Alfattah Aljuaidi" />
              <DetailItem label="Degree" value="Bachelor OF Software Engineer" />
              <DetailItem label="Phone" value="+962 7824033" />
              <DetailItem label="Field" value="Full-Stack developer" />
              <DetailItem label="City" value="Amman Jordan" />
              <DetailItem label="Experience" value="React.js - Node.js" />
              <DetailItem label="Email" value="abdalfattah.aljuaidi@gmail.com" />
              <DetailItem label="Freelance" value="Available" />
            </div>
          </div>
        </div>

        {/* Bottom paragraph */}
        <p className="text-gray-600 mt-10 leading-relaxed">
        With a passion for crafting seamless digital experiences, I blend
          creativity with technical expertise to design and develop captivating
          websites and user interfaces. My goal is to create intuitive and
          visually appealing solutions that not only meet but exceed user
          expectations. From wireframing to front-end development, I strive for
          excellence in every aspect of the design and development process,
          ensuring user satisfaction and engagement. Let's collaborate to bring
          your ideas to life and elevate your online presence to new heights.
        </p>

      </div>
    </section>
  );
};

// مكون فرعي لتنظيم الأسطر وتقليل تكرار الكود
const DetailItem = ({ label, value }) => (
  <div className="flex items-center gap-2">
    <MdChevronRight className="text-blue-500 text-xl flex-shrink-0" />
    <span className="font-bold min-w-[90px]">{label}:</span>
    <span className="text-gray-600">{value}</span>
  </div>
);

export default About;