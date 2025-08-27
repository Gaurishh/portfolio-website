import React from 'react';
import { Github } from 'lucide-react';
import SectionCard from './SectionCard';
import { profiles } from './constants';

const ProfilesSection = () => {
    return (
        <SectionCard title="Coding Profiles" icon={Github}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {profiles.map(profile => (
                    <a href={profile.url} key={profile.name} target="_blank" rel="noopener noreferrer" className="bg-gray-700/50 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center space-x-4">
                        <profile.icon size={32} className="text-blue-400"/>
                        <div>
                            <h3 className="text-xl font-semibold text-white">{profile.name}</h3>
                            <p className="text-gray-400">{profile.handle}</p>
                        </div>
                    </a>
                ))}
            </div>
        </SectionCard>
    );
};

export default ProfilesSection;
