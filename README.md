# 🚀 Gaurish Sood - Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing my skills, experience, projects, and achievements.

## 🌐 **Live Demo**

**[View Portfolio → gaurishsood.vercel.app](https://gaurishsood.vercel.app)**

## ✨ **Features**

### **🎯 Professional Sections**

- **About Me** - Personal introduction with profile image and download resume button
- **Experience** - Detailed work history with BlackRock, Clearwater Analytics, and more
- **Projects** - Showcase of 5+ projects with live links and GitHub repositories
- **Skills** - Technical skills organized by categories
- **Certifications** - Courses and certifications with completion details
- **Contact** - Contact form and professional information

### **🎨 Modern UI/UX**

- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Dark Theme** - Professional dark color scheme with blue accents
- **Smooth Animations** - CSS transitions and hover effects
- **Interactive Elements** - Hover states, focus indicators, and smooth scrolling

### **🧭 Smart Navigation**

- **Scroll Spy** - Automatic section highlighting based on scroll position
- **Smooth Scrolling** - Seamless navigation between sections
- **Progress Indicator** - Visual scroll progress bar
- **Sidebar Navigation** - Quick access to all sections

## 🛠️ **Tech Stack**

### **Frontend Framework**

- **Next.js 13** - React framework with server-side rendering
- **React 18** - Modern React with hooks and functional components

### **Styling & UI**

- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **Custom CSS** - Global styles and animations

### **Development Tools**

- **ESLint** - Code quality and consistency
- **Git** - Version control
- **npm** - Package management

## 📱 **Responsive Design**

The website is fully responsive and optimized for:

- **Mobile** - Single column layout with touch-friendly interactions
- **Tablet** - Adaptive grid layouts
- **Desktop** - Multi-column layouts with hover effects
- **Large Screens** - Optimized spacing and typography

## 🚀 **Performance Features**

- **Image Optimization** - Next.js Image component for optimal loading
- **Code Splitting** - Automatic route-based code splitting
- **Static Generation** - Fast page loads with static generation
- **CDN Ready** - Optimized for global content delivery

## 📁 **Project Structure**

```
my-portfolio/
├── components/           # Reusable React components
│   ├── AboutSection.js
│   ├── ContactSection.js
│   ├── ExperienceSection.js
│   ├── ProjectsSection.js
│   ├── SkillsSection.js
│   ├── CertificationsSection.js
│   ├── Sidebar.js
│   ├── SectionCard.js
│   ├── GlobalStyles.js
│   └── index.js         # Barrel exports
├── pages/               # Next.js pages
│   └── index.js        # Main portfolio page
├── constants.js         # Data and content
├── next.config.mjs     # Next.js configuration
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🎯 **Key Components**

### **AboutSection**

- Profile image with circular cropping
- Personal introduction text
- Download resume button (Google Drive integration)

### **ExperienceSection**

- Timeline-based layout with bullet points
- Company logos and role details
- Performance metrics and achievements

### **ProjectsSection**

- Grid layout for project cards
- Technology tags and live links
- GitHub repository links

### **SkillsSection**

- Categorized skill display
- Programming languages, frameworks, and tools
- Relevant coursework

### **CertificationsSection**

- Course completion details
- Duration and completion status
- Clickable certificates where available

## 🌟 **Notable Features**

### **Smart Content Management**

- Centralized data in `constants.js`
- Easy content updates without touching components
- Structured data for experiences, projects, and skills

### **Accessibility**

- Semantic HTML structure
- Proper heading hierarchy
- Focus indicators for keyboard navigation
- Alt text for images

### **SEO Optimized**

- Meta tags and descriptions
- Semantic HTML structure
- Fast loading times
- Mobile-friendly design

## 🚀 **Getting Started**

### **Prerequisites**

- Node.js 16+
- npm or yarn

### **Installation**

```bash
# Clone the repository
git clone https://github.com/Gaurishh/portfolio-website.git

# Navigate to project directory
cd portfolio-website/my-portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### **Build for Production**

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📝 **Customization**

### **Content Updates**

1. Edit `components/constants.js`
2. Update personal information, experiences, projects
3. Modify skills and certifications
4. Change profile image in `public/` folder

### **Styling Changes**

1. Modify Tailwind classes in component files
2. Update `components/GlobalStyles.js` for global styles
3. Customize color scheme in Tailwind config

### **Adding New Sections**

1. Create new component in `components/` folder
2. Add to `components/index.js` exports
3. Import and use in `pages/index.js`
4. Update sidebar navigation

## 🌐 **Deployment**

### **Vercel (Recommended)**

- Automatic deployments from GitHub
- Global CDN and edge functions
- Custom domain support
- SSL certificates included

### **Other Platforms**

- Netlify
- GitHub Pages
- AWS Amplify

## 📊 **Performance Metrics**

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 **Contributing**

This is a personal portfolio project, but suggestions and feedback are welcome!

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

## 📞 **Contact**

- **Portfolio**: [gaurishsood.vercel.app](https://gaurishsood.vercel.app)
- **GitHub**: [@Gaurishh](https://github.com/Gaurishh)
- **LinkedIn**: [Gaurish Sood](https://www.linkedin.com/in/gaurish-sood/)

---

⭐ **Star this repository if you found it helpful!**
