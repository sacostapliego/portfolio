// Cardinal Landing Images
import cardinalLandingPage from '../assets/projects/full/cardinal-landing-full.png'

// Cardinal Wishlist Images
import cardinalPage from '../assets/projects/full/cardinal-full.png'

// BluJay Images
import blujayPage1 from '../assets/projects/full/blujay-full1.png'
import blujayPage2 from '../assets/projects/full/blujay-full2.png'
import blujayPage3 from '../assets/projects/full/blujay-full3.png'

// Portfolio Images
import portfolioPage from '../assets/projects/full/portfolio-full.png'

// AI Closet Images
import aicloset from '../assets/projects/full/ai-closet-full.png'

const projectData = [
  {
    title: 'Cardinal Wishlist',
    images: [cardinalPage],
    tags: ['React Native','Expo', 'Node.js', 'Supabase', 'FastAPI', 'AWS', 'TypeScript', 'Python', 'Render', 'PostgreSQL'],
    preview: 'Full stack web and mobile application to manage and share wishlists, built with React, React Native, Expo, S3, Supabase Auth, and FastAPI.',
    description: 'Full stack web and mobile application to manage and share wishlists, built with React, React Native, Expo, S3, Supabase Auth, and FastAPI.',
    link: 'https://cardinal-wishlist.onrender.com/',
    warning: 'This website is hosted on a free tier and may take up to 2-3 minutes to load.',
    overview: '',
    github: 'https://github.com/sacostapliego/wishlist'
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
    description: 'Showcasing my work and skills as a computer science student.',
    preview: 'Showcasing my work and skills as a computer science student.',
    link: '/',
  },
  {
    title: 'BlueJay Computer Catalog',
    images: [blujayPage1, blujayPage2, blujayPage3],
    tags: ['React', 'Chakra UI', 'Vite', 'JavaScript', 'Java', 'Spring Boot', 'PostgreSQL', 'AWS', 'Docker', 'Render'],
    description: 'A full-stack PC parts management system that allows users to browse PC components,  custom builds, and user profiles. Built with React/Vite frontend and Spring Boot backend, the application provides secure user authentication via JWT tokens and stores user profile imagess in AWS S3. The system features role-based access control (Admin/User) and uses PostgreSQL for data persistence with Flyway for database migrations.',
    preview: 'Full stack web application for browsing and managing computer parts, built with React, Spring Boot, and PostgreSQL.',
    link: 'https://blujay-pc-builds.onrender.com/dashboard/parts',
    warning: 'This website is hosted on a free tier and may take up to 3-4 minutes to load.',
    github: 'https://github.com/sacostapliego/pc-parts-springboot'
  },
  {
    title: 'AI Try-On Closet',
    images: [aicloset],
    tags: ['React', 'Tailwind CSS', 'Vite', 'TypeScript', 'FastAPI', 'PostgreSQL', 'pgAdmin', 'Gemini AI', 'Hugging Face'],
    description: 'A full-stack AI-powered closet that allows users to upload photos and generate photorealistic images of themselves wearing selected clothing items. Built with a React + Tailwind CSS frontend and a FastAPI backend, it integrates Google Gemini AI for image generation. Users can manage a personal wardrobe and view their generated outfit history in an interactive, game-inspired interface.',
    preview: 'A full-stack AI-powered closet that allows users to upload photos and generate photorealistic images of themselves wearing selected clothing items. Built with a React + Tailwind CSS frontend and a FastAPI backend, it integrates Google Gemini AI for image generation. Users can manage a personal wardrobe and view their generated outfit history in an interactive, game-inspired interface.',
    warning: 'This is only able to work locally',
    github: 'https://github.com/sacostapliego/penguin-outfits',
  },
  
];

export default projectData;