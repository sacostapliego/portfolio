import { useEffect, useRef } from 'react';
import { Box, SimpleGrid, Heading, Text } from '@chakra-ui/react'
import './animations/reveal.css'

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
      { threshold: 0.50 } // 50% of the section is visible
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
        fontSize={{ base: '2.5rem', md: '5rem', xl: '6rem' }}
        mb={{ base: 4, md: 2 }}
      >
        <Text color="white" display="block">RECENT</Text>
        <Text color="rgba(255,255,255,0.6)" display="block">PROJECTS</Text>
      </Heading>

      <SimpleGrid minChildWidth="18rem" spacing="1.25rem">
        <Box
          bg="rgba(25,25,25,0.8)"
          borderRadius="1rem"
          p="1.25rem"
          minH="8rem"
          color="rgba(255,255,255,0.85)"
        >
          <Heading as="h3" fontSize="lg" color="#fff" fontWeight="800" mb="0.35rem">
            Project One
          </Heading>
          <Text fontSize="sm">Short description of what it is and the stack.</Text>
        </Box>

        <Box
          bg="rgba(25,25,25,0.8)"
          borderRadius="1rem"
          p="1.25rem"
          minH="8rem"
          color="rgba(255,255,255,0.85)"
        >
          <Heading as="h3" fontSize="lg" color="#fff" fontWeight="800" mb="0.35rem">
            Project Two
          </Heading>
          <Text fontSize="sm">Short description of what it is and the stack.</Text>
        </Box>

        <Box
          bg="rgba(25,25,25,0.8)"
          borderRadius="1rem"
          p="1.25rem"
          minH="8rem"
          color="rgba(255,255,255,0.85)"
        >
          <Heading as="h3" fontSize="lg" color="#fff" fontWeight="800" mb="0.35rem">
            Project Three
          </Heading>
          <Text fontSize="sm">Short description of what it is and the stack.</Text>
        </Box>
      </SimpleGrid>

      <Box h={{ base: '6rem', md: '8rem' }} />
    </Box>
  )
}

export default RecentProjects