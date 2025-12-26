import React from 'react';
// استيراد الأيقونات الجديدة
import { IoLocationOutline, IoMailOutline, IoCallOutline } from "react-icons/io5";

export const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 font-sans" id='contact'>
      {/* العنوان الرئيسي مع الخط الأزرق السفلي */}
      <h2 className="text-4xl font-bold text-[#052d54] mb-2 relative inline-block">
        Contact
        <div className="w-14 h-1 bg-blue-500 mt-3"></div>
      </h2>
      <p className="mt-6 text-gray-500 mb-12 text-lg">
        Get in touch with us! Whether you have questions, feedback, or want to discuss a potential project, we're here to help. Fill out the form below, and we'll get back to you as soon as possible. Your satisfaction is our priority!
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* العمود الأيسر: معلومات التواصل والخريطة */}
        <div className="lg:w-1/3 space-y-8 bg-white p-8 shadow-[0_0_20px_rgba(0,0,0,0.05)] border-t-4 border-[#3498db]">
          <ContactInfo 
            icon={<IoLocationOutline size={24} />} 
            title="Location:" 
            text="Amman Jordan" 
          />
          <ContactInfo 
            icon={<IoMailOutline size={24} />} 
            title="Email:" 
            text="abdalfatah.aljuaidi@gmail.com" 
          />
          <ContactInfo 
            icon={<IoCallOutline size={24} />} 
            title="Call:" 
            text="+962 782407533" 
          />
          
          {/* حاوية الخريطة */}
          <div className="w-full h-64 bg-gray-100 mt-6 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-500">
             <iframe 
               title="map"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216594.252044813!2d35.707738!3d31.9515694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b590213075011%3A0x24a049947f7a280!2sAmman!5e0!3m2!1sen!2sjo!4v1625000000000" 
               className="w-full h-full border-0"
               allowFullScreen="" 
               loading="lazy"
             ></iframe>
          </div>
        </div>

        {/* العمود الأيمن: نموذج المراسلة */}
        <div className="lg:w-2/3 bg-white p-8 shadow-[0_0_20px_rgba(0,0,0,0.05)] border-t-4 border-[#3498db]">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Your Name:" type="text" />
              <InputField label="Your Email:" type="email" />
            </div>
            <InputField label="Subject:" type="text" />
            <div>
              <label className="block text-gray-700 mb-2 text-sm font-medium">Message</label>
              <textarea 
                className="w-full border border-gray-200 p-3 h-44 focus:outline-none focus:ring-1 focus:ring-[#3498db] transition-all"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <div className="text-center">
              <button 
                type="submit"
                className="bg-[#3498db] text-white px-12 py-3 rounded-md hover:bg-[#2980b9] transition-colors shadow-md font-semibold"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// مكون عرض معلومات الاتصال
const ContactInfo = ({ icon, title, text }) => (
  <div className="flex items-start gap-4 group">
    <div className="bg-[#eef7ff] p-3 rounded-full text-[#3498db] group-hover:bg-[#3498db] group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-[#052d54] text-xl leading-tight">{title}</h4>
      <p className="text-gray-500 text-sm mt-1">{text}</p>
    </div>
  </div>
);

// مكون حقل الإدخال
const InputField = ({ label, type }) => (
  <div className="w-full">
    <label className="block text-gray-700 mb-2 text-sm font-medium">{label}</label>
    <input 
      type={type} 
      className="w-full border border-gray-200 p-2.5 focus:outline-none focus:ring-1 focus:ring-[#3498db] transition-all" 
    />
  </div>
);