import React, { useState } from 'react';
import Image1 from '../../assets/site1.png'; // Social Network
import Image2 from '../../assets/site2.png'; // Dashboard
import Image3 from '../../assets/site3.png'; // Blog
import Image4 from '../../assets/site4.png'; // Kasper
import Image5 from '../../assets/site5.png'; // Leon
import Image6 from '../../assets/site6.png'; // Ocean
import Image7 from '../../assets/site7.png'; // Optibyte
import Image8 from '../../assets/site8.png'; // Resume
import Image9 from '../../assets/site9.png'; // Task To do 

const PortfolioSection = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    { id: 1, category: 'fullstack', title: "Social Network", image: Image1, link: "https://socialnetwork-6vdw.onrender.com/Home" },
    { id: 2, category: 'ui', title: "Admin Dashboard", image: Image2, link: "https://abdalfatahaljuaidi.github.io/Dashboard/" },
    { id: 3, category: 'ui', title: "Personal Blog", image: Image3, link: "https://abdalfatahaljuaidi.github.io/Blog/" },
    { id: 4, category: 'ui', title: "Kasper Template", image: Image4, link: "https://abdalfatahaljuaidi.github.io/Kasper/" },
    { id: 5, category: 'ui', title: "Leon Agency", image: Image5, link: "https://abdalfatahaljuaidi.github.io/Leon/" },
    { id: 6, category: 'modern', title: "Ocean App", image: Image6, link: "https://ocean-ivory-six.vercel.app/" },
    { id: 7, category: 'fullstack', title: "Optibyte System", image: Image7, link: "https://optibyte.onrender.com" },
    { id: 8, category: 'fullstack', title: "Professional Resume", image: Image8, link: "https://resume-sr1q.onrender.com/" },
    { id: 9, category: 'fullstack', title: "Task to do", image: Image9, link: "https://note-app-nine-cyan.vercel.app/" },
  ];

  // تصفية المشاريع بناءً على التصنيف المختار
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack (React/Node)' },
    { id: 'modern', label: 'Modern Web (Next.js)' },
    { id: 'ui', label: 'Frontend UI (HTML/CSS)' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 font-sans text-left" id='portfolio'>
      {/* Title */}
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-[#052d54] mb-2 relative inline-block">
          Portfolio
          <div className="w-14 h-1 bg-blue-500 mt-3"></div>
        </h2>
        <p className="mt-6 text-gray-600 leading-relaxed text-lg max-w-5xl">
          Explore my diverse collection of projects, categorized by the technologies used. 
          From full-stack applications with Node.js to high-performance Next.js interfaces.
        </p>
      </div>

      {/* Filter Buttons (Tabs) */}
      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all border-2 
              ${filter === cat.id 
                ? 'bg-[#3498db] border-[#3498db] text-white' 
                : 'bg-transparent border-gray-200 text-gray-500 hover:border-[#3498db] hover:text-[#3498db]'}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="group relative bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* Image Container */}
            <div className="aspect-video w-full overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-[#052d54]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold text-lg">{project.title}</span>
              </div>
            </div>

            {/* Visit Button */}
            <a 
              href={project.link} 
              target='_blank' 
              rel="noreferrer"
              className="block w-full py-4 bg-[#3498db] text-white text-center font-bold hover:bg-[#2980b9] transition-colors uppercase tracking-wider text-sm"
            >
              Visit Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;