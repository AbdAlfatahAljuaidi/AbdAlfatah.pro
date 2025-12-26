import { useState } from 'react'

import Sidebar from './components/Sidebar/Sidebar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import FactsSection from './components/Fact/Fact'
import SkillsSection from './components/Skills/Skills'
import ResumeSection from './components/Resume/Resume'
import PortfolioSection from './components/Portfolio/Portfolio'
import { Services } from './components/Services/Services'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'

function App() {
 

  return (
    <>
    <div className="flex">
  <Sidebar />
  <main className="flex-1 md:ml-[200px]">  
    <Hero />
    <About />
    <div className='md:ml-[80px]'>
    <FactsSection />
 <SkillsSection />
 <ResumeSection />
 <PortfolioSection />
 <Services />
 <Contact />
    </div>
 <Footer />
  
  </main>
</div>

    </>
  )
}

export default App
