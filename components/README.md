# Portfolio Components

This directory contains all the individual components for the portfolio website, organized for better maintainability and reusability.

## Component Structure

### Core Components

- **`SectionCard.js`** - Reusable wrapper component for all sections with consistent styling
- **`Sidebar.js`** - Navigation sidebar with mobile responsiveness
- **`GlobalStyles.js`** - Global CSS animations and styles

### Section Components

- **`AboutSection.js`** - Personal information and profile image
- **`ProfilesSection.js`** - Coding profiles and social links
- **`ExperienceSection.js`** - Work experience timeline
- **`ProjectsSection.js`** - Portfolio projects with technology tags
- **`CertificationsSection.js`** - Courses and certifications
- **`SkillsSection.js`** - Skills organized by categories
- **`ContactSection.js`** - Contact form and information

### Data and Configuration

- **`constants.js`** - All static data (sections, profiles, experiences, projects, etc.)
- **`index.js`** - Barrel export file for clean imports

## Usage

Import components from the main index file:

```javascript
import {
  AboutSection,
  ProfilesSection,
  ExperienceSection,
  ProjectsSection,
  CertificationsSection,
  SkillsSection,
  ContactSection,
  Sidebar,
  SectionCard,
  GlobalStyles,
} from "../components";
```

Import constants:

```javascript
import {
  sections,
  profiles,
  experiences,
  projects,
  certifications,
  skills,
} from "../components/constants";
```

## Benefits of This Structure

1. **Maintainability** - Each component has a single responsibility
2. **Reusability** - Components can be easily reused in other parts of the app
3. **Testing** - Individual components can be tested in isolation
4. **Collaboration** - Multiple developers can work on different components simultaneously
5. **Code Organization** - Clear separation of concerns and logical grouping
6. **Scalability** - Easy to add new components or modify existing ones

## File Organization

```
components/
├── README.md
├── index.js                 # Barrel exports
├── constants.js             # Static data
├── SectionCard.js           # Reusable wrapper
├── Sidebar.js               # Navigation
├── GlobalStyles.js          # Global styles
├── AboutSection.js          # About section
├── ProfilesSection.js       # Profiles section
├── ExperienceSection.js     # Experience section
├── ProjectsSection.js       # Projects section
├── CertificationsSection.js # Certifications section
├── SkillsSection.js         # Skills section
└── ContactSection.js        # Contact section
```
