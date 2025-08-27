// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const emailjsConfig = {
    // Your EmailJS Service ID (found in EmailJS dashboard)
    serviceId: 'service_1on5yzm',
    
    // Your EmailJS Template ID (found in EmailJS dashboard)
    templateId: 'template_8fo90x1',
    
    // Your EmailJS User ID (found in EmailJS dashboard)
    userId: 'bEh1CEvGkKLmix1S6',
    
    // Email template variables
    templateParams: {
        to_name: 'Gaurish Sood',
        to_email: '9gaurish@gmail.com',
        // Other variables will be passed dynamically
    }
};

// How to get these values:
// 1. Go to https://www.emailjs.com/
// 2. Sign up/Login
// 3. Create a new Email Service (Gmail, Outlook, etc.)
// 4. Create a new Email Template
// 5. Copy the IDs from your dashboard
