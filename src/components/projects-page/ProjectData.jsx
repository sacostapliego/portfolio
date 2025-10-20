import cardinalLandingPage from '../assets/projects/full/cardinal-landing-full.png'
import cardinalPage from '../assets/projects/full/cardinal-full.png'
import blujayPage from '../assets/projects/full/blujay-full.png'
import portfolioPage from '../assets/projects/full/portfolio-full.png'
import aicloset from '../assets/projects/full/ai-closet-full.png'

const projectData = [
  {
    title: 'Cardinal Wishlist',
    image: cardinalPage,
    tags: ['React Native','Expo', 'Node.js', 'Supabase', 'FastAPI', 'AWS', 'TypeScript', 'Python', 'Render', 'PostgreSQL'],
    description:
      'Full stack web and mobile application to manage and share wishlists, built with React, React Native, Expo, S3, Supabase Auth, and FastAPI.',
    link: 'https://cardinal-wishlist.onrender.com/',
    warning: 'This website is hosted on a free tier and may take up to 2-3 minutes to load.',
    overview: '',
  },
  {
    title: 'Cardinal Wishlist Landing Page',
    image: cardinalLandingPage,
    tags: ['React', 'Chakra UI', 'Vercel', 'JavaScript', 'Vite'],
    description:
      'Landing page for the Cardinal Wishlist application, showcasing features, benefits, and tech stack.',
    link: 'https://cardinal-wishlist.vercel.app/',
  },
  {
    title: 'Portfolio',
    image: portfolioPage,
    tags: ['React', 'Chakra UI', 'Vite', 'JavaScript', 'Vercel', 'Node.js'],
    description: 'Showcasing my work and skills as a computer science student.',
    link: '/',
  },
  {
    title: 'BlueJay Computer Catalog',
    image: blujayPage,
    tags: ['React', 'Chakra UI', 'Vite', 'JavaScript', 'Java', 'Spring Boot', 'PostgreSQL', 'AWS', 'Docker', 'Render'],
    description: 'Full stack web application for browsing and managing computer parts, built with React, Spring Boot, and PostgreSQL.',
    link: 'https://blujay-pc-builds.onrender.com/dashboard/parts',
    warning: 'This website is hosted on a free tier and may take up to 3-4 minutes to load.',
  },
  {
    title: 'AI Try-On Closet',
    image: aicloset,
    tags: ['React', 'Tailwind CSS', 'Vite', 'TypeScript', 'FastAPI', 'PostgreSQL', 'pgAdmin', 'Gemini AI', 'Hugging Face'],
    description: 'A full-stack AI-powered closet that allows users to upload photos and generate photorealistic images of themselves wearing selected clothing items. Built with a React + Tailwind CSS frontend and a FastAPI backend, it integrates Google Gemini AI for image generation. Users can manage a personal wardrobe and view their generated outfit history in an interactive, game-inspired interface.',
    warning: 'This is only able to work locally',
    link: 'https://github.com/sacostapliego/penguin-outfits',
  },
  
];

export default projectData;