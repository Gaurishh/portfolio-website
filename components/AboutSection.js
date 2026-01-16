import React from 'react';
import Image from 'next/image';
import { User, ChevronRight, Download } from 'lucide-react';

const AboutSection = () => {
    return (
        <div className="w-full flex flex-col">
            {/* Part 1: Brief Opinion / Hero-like Intro - Occupies full screen */}
            <div className="min-h-screen flex items-center justify-center w-full py-12 md:py-0">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-12 max-w-7xl mx-auto w-full">
                    {/* Text Content */}
                    <div className="space-y-6 max-w-2xl order-2 md:order-1">

                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight -ml-1">
                            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Gaurish</span>
                        </h1>

                        <h2 className="text-xl md:text-2xl text-gray-400 font-medium">
                            Software & Applied AI Engineer
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            Product-minded Developer with a passion for problem-solving and collaborating to build cool products.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Specialising in Backend & Applied AI Engineering, do checkout my recent projects, professional experience and completed coursework!
                        </p>


                    </div>

                    {/* Image */}
                    <div className="order-1 md:order-2 flex justify-center relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px]"></div>
                        <div className="relative w-80 h-80 md:w-[30rem] md:h-[30rem] rounded-full p-1 bg-gradient-to-br from-gray-700 to-gray-900 overflow-hidden border border-gray-700 shadow-2xl">
                            <Image
                                src="/profile-photo.jpg"
                                alt="Gaurish Sood"
                                width={800}
                                height={800}
                                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                                style={{ objectPosition: 'center 80%' }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Part 2: Detailed Overview - Appears on scroll */}
            <div className="w-full py-20 bg-gray-900/30">
                <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
                    <div className="bg-gray-800/50 p-8 md:p-10 rounded-2xl border border-gray-700/50 shadow-xl backdrop-blur-sm">
                        <div className="flex flex-col md:flex-row gap-12 items-start">
                            {/* Detailed Text */}
                            <div className="flex-1 space-y-6 text-lg text-gray-300 leading-relaxed">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                    <User className="text-blue-400" /> About Me
                                </h3>
                                <p>
                                    I&apos;m a <strong>CSE</strong> graduate from <strong>NIT Delhi</strong> and have solved over 1500+ DSA/CP questions, achieving a <strong className="text-blue-400">2010 rating on LeetCode</strong> & <strong className="text-blue-400">1426 on Codeforces</strong>.
                                </p>
                                <p>
                                    Now, I&apos;m channelling that same drive into building with AI, designing robust backend systems and creating impactful applications.
                                </p>
                                <p>
                                    When I&apos;m not working, you&apos;ll usually find me listening to music, learning something new or spending time with friends/family.
                                </p>

                                <div className="pt-4">
                                    <a
                                        href="https://drive.google.com/uc?export=download&id=1kYJuXjatx9RIY6V3ZLvVx1yr_paHiSEX"
                                        download="Gaurish_Sood_Resume.pdf"
                                        className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg transition-all border border-gray-600 hover:border-blue-400"
                                    >
                                        <Download className="w-5 h-5 mr-2" />
                                        Download Resume
                                    </a>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="w-full md:w-1/3 grid grid-cols-2 gap-4">
                                <div className="bg-gray-900/80 p-4 rounded-xl text-center border border-gray-800 hover:border-blue-500/30 transition-colors">
                                    <div className="text-3xl font-bold text-blue-400 mb-1">1.5k+</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider">DSA Problems</div>
                                </div>
                                <div className="bg-gray-900/80 p-4 rounded-xl text-center border border-gray-800 hover:border-blue-500/30 transition-colors">
                                    <div className="text-3xl font-bold text-blue-400 mb-1">4+</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider">Years Coding</div>
                                </div>
                                <div className="bg-gray-900/80 p-4 rounded-xl text-center border border-gray-800 col-span-2 hover:border-blue-500/30 transition-colors">
                                    <div className="text-3xl font-bold text-blue-400 mb-1">Top 2.5%</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider">LeetCode Knight</div>
                                </div>
                                <div className="bg-gray-900/80 p-4 rounded-xl text-center border border-gray-800 col-span-2 hover:border-blue-500/30 transition-colors">
                                    <div className="text-3xl font-bold text-blue-400 mb-1">30+</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider">Github Repositories</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;

