import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SectionCard from './SectionCard';
import { emailjsConfig } from '../config/emailjs';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init(emailjsConfig.userId);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Send email using EmailJS
            const result = await emailjs.send(
                emailjsConfig.serviceId,
                emailjsConfig.templateId,
                {
                    // Sender information
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    
                    // Recipient information (YOU)
                    to_name: emailjsConfig.templateParams.to_name,
                    to_email: emailjsConfig.templateParams.to_email,
                    
                    // Reply information
                    reply_to: formData.email,
                    
                    // Additional context
                    subject: `New message from ${formData.name} via portfolio`,
                },
                emailjsConfig.userId
            );
            
            if (result.status === 200) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
                
                // Reset status after 5 seconds
                setTimeout(() => setSubmitStatus(null), 5000);
            } else {
                throw new Error('Email failed to send');
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            
            // Show more specific error messages
            if (error.text && error.text.includes('insufficient authentication scopes')) {
                setSubmitStatus('auth_error');
            } else if (error.text && error.text.includes('Service not found')) {
                setSubmitStatus('service_error');
            } else {
                setSubmitStatus('error');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SectionCard title="Contact" icon={Phone}>
            <div className="mb-6">
                <p className="text-lg text-gray-300 mb-4">
                    I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out!
                </p>
            </div>
            
            {submitStatus === 'success' && (
                <div className="bg-green-600/20 border border-green-500 text-green-300 p-4 rounded-lg mb-6">
                    ✅ Message sent successfully! I&apos;ll get back to you soon.
                </div>
            )}
            
            {submitStatus === 'error' && (
                <div className="bg-red-600/20 border border-red-500 text-red-300 p-4 rounded-lg mb-6">
                                         ❌ Failed to send message. Please try again or email me directly at {emailjsConfig.templateParams.to_email}
                </div>
            )}
            
            {submitStatus === 'auth_error' && (
                <div className="bg-orange-600/20 border border-orange-500 text-orange-300 p-4 rounded-lg mb-6">
                    🔐 Authentication Error: Gmail permissions need to be updated. Please check your EmailJS service configuration.
                </div>
            )}
            
            {submitStatus === 'service_error' && (
                <div className="bg-red-600/20 border border-red-500 text-red-300 p-4 rounded-lg mb-6">
                    ⚠️ Service Error: EmailJS service not found. Please verify your service ID in the configuration.
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
                    />
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Your Email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
                    />
                </div>
                <textarea 
                    placeholder="Your Message" 
                    name="message"
                    rows="5" 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg ${
                        isSubmitting 
                            ? 'opacity-50 cursor-not-allowed' 
                            : 'hover:bg-blue-700 hover:shadow-blue-500/25'
                    }`}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </SectionCard>
    );
};

export default ContactSection;
