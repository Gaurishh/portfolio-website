import React from 'react';
import { Award } from 'lucide-react';
import SectionCard from './SectionCard';
import { certifications } from './constants';

const CertificationsSection = () => {
    return (
        <SectionCard title="Courses & Certifications" icon={Award}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                    <div key={index} className="bg-gray-700/50 p-6 rounded-lg hover:shadow-blue-500/20 shadow-lg transition-shadow">
                        <div className="flex items-start mb-4">
                            <Award className="text-blue-400 mr-3 flex-shrink-0" size={28} />
                            <h3 className="text-lg font-semibold text-white leading-tight">{cert.name}</h3>
                        </div>
                        <div className="space-y-2">
                            <p className="text-gray-300 text-sm">
                                <span className="text-gray-400">Issuer:</span> {cert.issuer}
                            </p>
                            <p className="text-gray-300 text-sm">
                                <span className="text-gray-400">Date Issued:</span> {cert.date}
                            </p>
                            {cert.duration && (
                                <p className="text-gray-300 text-sm">
                                    <span className="text-gray-400">Duration:</span> {cert.duration}
                                </p>
                            )}
                            {cert.description && (
                                <p className="text-gray-300 text-sm mt-3">
                                    {cert.description}
                                </p>
                            )}
                            {cert.link && (
                                <a 
                                    href={cert.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-block mt-3 text-blue-400 hover:text-blue-300 font-medium text-sm"
                                >
                                    View Certificate &rarr;
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </SectionCard>
    );
};

export default CertificationsSection;
