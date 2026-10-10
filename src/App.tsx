import { useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero, About, Skills, Services, ProjectsSection, ExperienceSection, Contact, Footer } from './components/Sections';

function App() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-accent origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <ProjectsSection />
        <ExperienceSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
