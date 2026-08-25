import React, { useState } from "react";
import { FaHome, FaUser, FaFileAlt, FaServer, FaEnvelope, FaInstagram, FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes } from "react-icons/fa";
import Image from '../../assets/Sidebar.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 h-screen z-50">
      {/* زر القائمة على الشاشات الصغيرة */}
      <button
        className={`md:hidden fixed top-4 left-4 z-50 text-white ${isOpen ? "bg-transparent text-white" : "bg-black"} h-11 w-11 rounded-full text-2xl flex items-center justify-center transition-colors duration-300`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars className="text-xl mx-auto" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white flex flex-col justify-between p-6 overflow-y-auto
          transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out z-40
          md:translate-x-0 md:static md:flex
        `}
      >
        {/* الملف الشخصي والمعلومات العامة */}
        <div className="flex flex-col items-center text-center">
          <img 
            src={Image}
            alt="Profile" 
            className="w-28 h-28 rounded-full border-4 border-gray-800 mb-3 hover:border-blue-500 transition-all duration-500 object-cover shadow-md"
          />
          <h1 className="text-xl font-bold">Abd Alfatah Aljuaidi</h1>
          
          {/* الإضافة العامة: نبذة قصيرة احترافية */}
          <p className="text-xs text-gray-400 mt-1 leading-relaxed">
            Software Engineer & Full-Stack Web Developer building modern digital experiences.
          </p>

          {/* أيقونات السوشيال ميديا (تم تفعيلها وإضافة روابط حقيقية أو جاهزة) */}
          <div className="flex gap-3 mt-4 text-gray-400">
      
            <a href="https://www.linkedin.com/in/abd-alfatah-aljuaidi-1a184634b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FaLinkedin size={18} />
            </a>
           
            <a href="https://www.instagram.com/ab00d_aljuaidi?igsi=NHgyZWhtYno3ZGV0" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* روابط التنقل */}
        <nav className="mt-6 flex flex-col gap-3 text-gray-300 text-base">
          <a href="#home" onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-all text-blue-500 font-semibold">
            <FaHome /> Home
          </a>
          <a href="#about" onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-all">
            <FaUser /> About
          </a>
          <a href="#portfolio" onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-all">
            <FaFileAlt /> Portfolio
          </a>
          <a href="#service" onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-all">
            <FaServer /> Service
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-all">
            <FaEnvelope /> Contact
          </a>
        </nav>

        {/* حقوق النشر */}
        <div className="text-center text-xs text-gray-500 mt-6 border-t border-gray-800 pt-4">
          <p>© {new Date().getFullYear()} Copyright</p>
          <p className="mt-1">Designed by <span className="text-gray-400 font-medium">Abd Alfatah Aljuaidi</span></p>
        </div>
      </aside>

      {/* تغطية الشاشة عند فتح القائمة على الموبايل */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs md:hidden z-30 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Sidebar;