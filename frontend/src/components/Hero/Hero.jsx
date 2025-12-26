import React from "react";
import { Typewriter } from "react-simple-typewriter";
import HeroImage from '../../assets/Hero.jpeg';

const Hero = () => {
  return (
    <section
    id="home"
    className="relative w-full h-screen flex items-center justify-center text-center bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${HeroImage})`,
      // إضافة هذه الأسطر لضمان احتواء الصورة بشكل أفضل
      backgroundSize: 'cover', 
      backgroundAttachment: 'scroll' // بدلاً من fixed
    }}
  >
      {/* تراكب داكن لتحسين وضوح النص */}
      <div className="absolute inset-0 bg-black/60" ></div>

      {/* المحتوى */}
      <div className="relative z-10 text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          I'm <span className="text-blue-500">Abd Alfatah Aljuaidi</span>
        </h1>
        
        <p className="text-2xl md:text-4xl font-semibold">
          I'm a {" "}
          <span className="text-blue-400 border-b-2 border-blue-400">
            <Typewriter
              words={["Full Stack Developer", "Designer", "Tester"]}
              loop={0} // 0 تعني تكرار لا نهائي
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </p>
      </div>
    </section>
  );
};

export default Hero;