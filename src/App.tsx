/**
 * ============================================================================
 * AI AGENT DEVELOPER PORTFOLIO
 * ============================================================================
 * 
 * Copyright (c) 2026 AI Agent Developer
 * All rights reserved.
 * 
 * This portfolio website and its source code are the exclusive property 
 * of the author. Unauthorized copying, modification, or distribution 
 * is strictly prohibited without written permission.
 * 
 * Original design and development by: AI Agent Developer
 * Portfolio URL: https://ox7jkt6hwzvys.ok.kimi.link
 * 
 * For licensing inquiries, contact: hello@aiagent.dev
 * 
 * ============================================================================
 */

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

import './App.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f9fa]">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
