import { Github, Linkedin, Twitter, Mail, Briefcase, User, Code, Award, Star, Phone, Braces, ChartNoAxesColumn  } from 'lucide-react';
import LeetCodeIcon from './LeetCodeIcon';
import CodeforcesIcon from './CodeforcesIcon';
import CodeChefIcon from './CodeChefIcon';
import GeeksforGeeksIcon from './GeeksforGeeksIcon';
import Code360Icon from './Code360Icon';
import CSESIcon from './CSESIcon';
import CodolioIcon from './CodolioIcon';

export const sections = {
  about: { label: 'About Me', icon: User },
  experience: { label: 'Experience', icon: Briefcase },
  projects: { label: 'Projects', icon: Code },
  skills: { label: 'Skills & Tech Stacks', icon: Star },
  profiles: { label: 'Coding Profiles', icon: ChartNoAxesColumn  },
  certifications: { label: 'Courses & Certifications', icon: Award },
  contact: { label: 'Contact', icon: Phone },
};

export const profiles = [
  { name: 'Codolio', url: 'https://codolio.com/profile/GaurishS', handle: 'Compiled summary of all coding profiles', icon: CodolioIcon },
  { name: 'GitHub', url: 'https://github.com/Gaurishh', handle: 'Gaurishh (25+ Repositories)', icon: Github },
  { name: 'LeetCode', url: 'https://www.leetcode.com/GaurishS/', handle: 'GaurishS (800+ Problems, Knight Badge - Top 2.5%)', icon: LeetCodeIcon },
  { name: 'Codeforces', url: 'https://codeforces.com/profile/GaurishS', handle: 'GaurishS (350+ Problems, 1388 peak rating)', icon: CodeforcesIcon },
  { name: 'Naukri Code360', url: 'https://www.naukri.com/code360/profile/e6a56a68-5892-4123-88a9-2e9c24a33a19', handle: 'GaurishS (150+ Problems)', icon: Code360Icon },
  { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/user/gaurish_s12', handle: 'gaurish_s12 (150+ Problems, 490 Score)', icon: GeeksforGeeksIcon },
  { name: 'CSES Problem Set', url: 'https://cses.fi/user/98779', handle: 'GaurishS (90+ Problems)', icon: CSESIcon },
  { name: 'CodeChef', url: 'https://www.codechef.com/users/gaurish_s12', handle: 'gaurish_s12 (50+ Problems, 1709 rating)', icon: CodeChefIcon }
];

export const experiences = [
  {
    category: 'Professional Experience',
    isHeader: true
  },
  { 
    role: 'Software Engineer 1 (6M Intern + Full Time Conversion)', 
    company: 'BlackRock', 
    period: 'Jan 2025 - Present', 
    bullets: [
      'Migrated event processing to the <strong>event-driven fanout server</strong> (BMSNetworkFanout), which pushed filtered updates, centralizing incoming event processing and replacing redundant polling jobs, which streamlined data delivery across systems and improved system response time by <strong>97%</strong>.',
      'Built a <strong>self-correcting</strong> LLM-based tool for <strong>Natural Language to SQL conversion</strong> that achieved <strong>90%+</strong> accuracy by leveraging <strong>Chain-of-Thought prompting</strong>, <strong>few-shot examples</strong>, and <strong>full schema context</strong>, cutting data retrieval time by <strong>50%</strong>.',
      'Automated the comparison of pre- and post-modification snapshots through python scripts, detecting anomalies with <strong>100%</strong> accuracy and reducing issue detection time by <strong>60%</strong>.',
      'Programmed an automated sensitive stock detection system with SQL and Jinja templates, reducing manual reviews by <strong>90%</strong>; ensured accuracy by writing <strong>20+</strong> comprehensive unit tests with <strong>99%</strong> coverage.',
      'Mastered advanced Python development through BlackRock\'s APDC Bronze, Silver, and Gold certifications, achieving a <strong>top 5%</strong> score on final project assessments as the most junior member on the team.'
    ]
  },
  { 
    role: 'Software Engineering Intern', 
    company: 'Clearwater Analytics', 
    period: 'Jun 2024 - Aug 2024', 
    bullets: [
      'Led <strong>end-to-end development</strong> of a new panel during migration from a desktop to web app, collaborating with <strong>2</strong> teammates (frontend & backend) to deliver the module in an Agile setup.',
      'Architected robust backend services and interactive front-end interfaces utilizing <strong>Angular.js</strong>, and <strong>Kotlin</strong>, optimizing loading time by approximately <strong>25%</strong> compared to the desktop-based software, with <strong>enhanced scalability</strong>.',
      'Received a <strong>6-month internship</strong> extension as a pathway to full-time conversion based on stellar performance.'
    ]
  },
  {
    category: 'College Experience',
    isHeader: true
  },
  { 
    role: 'Research Intern', 
    company: 'CISMR Lab', 
    period: 'Jul 2023 - Aug 2023', 
    bullets: [
      'Collaborated with PhD scholars to analyze <strong>1000+</strong> foot pressure data points for early diabetes detection using <strong>predictive modeling</strong> and <strong>ensemble methods</strong> in Python, achieving nearly <strong>70%</strong> accuracy.',
      'Employed <strong>Pandas</strong>, <strong>Numpy</strong>, <strong>Scikit-learn</strong>, <strong>Seaborn</strong>, and <strong>Matplotlib</strong> libraries in Python to streamline data processing workflows, reducing analysis time by <strong>40%</strong> and increasing the efficiency of data-driven projects.'
    ]
  },
  { 
    role: 'Placement Coordinator', 
    company: 'Training and Placement Cell', 
    period: 'Dec 2021 - Dec 2022', 
    bullets: [
      'Contacted <strong>150+</strong> companies through <strong>cold calling</strong> and <strong>email marketing</strong>; achieved a <strong>5%</strong> conversion rate, bolstering the institute\'s recruitment partnerships.'
    ]
  },
  { 
    role: 'Executive Member', 
    company: 'Cultural Club', 
    period: '2021 - 2022', 
    bullets: [
      '<strong>Event Management</strong>: Managed and co-ordinated a number of events both at team and individual level.',
      'Executed <strong>script writing</strong>, <strong>role allocation</strong>, and <strong>management</strong> on various occassions.',
      'Won <strong>cash prize</strong> for <strong>Beatboxing</strong> in Solo Singing competition organized by NIT Delhi during its Annual techno Cultural Festival.',
      'Engaged in <strong>street plays</strong>, power-lifting events, and <strong>tug-of-war tournaments</strong>, building <strong>stage confidence</strong>, physical endurance, and <strong>team coordination</strong> under pressure.'
    ]
  },
];

export const projects = [
  { 
    name: 'Baker\'s Nest', 
    bullets: [
      'Launched a <strong>fully responsive</strong> website for a local bakery, with a <strong>landing page</strong> and an <strong>e-commerce page</strong>, integrating <strong>payment authentication</strong> using <strong>RazorPay</strong>, supporting over <strong>5 payment options</strong>, and secure <strong>login authentication</strong> with <strong>Auth0</strong>.',
      'Collaborated with bakery owner to design <strong>Admin Panel UI/UX</strong>, decreasing order processing bottlenecks; optimized <strong>RESTful API</strong> design and <strong>MongoDB data modeling</strong>, and accelerated database response time by <strong>30%</strong>.',
      'Implemented <strong>server-side pagination</strong> and <strong>lazy loading</strong>, and leveraged <strong>React Redux</strong> to efficiently <strong>manage asynchronous data</strong> and UI state, reducing product load time by <strong>40%</strong> and improving retrieval efficiency.'
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'RazorPay', 'Auth0'], 
    link: 'https://bakers-nest.onrender.com',
    github: 'https://github.com/Gaurishh/bakers-nest'
  },
  { 
    name: 'Amul Protein Products Notifier', 
    bullets: [
      'Engineered a <strong>scalable full-stack application</strong> that delivers <strong>real-time</strong> restock alerts for <strong>20+ products</strong> across <strong>4 cities</strong>, eliminating manual checks and enabling timely purchases.',
      'Scraped inventory every <strong>10 minutes</strong> using <strong>Python & Selenium Web Driver</strong>, integrated with a <strong>multi-threaded FastAPI backend</strong>, <strong>MongoDB</strong> for scalable data storage, and a <strong>responsive React.js frontend</strong>.',
      'Automated user notifications via <strong>email</strong> using a <strong>Redis-backed job queue</strong> and <strong>Node.js/Express backend</strong>, ensuring seamless and timely delivery of stock updates to <strong>50+</strong> active users.'
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'FastAPI', 'Python', 'Selenium', 'BeautifulSoup', 'Redis', 'Multi-Threading', 'Microservices'], 
    link: 'https://amul-protein-products-notifier.onrender.com',
    github: 'https://github.com/Gaurishh/amul-protein-products-notifier'
  },
  { 
    name: 'NITD Codes', 
    bullets: [
      'Engineered a <strong>cross-platform mobile application</strong> using <strong>Flutter</strong> and <strong>Dart</strong>, aiming to achieve over <strong>500 monthly active user</strong> engagements by providing <strong>streamlined posting</strong> and <strong>discussion features</strong> for coding topics among NIT Delhi students.',
      'Implemented <strong>Firebase authentication</strong> with <strong>email verification</strong>, <strong>password strength check</strong>, <strong>forgot password feature</strong>, and <strong>reCAPTCHA verification</strong> during registration for secure access.',
      'Integrated <strong>profile management features</strong>, allowing users to edit bios, change usernames, and engage in <strong>real-time chat</strong> with others in dedicated chatrooms for coding discussions.'
    ],
    tech: ['Flutter', 'Dart', 'Firebase', 'Firebase Authentication', 'Firebase Firestore', 'Real-time Chat'], 
    link: 'https://drive.google.com/file/u/1/d/1ECKLqW9QBPaorEe5dcJbnH9efyThqjni/view?usp=drive_link',
    github: 'https://github.com/Gaurishh/flutter_nitd-codes-app'
  },
  { 
    name: 'AI-powered Lead Generation Pipeline', 
    bullets: [
      'Engineered an <strong>end-to-end AI lead generation pipeline</strong> using <strong>Google Places API</strong> and <strong>Gemini 2.5 Flash</strong> to automatically discover, classify, and extract data from <strong>327 institutions</strong> across two major cities, delivering <strong>86% qualified leads</strong> for targeted course recommendations.',
      'Architected a <strong>multithreaded web crawling system</strong> with connection pooling and iterative BFS algorithms, processing <strong>268 websites</strong> and boosting data collection efficiency by <strong>40%</strong> while implementing domain failure tracking to ensure reliability.',
      'Deployed a <strong>dual-stage AI process</strong> using Gemini 2.5 Flash with course-aware prompts to first classify institutions with detailed reasoning and then extract over <strong>1,200 key contacts</strong> into structured JSON, achieving <strong>95% accuracy</strong>.'
    ],
    tech: ['Python', 'Google Places API', 'Google Gemini 2.5 Flash', 'BeautifulSoup4', 'pandas', 'Multithreading', 'Web Scraping', 'AI/ML'], 
    link: 'https://github.com/Gaurishh/coursera-scraper/tree/main/output',
    github: 'https://github.com/Gaurishh/coursera-scraper'
  }
];

export const certifications = [
  { 
    name: 'FastAPI - The Complete Course 2025 (Beginner + Advanced)', 
    issuer: 'Udemy', 
    date: 'September 2025',
    duration: '21.5 hours',
    description: 'Build and deploy production-ready RESTful APIs and full-stack applications with FastAPI. This course covers everything from the basics to advanced topics like database integration, authentication with JWT, and deployment.',
    link: 'https://www.udemy.com/certificate/UC-d8df9348-1382-4a45-936d-c651e41c96e5'
  },
  { 
    name: 'Mastering System Design', 
    issuer: 'Udemy', 
    date: 'July 2025',
    duration: '23 hours',
    description: 'Advanced system design principles, scalability patterns, and distributed systems architecture.',
    link: 'https://www.udemy.com/certificate/UC-205b7617-4c28-4b11-b005-0a57c2398e9f'
  },
  { 
    name: 'BlackRock APDC Gold', 
    issuer: 'BlackRock', 
    date: 'March 2025',
    duration: '3 weeks',
    description: 'Advanced Python Development Certification - Gold level achievement with top 5% project assessment score.'
  },
  { 
    name: 'BlackRock APDC Silver', 
    issuer: 'BlackRock', 
    date: 'March 2025',
    duration: '3 weeks',
    description: 'Advanced Python Development Certification - Silver level achievement.'
  },
  { 
    name: 'BlackRock APDC Bronze', 
    issuer: 'BlackRock', 
    date: 'February 2025',
    duration: '3 weeks',
    description: 'Advanced Python Development Certification - Bronze level achievement.'
  },
  { 
    name: 'The Web Development Bootcamp', 
    issuer: 'Udemy', 
    date: 'July 2023',
    duration: '66 hours',
    description: 'Comprehensive full-stack web development course covering HTML, CSS, JavaScript, Node.js, and databases.',
    link: 'https://www.udemy.com/certificate/UC-c33a6c7b-6468-4bda-9a9c-11ce58e5d2de'
  },
  { 
    name: 'Python for Data Science and Machine Learning Bootcamp', 
    issuer: 'Udemy', 
    date: 'July 2023',
    duration: '25 hours',
    description: 'Comprehensive Python course covering data science, machine learning, and statistical analysis techniques.',
    link: 'https://www.udemy.com/certificate/UC-188ebc05-a131-4602-9fc1-2e91774f2ab7'
  },
  { 
    name: 'Master DSA in C++', 
    issuer: 'Coding Blocks', 
    date: 'May 2022',
    duration: '6 months',
    description: 'Data Structures and Algorithms mastery with C++ implementation and competitive programming techniques.',
    link: 'https://drive.google.com/file/d/1eT25JY_VTjlISQuAxeB1Nck7eFlh6auv/view?usp=sharing'
  },
  { 
    name: 'ReactJS: The Complete Guide', 
    issuer: 'Udemy', 
    date: 'October 2023',
    duration: '71 hours (Completed Partially)',
    description: 'Comprehensive React.js development course covering components, hooks, state management, and modern React patterns.'
  }
];

export const skills = {
  'Languages': ['C/C++ (Most Proficient)', 'Java/Kotlin', 'Python', 'HTML', 'CSS', 'JavaScript', 'Dart', 'SQL'],
  'Frameworks & Libraries': ['React.js', 'Angular.js', 'Express.js', 'Node.js', 'Bootstrap', 'Flutter'],
  'Tools & Libraries': ['Gradle', 'Git', 'MongoDB', 'Mongoose', 'Pandas', 'Numpy', 'Matplotlib', 'Seaborn', 'BeautifulSoup', 'Multi-Threading', 'Microservices'],
  'Relevant Coursework': ['Operating System', 'Computer Networks', 'Object Oriented Programming', 'Database Management Systems', 'Data Structures', 'Design and Analysis of Algorithms', 'Software Engineering', 'Artificial Intelligence', 'Machine Learning', 'Neural Networks', 'Computer Vision', 'Data Mining'],
};
