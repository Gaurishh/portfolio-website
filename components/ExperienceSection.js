import React from 'react';
import { Briefcase } from 'lucide-react';
import SectionCard from './SectionCard';
import { experiences } from './constants';

const ExperienceSection = () => {
    return (
        <SectionCard title="Experience" icon={Briefcase}>
            <div className="relative border-l-2 border-blue-500 pl-8">
                {experiences.map((exp, index) => (
                    <div key={index} className="mb-10">
                        <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 mt-1.5 border-2 border-gray-900"></div>
                        <p className="text-sm text-gray-400">{exp.period}</p>
                        <h3 className="text-xl font-bold text-white mt-1">
                            {exp.role.includes('(6M Intern + PPO Conversion)') ? (
                                <>
                                    Software Engineer 1{' '}
                                    <span className="text-sm italic text-gray-400">(6M Intern + PPO Conversion)</span>
                                </>
                            ) : (
                                exp.role
                            )}
                        </h3>
                        <p className="text-md text-blue-300 mb-2">{exp.company}</p>
                        <div className="text-gray-300 leading-relaxed space-y-2">
                            {exp.bullets ? (
                                exp.bullets.map((bullet, index) => (
                                    <div key={index} className="flex items-start">
                                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                        <p dangerouslySetInnerHTML={{ __html: bullet }}></p>
                                    </div>
                                ))
                            ) : (
                                <p>{exp.description}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </SectionCard>
    );
};

export default ExperienceSection;
