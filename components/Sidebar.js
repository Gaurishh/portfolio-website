import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Code, Mail } from 'lucide-react';

const Sidebar = ({ activeSection, setActiveSection, sections, isMobile, onSectionClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevActiveSection, setPrevActiveSection] = useState(activeSection);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track previous active section for animation direction
  useEffect(() => {
    setPrevActiveSection(activeSection);
  }, [activeSection]);

  // Track scroll progress
  useEffect(() => {
    // Only run on client side to prevent hydration mismatch
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(currentProgress);
    };

    // Initial calculation after component mounts
    setTimeout(() => {
      handleScroll();
    }, 0);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    if (onSectionClick) {
      onSectionClick(section);
    } else {
      setActiveSection(section);
    }
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const SidebarContent = () => (
     <div className="bg-gray-950/80 backdrop-blur-md border-r border-gray-800 flex flex-col h-full w-64 lg:w-72 p-6">
        {/* Scroll Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-800">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 ease-out"
            style={{ width: typeof window !== 'undefined' ? `${scrollProgress}%` : '0%' }}
          />
        </div>
        
        <div className="mt-2">
          <h1 className="text-3xl font-bold text-white">Gaurish Sood</h1>
          <p className="text-md text-gray-400 mt-1">Software Engineer</p>
        </div>

        <nav className="mt-12 flex-grow">
          <ul>
            {Object.entries(sections).map(([key, { label, icon: Icon }]) => (
              <li key={key} className="mb-2">
                <a
                  href={`#${key}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(key);
                  }}
                  className={`group flex items-center py-3 px-4 rounded-lg transition-all duration-300 ease-out transform hover:scale-105 ${
                    activeSection === key
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <div className={`w-1 h-8 rounded-full transition-all duration-300 ease-out ${
                    activeSection === key 
                      ? 'bg-white opacity-100' 
                      : 'bg-transparent opacity-0 group-hover:bg-gray-500 group-hover:opacity-50'
                  }`} />
                  <Icon 
                    size={20} 
                    className={`mr-4 transition-all duration-300 ${
                      activeSection === key 
                        ? 'text-white transform scale-110' 
                        : 'text-gray-400 group-hover:text-gray-300'
                    }`} 
                  />
                  <span className="font-medium transition-all duration-300">{label}</span>
                  {activeSection === key && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8">
            <p className="text-sm text-gray-500 mb-4">Get in touch</p>
            <div className="flex flex-wrap gap-3">
                <a href="https://github.com/Gaurishh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors" title="GitHub"><Github size={20}/></a>
                <a href="https://www.linkedin.com/in/gaurish-sood-776639201/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors" title="LinkedIn"><Linkedin size={20}/></a>
            </div>
        </div>
      </div>
  );

  if (isMobile) {
    return (
      <>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-md md:hidden"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
        <div className={`fixed top-0 left-0 h-full z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <SidebarContent />
        </div>
      </>
    );
  }

  return (
    <aside className="fixed top-0 left-0 h-full z-10 hidden md:block">
      <SidebarContent />
    </aside>
  );
};

export default Sidebar;
