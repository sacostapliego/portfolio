// Cardinal Landing Images
import cardinalLandingPage from '../assets/projects/full/cardinal-landing-full.png'

// Cardinal Wishlist Images
import cardinalPage from '../assets/projects/full/cardinal-full.png'
import cardinalPage2 from '../assets/projects/full/cardinal-full2.png'
import cardinalPage3 from '../assets/projects/full/cardinal-full3.png'

// BluJay Images
import blujayPage1 from '../assets/projects/full/blujay-full1.png'
import blujayPage2 from '../assets/projects/full/blujay-full2.png'
import blujayPage3 from '../assets/projects/full/blujay-full3.png'

// Portfolio Images
import portfolioPage from '../assets/projects/full/portfolio-full.png'

// AI Closet Images
import aicloset from '../assets/projects/full/ai-closet-full.png'

// n8n Images
import n8nPage from '../assets/projects/full/n8n-full.png'
import n8nPage2 from '../assets/projects/full/n8n-full2.png'

const projectData = [
  {
    title: 'Cardinal Wishlist',
    images: [cardinalPage2, cardinalPage, cardinalPage3],
    tags: ['Python', 'FastAPI', 'React Native', 'Supabase', 'AWS (s3)', 'TypeScript', 'Render', 'PostgreSQL', 'Vercel', 'React', 'NextJS'],
    preview: 'Full stack web and mobile application to manage and share wishlists, built with React, React Native, Expo, S3, Supabase Auth, and FastAPI.',
    description: 'This project is a comprehensive, cross-platform wishlist ecosystem designed to streamline the gift-giving process across iOS, Android, and Web platforms. The application solves the coordination problem inherent in holiday or event planning by providing a real-time, centralized hub where users can manage lists and track item claims. \nArchitecturally, the project transitioned from a Vite-based Single Page Application to a Next.js framework to leverage better routing and performance. The system handles complex data flows, from automated product metadata extraction via web scraping to secure, multi-platform user sessions.',
    link: 'https://cardinalwishlist.vercel.app/',
    github: 'https://github.com/sacostapliego/wishlist',
    keyfeatures: 
    [
      'Cross-Platform Architecture: Engineered a Next.js web frontend and a React Native mobile app that communicate with a unified FastAPI backend via shared service layers.',
      'URL Web Scraping: Developed a Python-based scraping utility using BeautifulSoup4 to parse product details from major retailers like Amazon, featuring randomized user agents to maintain reliability.',
      'Cloud Image Pipeline: Integrated an image processing workflow using Pillow for background removal and AWS S3 for scalable, secure object storage of user-uploaded assets.',
    ],
  },
  {
    title: 'Cardinal Wishlist Landing Page',
    images: [cardinalLandingPage],
    tags: ['React', 'Chakra UI', 'Vercel', 'JavaScript', 'Vite'],
    description: 'Landing page for the Cardinal Wishlist application, showcasing features, benefits, and tech stack.',
    preview:'Landing page for the Cardinal Wishlist application, showcasing features, benefits, and tech stack.',
    link: 'https://cardinal-wishlist.vercel.app/',

  },
  {
    title: 'Portfolio',
    images: [portfolioPage],
    tags: ['React', 'Chakra UI', 'Vite', 'JavaScript', 'Vercel', 'Node.js'],
    description: 'This portfolio is a high-performance Single Page Application (SPA) designed to act as a professional digital resume and a testing ground for new technologies. It prioritizes user experience through responsive design, dark-mode support, and custom-engineered UI components like 3D flip cards and search filters.\nBeyond standard project showcasing, the site includes an interactive Playground where external APIs, such as Google Gemini, are integrated to demonstrate live AI implementation. The deployment pipeline is optimized via Vercel, utilizing rewrites to maintain clean client-side routing across all project detail pages.',
    preview: 'Showcasing my work and skills as a computer science student.',
    link: '/',
    keyfeatures:
    [
      'Dynamic Content Filtering: Built a real-time search and multi-tag filtering system that allows users to instantly navigate a large project database without additional server overhead.',
      'Responsive Architecture: Designed a mobile-first UI using Chakra UI v3, featuring a sticky profile card layout and conditional rendering for various screen breakpoints.',
      'Interactive Playground: Developed a dedicated section for live API demonstrations, including a Google Gemini integration that allows users to experience AI-generated content in real time.',
    ]
  },
  {
    title: 'BlueJay Computer Catalog',
    images: [blujayPage1, blujayPage2, blujayPage3],
    keyfeatures: 
    [
      'Role-Based Security (RBAC): Engineered a stateless authentication system using JWT and BCrypt password hashing, enforcing strict Admin-only write permissions across the catalog.',
      'Cloud Storage Integration: Configured a secure AWS S3 integration to manage multipart profile image uploads, utilizing the AWS SDK for Java to coordinate S3 storage with PostgreSQL metadata.',
      'Enterprise Spring Architecture: Developed a RESTful API using Spring Boot 3, implementing dual data access via JPA for complex builds and JDBC for high-performance customer queries.',
    ],
    tags: ['React', 'Chakra UI', 'Vite', 'JavaScript', 'Java', 'Spring Boot', 'PostgreSQL', 'AWS', 'Docker', 'Render'],
    description: 'A full-stack PC parts management system that allows users to browse PC components,  custom builds, and user profiles. Built with React/Vite frontend and Spring Boot backend, the application provides secure user authentication via JWT tokens and stores user profile imagess in AWS S3. The system features role-based access control (Admin/User) and uses PostgreSQL for data persistence with Flyway for database migrations.',
    preview: 'Full stack web application for browsing and managing computer parts, built with React, Spring Boot, and PostgreSQL.',
    link: 'https://blujay-pc-builds.onrender.com/dashboard/parts',
    github: 'https://github.com/sacostapliego/pc-parts-springboot',
    warning: 'This website is hosted on a free tier and may take up to 3-4 minutes to load.',
  },
  {
    title: 'AI Try-On Closet',
    images: [aicloset],
    tags: ['React', 'Tailwind CSS', 'Vite', 'TypeScript', 'FastAPI', 'PostgreSQL', 'pgAdmin', 'Gemini AI', 'Hugging Face'],
    description: 'The AI Virtual Closet is an innovative technical experiment that merges vintage Club Penguin aesthetics with modern generative AI to allow users to try on clothes digitally. The application manages a complex local environment where users can upload and catalog their own wardrobe items for use in AI-generated previews. \n Technically, the project focuses on orchestrating multiple image inputs (person, shirt, and pants) into a single, coherent prompt for a multimodal AI model. The backend handles heavy image processing tasks locally, including real-time background removal and model fallbacks.',
    preview: 'A full-stack AI-powered, Club Penguin inspired, closet that allows users to upload photos and generate photorealistic images of themselves wearing selected clothing items.',
    warning: 'This is only able to work locally',
    github: 'https://github.com/sacostapliego/penguin-outfits',
    keyfeatures: 
    [
      'Multimodal AI Orchestration: Integrated the Gemini 2.5 Flash Image model to perform virtual try-ons by processing three separate image inputs into a unified generative output.',
      'Backend Image Processing: Developed a Python-based processing pipeline utilizing the rembg library and Pillow to strip backgrounds from generated results and normalize image formats to PNG/RGBA.',
      'Relational Inventory Management: Built a PostgreSQL-backed inventory system using SQLAlchemy to track clothing items, user generation history, and file paths.',
    ],
  },
  {
    title: 'Automated AI Resume Tailoring Pipeline (n8n)',
    images: [n8nPage, n8nPage2],
    tags: ['n8n', 'JavaScript', 'Google Gemini API', 'Browserless.io', 'Google Drive API', 'Discord Webhooks'],
    description: 'This project is an automated end-to-end pipeline designed to monitor job repositories and generate tailored application materials in real-time. The workflow orchestrates complex interactions between web scrapers, generative AI, and cloud storage to eliminate the manual overhead of custom resume creation. By leveraging asynchronous processing and automated data extraction, the system identifies new job postings, scrapes full descriptions via a headless browser, and utilizes AI to refactor personal project data to match specific job requirements. The final output is a professional, hyper-linked PDF delivered automatically to a monitoring channel.',
    preview: 'An automated end-to-end pipeline designed to monitor job repositories and generate tailored application materials in real-time.',
    warning: 'This only works on a local n8n instance',
    keyfeatures: 
    [
      'Automated Pipeline Orchestration: Designed an n8n workflow that triggers hourly to synchronize data between GitHub repositories, AI models, and Google Workspace.',
      'Intelligent Data Refactoring: Engineered a multi-stage prompt system using the Gemini 2.5 Flash model to transform raw Project Bank data into targeted, X-Y-Z formatted resume bullets.',
      'Automated Document Engineering: Developed a custom JavaScript processor to find text positions within Google Docs and programmatically inject functional hyperlinks for projects and social proof.',
      'Real-Time Notification System: Built a Discord integration via webhooks to provide instant delivery of tailored resumes and system health alerts, ensuring immediate awareness of new opportunities.'
    ],
  },
  
];

export default projectData;