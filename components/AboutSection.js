import React from 'react';
import Image from 'next/image';
import { User } from 'lucide-react';
import SectionCard from './SectionCard';

const AboutSection = () => (
  <SectionCard title="About Me" icon={User}>
         <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] w-full px-6 md:px-12">
          <div className="flex flex-col xl:flex-row items-center mb-8">
              <div className="mb-8 xl:mb-0 xl:mr-10 flex-shrink-0">
                 <Image 
                     src="/profile-photo.jpg" 
                     alt="Your Name - Software Engineer" 
                     width={512}
                     height={512}
                     className="rounded-full w-64 h-64 xl:w-[28rem] xl:h-[28rem] border-4 border-gray-700 object-cover"
                    style={{ objectPosition: 'center 80%' }}
                     priority
                 />
             </div>
                     <div className="text-center xl:text-left max-w-xl">
                                            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                       Hi, I&apos;m <strong className="text-blue-400">Gaurish</strong>, a <strong>CSE</strong> graduate from <strong>NIT Delhi</strong> and a software developer passionate about building <strong>impactful</strong> digital products.
                   </p>
                   <p className="text-gray-300 leading-relaxed mt-6 text-base md:text-lg">
                   I have strong interest in <strong>backend</strong>, <strong>full-stack</strong> and <strong>AI Engineering</strong>, with hands-on experience in the MERN stack, and building <strong>scalable systems</strong>. I&apos;ve built projects ranging from a coding discussion platform for my campus to a product restock notifier.
                   </p>
                   <p className="text-gray-300 leading-relaxed mt-6 text-base md:text-lg">
                       I thrive on solving complex problems (1500+ DSA/CP problems solved, <strong>2010</strong> rating on <strong>LeetCode</strong>) and am now channeling that same drive into building with AI, designing robust backend systems and creating impactful applications.
                   </p>
                   <p className="text-gray-300 leading-relaxed mt-6 text-base md:text-lg">
                       When I&apos;m not working, you&apos;ll usually find me drinking coffee, staying up-to-date with exciting new tech, brainstorming something random, or spending time out.
                   </p>
        </div>
         </div>
         <div className="w-full text-center">
                           <a 
                  href="https://drive.google.com/uc?export=download&id=1x_G-w1sDbA2iDv3ea9Q4cJzVkhpjrizF"
                  download="Gaurish_Sood_Resume.pdf"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
              >
                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                 </svg>
                 Download Resume
             </a>
         </div>
     </div>
  </SectionCard>
);

export default AboutSection;
