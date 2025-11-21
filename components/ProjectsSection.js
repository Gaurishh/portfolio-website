import React, { useState, useEffect } from 'react';
import { Code, Github } from 'lucide-react';
import SectionCard from './SectionCard';
import { projects } from './constants';

const ProjectsSection = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <SectionCard title="Projects" icon={Code}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map(project => (
                    <div key={project.name} className="bg-gray-700/50 p-6 rounded-lg flex flex-col hover:shadow-blue-500/20 shadow-lg transition-shadow">
                        {/* Header with title and links */}
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-white flex-1">{project.name}</h3>
                            <div className="flex gap-3 ml-4" suppressHydrationWarning>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium text-sm">View Project ↗</a>
                                {project.name === 'BookShelf' ? (
                                    <>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 font-medium text-sm">Frontend ↗</a>
                                        <a href={project.backend} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 font-medium text-sm">Backend ↗</a>
                                    </>
                                ) : (
                                    project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 font-medium text-sm">GitHub ↗</a>
                                    )
                                )}
                            </div>
                        </div>
                        {project.name === 'Amul Protein Products Notifier' && (
                            <div className="bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3 w-fit">
                                50+ Active Users
                            </div>
                        )}
                        {project.name === 'Baker\'s Nest' && (
                            <div className="bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3 w-fit">
                                In-use by the bakery
                            </div>
                        )}

                        {/* Technology tags */}
                        <div className="flex flex-wrap gap-2 mb-4" suppressHydrationWarning>
                            {project.tech.map(t => <span key={t} className="bg-blue-900/50 text-blue-300 text-xs font-semibold px-2.5 py-1 rounded-full">{t}</span>)}
                        </div>

                        <div className="text-gray-300 flex-grow mb-4 space-y-2">
                            {project.bullets ? (
                                project.bullets.map((bullet, index) => (
                                    <div key={index} className="flex items-start" suppressHydrationWarning>
                                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0" suppressHydrationWarning></span>
                                        <p dangerouslySetInnerHTML={{ __html: bullet }} suppressHydrationWarning></p>
                                    </div>
                                ))
                            ) : (
                                <p suppressHydrationWarning>{project.description}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <a
                    href="https://github.com/Gaurishh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-bold text-lg rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-gray-500/25 transform hover:scale-105 border border-gray-700"
                >
                    <Github className="w-5 h-5 mr-2" />
                    View all projects on Github
                </a>
            </div>
        </SectionCard>
    );
};

export default ProjectsSection;
