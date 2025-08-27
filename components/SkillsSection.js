import React from 'react';
import { Star } from 'lucide-react';
import SectionCard from './SectionCard';
import { skills } from './constants';

const SkillsSection = () => {
    return (
        <SectionCard title="Skills & Tech Stacks" icon={Star}>
            <div className="space-y-6">
                {Object.entries(skills).map(([category, list]) => (
                    <div key={category}>
                        <h3 className="text-xl font-semibold text-blue-300 mb-3">{category}</h3>
                        <div className="flex flex-wrap gap-3">
                            {list.map(skill => <span key={skill} className="bg-gray-700 text-gray-200 px-4 py-2 rounded-lg text-md font-medium">{skill}</span>)}
                        </div>
                    </div>
                ))}
            </div>
        </SectionCard>
    );
};

export default SkillsSection;
