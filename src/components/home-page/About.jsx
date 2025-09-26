import { useEffect, useRef } from 'react';
import {
  Box,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react';
import '../animations/reveal.css';
import AboutCard from './components/AboutCard'

const About = () => {
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
      mb={{ base: '2rem', md: '4rem' }}
    >
      <Heading
        as="h1"
        fontWeight="900"
        lineHeight="1.05"
        fontSize={{ base: '2.5rem', md: '3rem', lg: '4rem' }}
        mb={{ base: '1.5rem', md: '2rem' }}
      >
        <Text color="rgba(251,247,245)" display="block">MORE</Text>
        <Text color="rgba(255,255,255,0.3)" display="block">ABOUT ME</Text>
      </Heading>

      {/* container for staggered reveal (reveal.css targets .projects-grid > *) */}
      <Stack className="projects-grid" spacing={{ base: 4, md: 5 }} alignItems="flex-start">
        <AboutCard
          title="Today"
          desc="I am currently attending Georgia State University, pursuing a bachelor's degree in computer science. Immersing myself in Atlanta's energetic and fast-paced environment has greatly influenced my creativity and personal growth. The computer science program provides a strong foundation for me to explore areas that interest me, from complex concepts like artificial intelligence to more creatively oriented processes such as web development."
          href="#"
        />
        <AboutCard
          title="Hobbies"
          desc="One of the newest hobbies I picked up over the last year has been researching and assembling custom PCs. So far, I have built my own PC; however, I am always researching ways to upgrade it or even build a separate PC. I plan for my next personal project to be a micro ATX build. In addition to building my own PC, I have used this experience to help my little brother build his own."
          href="https://cardinal-wishlist.vercel.app/"
        />
        <AboutCard
          title="Relevant courses"
          desc="
          Software Development, Big Data Programming, Web Programming,
          Data Structures, Computer Organization, System-Level Programming, 
          Linear Algebra, Discrete Math Principles of Computer Science I & II
          "
          href="https://cardinal-wishlist.onrender.com/"
        />
      </Stack>

    </Box>
  );
};

export default About;