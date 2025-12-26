import React, { useState } from "react";
import { FaHome, FaUser, FaFileAlt, FaServer, FaEnvelope, FaInstagram, FaFacebook, FaTwitter, FaSkype, FaBars, FaTimes } from "react-icons/fa";
import Image from '../../assets/Sidebar.png'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 h-screen z-50">
      {/* زر القائمة على الشاشات الصغيرة */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white flex flex-col justify-between p-6
          transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out z-40
          md:translate-x-0 md:static md:flex
        `}
      >
        {/* الملف الشخصي */}
        <div className="flex flex-col items-center">
          <img 
            src={Image}
            alt="Profile" 
            className="w-32 h-32 rounded-full border-4 border-gray-800 mb-4 hover:border-white transition-all duration-500"
          />
          <h1 className="text-xl font-bold text-center">Abd Alfatah Aljuaidi</h1>

          {/* أيقونات السوشيال */}
          {/* <div className="flex gap-3 mt-3">
            <a href="#" className="hover:text-blue-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-500"><FaFacebook /></a>
            <a href="#" className="hover:text-blue-500"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-500"><FaSkype /></a>
          </div> */}
        </div>

        {/* روابط التنقل */}
        <nav className="mt-10 flex flex-col gap-4 text-gray-300 text-lg">
          <a href="#home" className="flex items-center gap-2 text-blue-500 font-semibold">
            <FaHome /> Home
          </a>
          <a href="#about" className="flex items-center gap-2 hover:text-blue-500">
            <FaUser /> About
          </a>
          <a href="#portfolio" className="flex items-center gap-2 hover:text-blue-500">
            <FaFileAlt /> Portfolio
          </a>
          <a href="#service" className="flex items-center gap-2 hover:text-blue-500">
            <FaServer /> Service
          </a>
          <a href="#contact" className="flex items-center gap-2 hover:text-blue-500">
            <FaEnvelope /> Contact
          </a>
        </nav>

        {/* حقوق النشر */}
        <div className="text-center text-sm mt-10">
          <p>© Copyright</p>
          <p>Designed by Abd Alfatah Aljuaidi</p>
        </div>
      </aside>

      {/* تغطية الشاشة عند فتح القائمة */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Sidebar;
