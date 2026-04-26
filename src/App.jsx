import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(t => t === 'dark' ? 'light' : 'dark');
    document.documentElement.classList.toggle('dark');
    document.body.style.backgroundColor = theme === 'dark' ? '#f8f5f0' : '#080808';
    document.body.style.color = theme === 'dark' ? '#1a1a1a' : '#e5e5e5';
  };

  return (
    <div className={`noise-overlay ${theme}`}>
      <Cursor />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
        </div>

        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </motion.main>
    </div>
  );
}
