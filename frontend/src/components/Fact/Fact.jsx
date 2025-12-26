import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { IoHappyOutline, IoTimeOutline } from "react-icons/io5";
import { BsListCheck, BsCupHot } from "react-icons/bs";

const FactsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    {
      id: 1,
      number: 5,
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
      ref={ref} 
      className="max-w-7xl mx-auto px-6 pb-12 font-sans text-left bg-white"
    >
      <div className="">
        <h2 className="text-4xl font-bold text-[#052d54] mb-2 relative inline-block">
          Facts
          <div className="w-14 h-1 bg-blue-500 mt-3"></div>
        </h2>
        
        {/* النص المضاف والمحدث */}
        <p className="mt-5 text-gray-600 leading-relaxed text-[16px] max-w-6xl">
        My website is a reflection of my creative journey and technical expertise. It serves as a dynamic canvas where innovative design intersects with seamless development, offering visitors a comprehensive insight into my capabilities. From elegant user interfaces to robust backend solutions, every aspect of my work is meticulously crafted to deliver exceptional results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-9">
        {stats.map((item) => (
          <div key={item.id} className="flex items-start gap-5 group">
            <div className="flex-shrink-0 pt-1 transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </div>
            
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-gray-900 leading-none">
                {inView ? (
                  <CountUp 
                    start={0} 
                    end={item.number} 
                    duration={2.5} 
                    separator="," 
                  />
                ) : (
                  0
                )}
              </span>
              <span className="text-[19px] font-bold text-[#333] mt-2 leading-tight group-hover:text-[#00aaff] transition-colors">
                {item.label}
              </span>
              <span className="text-[13px] text-gray-400 mt-1 font-medium italic">
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