import React, { useState, useEffect } from 'react';
import { Briefcase } from 'lucide-react';
import SectionCard from './SectionCard';
import { experiences } from './constants';

const ExperienceSection = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Group experiences by section
    const groupedExperiences = [];
    let currentGroup = null;
    
    experiences.forEach((exp) => {
        if (exp.isHeader) {
            if (currentGroup) {
                groupedExperiences.push(currentGroup);
            }
            currentGroup = { header: exp, items: [] };
        } else if (currentGroup) {
            currentGroup.items.push(exp);
        }
    });
    
    if (currentGroup) {
        groupedExperiences.push(currentGroup);
    }

    return (
        <SectionCard title="Experience" icon={Briefcase}>
            <div>
                {groupedExperiences.map((group, groupIndex) => (
                    <div key={groupIndex} className="mb-8">
                        {/* Section Header */}
                        <div className="mb-6">
                            <h2 className="text-2xl font-extrabold text-blue-300 mb-4 border-b border-gray-700 pb-2" suppressHydrationWarning>
                                {group.header.category}
                            </h2>
                        </div>
                        
                        {/* Timeline for this section */}
                        <div className="relative border-l-2 border-blue-500 pl-8">
                            {group.items.map((exp, index) => (
                                <div key={index} className="mb-10">
                                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 mt-1.5 border-2 border-gray-900" suppressHydrationWarning></div>
                                    <p className="text-sm text-gray-400" suppressHydrationWarning>{exp.period}</p>
                                    <h3 className="text-xl font-bold text-white mt-1" suppressHydrationWarning>
                                        {exp.role && exp.role.includes('(6M Intern + Full Time Conversion)') ? (
                                            <>
                                                Software Engineer 1{' '}
                                                <span className="text-sm italic text-gray-400">(6M Intern + Full Time Conversion)</span>
                                            </>
                                        ) : (
                                            exp.role
                                        )}
                                    </h3>
                                    <p className="text-md text-blue-300 mb-2" suppressHydrationWarning>{exp.company}</p>
                                    <div className="text-gray-300 leading-relaxed space-y-2">
                                        {exp.bullets ? (
                                            exp.bullets.map((bullet, bulletIndex) => (
                                                <div key={bulletIndex} className="flex items-start" suppressHydrationWarning>
                                                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0" suppressHydrationWarning></span>
                                                    <p dangerouslySetInnerHTML={{ __html: bullet }} suppressHydrationWarning></p>
                                                </div>
                                            ))
                                        ) : (
                                            <p suppressHydrationWarning>{exp.description}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SectionCard>
    );
};

export default ExperienceSection;
