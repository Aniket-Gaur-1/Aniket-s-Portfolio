import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import StackGallery from './components/StackGallery';
import Projects from './components/Projects';
import Blog from './components/Blog';
import BlogPage from './components/BlogPage';
import BlogDetail from './components/BlogDetail';
import Skills from './components/Skills';
import EducationSection from './components/Education';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const ScrollToHash: React.FC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      if (pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    const id = hash.replace('#', '');
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 0);
  }, [hash, pathname]);

  return null;
};

const HomePage: React.FC = () => {
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
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <section className="reveal"><StackGallery /></section>
        <section className="reveal"><Projects /></section>
        <section className="reveal"><Blog /></section>
        <section className="reveal"><Skills /></section>
        <section className="reveal"><EducationSection /></section>
      </main>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative min-h-screen">
        <CustomCursor />
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={
            <>
              <Navbar />
              <BlogPage />
              <Footer />
            </>
          } />
          <Route
    path="/blog/:id"
    element={
      <>
        <Navbar />
        <BlogDetail />
        <Footer />
      </>
    }
  />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
