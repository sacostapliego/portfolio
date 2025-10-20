import { useEffect, useRef } from 'react';
import {
  Box,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react';
import '../animations/reveal.css'
import ProjectCard from './components/ProjectCard';

import cardinalAppImage from '../assets/projects/recent/cardinal.png'
import aiclosetImage from '../assets/projects/recent/ai-closet.png'
import portfolioImage from '../assets/projects/full/portfolio-full.png'


const RecentProjects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          io.disconnect(); // animate once
        }
      },
      { threshold: 0.5 } // require 50% visible
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Box
      as="section"
      id="projects"
      ref={sectionRef}
      className="reveal"
      mt={{ base: '4rem', md: '6rem' }}
    >
      <Heading
        as="h1"
        fontWeight="900"
        lineHeight="1.05"
        fontSize={{ base: '2.5rem', md: '3rem', lg: '4rem' }}
        mb={{ base: '1.5rem', md: '2rem' }}
      >
        <Text color="rgba(251,247,245)" display="block">RECENT</Text>
        <Text color="rgba(255,255,255,0.3)" display="block">PROJECTS</Text>
      </Heading>

      {/* container for staggered reveal (reveal.css targets .projects-grid > *) */}
      <Stack className="projects-grid" spacing={{ base: 4, md: 5 }} alignItems="flex-start">
        <ProjectCard
          title="Cardinal Wishlist"
          desc="Full stack web and mobile application to manage and share wishlists, 
          built with React, React Native, Expo, s3, Supabase Auth and fastAPI."
          href="https://cardinal-wishlist.onrender.com/"
          image={cardinalAppImage}
        />
        <ProjectCard
          title="AI Try-On Closet"
          desc="A full-stack AI-powered, Club Penguin inspired, closet that allows users to upload photos and generate photorealistic images of themselves wearing selected clothing items."
          href="https://github.com/sacostapliego/penguin-outfits"
          image={aiclosetImage}
        />
        <ProjectCard
          title="Portfolio"
          desc="Showcasing my work and skills as a computer science student."
          href="#"
          image={portfolioImage}
        />
      </Stack>

    </Box>
  );
};

export default RecentProjects;