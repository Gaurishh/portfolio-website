import React from 'react';

const SectionCard = ({ title, icon: Icon, children }) => (
    <div className="bg-gray-800/50 rounded-2xl shadow-lg p-6 md:p-8 mb-8 backdrop-blur-sm border border-gray-700/50 animate-fade-in w-full">
        <div className="flex items-center mb-6">
            <Icon className="text-blue-400 mr-4" size={28} />
            <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
        </div>
        <div>{children}</div>
    </div>
);

export default SectionCard;
