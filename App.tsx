
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import StackGallery from './components/StackGallery';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Skills from './components/Skills';
import EducationSection from './components/Education';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <Navbar />
      <main>
        {/* Hero section handles its own internal reveal animations */}
        <Hero />
        <About />
        <section className="reveal"><StackGallery /></section>
        <section className="reveal"><Projects /></section>
        <section className="reveal"><Blog /></section>
        <section className="reveal"><Skills /></section>
        <section className="reveal"><EducationSection /></section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
