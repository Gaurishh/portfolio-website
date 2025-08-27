import React, { useState, useEffect, useRef } from 'react';
import {
  AboutSection,
  ProfilesSection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
  CertificationsSection,
  ContactSection,
  Sidebar,
  GlobalStyles
} from '../components';
import { sections } from '../components/constants';

// Main App Component
export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobile, setIsMobile] = useState(false);
  const sectionRefs = useRef({});
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      
      // Find which section is currently in view
      const currentSection = Object.entries(sectionRefs.current).find(([key, ref]) => {
        if (!ref) return false;
        const rect = ref.getBoundingClientRect();
        
        // Special handling for the last section (contact)
        if (key === 'contact') {
          return rect.top <= 100;
        }
        
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection && currentSection[0] !== activeSection) {
        setActiveSection(currentSection[0]);
      }
    };

    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [activeSection]);

  // Throttle function for performance
  const throttle = (func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  };

  // Smooth scroll to section
  const scrollToSection = (sectionKey) => {
    setIsScrolling(true);
    
    const targetRef = sectionRefs.current[sectionKey];
    if (targetRef) {
      targetRef.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // Reset scrolling flag after animation
    setTimeout(() => setIsScrolling(false), 1000);
  };

  // Set ref for each section
  const setSectionRef = (key, ref) => {
    sectionRefs.current[key] = ref;
  };

  return (
    <div className="bg-gray-900 text-gray-200 font-sans antialiased">
      <GlobalStyles />
      <div className="flex flex-col md:flex-row min-h-screen">
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
          sections={sections} 
          isMobile={isMobile}
          onSectionClick={scrollToSection}
        />
        <main className="flex-1 md:ml-64 lg:ml-72 transition-all duration-300">
          <div className="space-y-0 w-full">
            <div ref={(ref) => setSectionRef('about', ref)} className="min-h-screen flex items-center w-full">
              <AboutSection />
            </div>
            <div ref={(ref) => setSectionRef('profiles', ref)} className="pt-20">
              <ProfilesSection />
            </div>
            <div ref={(ref) => setSectionRef('experience', ref)} className="pt-20">
              <ExperienceSection />
            </div>
            <div ref={(ref) => setSectionRef('projects', ref)} className="pt-20">
              <ProjectsSection />
            </div>

            <div ref={(ref) => setSectionRef('skills', ref)} className="pt-20">
              <SkillsSection />
            </div>
            <div ref={(ref) => setSectionRef('certifications', ref)} className="pt-20">
              <CertificationsSection />
            </div>
            <div ref={(ref) => setSectionRef('contact', ref)} className="pt-20 pb-32">
              <ContactSection />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
