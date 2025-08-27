import React from 'react';
import { Code } from 'lucide-react';
import SectionCard from './SectionCard';
import { projects } from './constants';

const ProjectsSection = () => {
    return (
        <SectionCard title="Projects" icon={Code}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map(project => (
                    <div key={project.name} className="bg-gray-700/50 p-6 rounded-lg flex flex-col hover:shadow-blue-500/20 shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                        <div className="text-gray-300 flex-grow mb-4 space-y-2">
                            {project.bullets ? (
                                project.bullets.map((bullet, index) => (
                                    <div key={index} className="flex items-start">
                                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                        <p dangerouslySetInnerHTML={{ __html: bullet }}></p>
                                    </div>
                                ))
                            ) : (
                                <p>{project.description}</p>
                            )}
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map(t => <span key={t} className="bg-blue-900/50 text-blue-300 text-xs font-semibold px-2.5 py-1 rounded-full">{t}</span>)}
                        </div>
                        <div className="flex gap-3 mt-auto">
                            <a href={project.link} className="text-blue-400 hover:text-blue-300 font-medium self-start">View Project &rarr;</a>
                            {project.name === 'BookShelf' ? (
                                <>
                                    <a href={project.github} className="text-gray-400 hover:text-blue-300 font-medium self-start">Frontend &rarr;</a>
                                    <a href={project.backend} className="text-gray-400 hover:text-blue-300 font-medium self-start">Backend &rarr;</a>
                                </>
                            ) : (
                                project.github && (
                                    <a href={project.github} className="text-gray-400 hover:text-blue-300 font-medium self-start">GitHub &rarr;</a>
                                )
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </SectionCard>
    );
};

export default ProjectsSection;
