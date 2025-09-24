import { useEffect, useRef } from 'react';
import {
  Box,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react';
import './animations/reveal.css';
import ProjectCard from './common/ProjectCard';
import cardinalLanding from '../images/cardinal-landing.png';

const PLACEHOLDER = 'https://i.sstatic.net/9AF6f.png';

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
        <Text color="white" display="block">RECENT</Text>
        <Text color="rgba(255,255,255,0.3)" display="block">PROJECTS</Text>
      </Heading>

      {/* container for staggered reveal (reveal.css targets .projects-grid > *) */}
      <Stack className="projects-grid" spacing={{ base: 4, md: 5 }} alignItems="flex-start">
        <ProjectCard
          title="Cardinal Wishlist"
          desc="Full stack web and mobile application to manage and share wishlists, 
          built with React, React Native, Expo, s3, Supabase Auth and fastAPI."
          href="https://cardinal-wishlist.onrender.com/"
          image={cardinalLanding}
        />
        <ProjectCard
          title="Cardinal Wishlist Landing Page"
          desc="Landing page for the Cardinal Wishlist application, showcasing features and benefits."
          href="https://cardinal-wishlist.vercel.app/"
          image={cardinalLanding}
        />
        <ProjectCard
          title="Portfolio"
          desc="Showcasing my work and skills as a computer science student."
          href="#"
          image={PLACEHOLDER}
        />
      </Stack>

    </Box>
  );
};

export default RecentProjects;