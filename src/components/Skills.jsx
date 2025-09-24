import { useEffect, useRef } from 'react';
import { Box, SimpleGrid, Heading, Text, Icon, VStack } from '@chakra-ui/react';
import { DiPython } from 'react-icons/di';
import './animations/reveal.css';

const PLACEHOLDER = 'https://i.sstatic.net/9AF6f.png';

const Skills = () => {
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

  const items = Array.from({ length: 12 });

  return (
    <Box
      as="section"
      id="skills"
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
        <Text color="white" display="block">TECHNICAL</Text>
        <Text color="rgba(255,255,255,0.3)" display="block">SKILLS</Text>
      </Heading>

      <SimpleGrid
        columns={{ base: 2, md: 3, lg: 3 }} /* mobile: 2 cols (2x6), desktop: 3 cols (3x4) */
        alignItems="center"
        justifyItems="center"
        gapX={0}
        gapY={4}
        w={'100%'}
      >
        {items.map((_, idx) => (
          <Box
            key={idx}
            borderRadius="0.75rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
            h={{ base: '4.5rem', md: '5.5rem', lg: '6rem' }}
            transition="transform 200ms ease, background-color 200ms ease, box-shadow 200ms ease"
            _hover={{
              bg: 'rgba(25,25,25,0.95)',
            }}
            aria-hidden="true"
            padding={3}
          >
            <Icon as={DiPython} boxSize={{ base: '4.5rem', md: '5.5rem', lg: '5rem' }} color="black" background={'white'} borderRadius="0.75rem"/>
            <VStack paddingX={4} align="flex-start" gap={'0.125rem'}>
              <Text fontSize={{ base: '1.25rem', md: '1.5rem' }} fontWeight="bold">Python</Text>
              <Text fontSize={{ base: '1.25rem', md: '1.15rem' }} fontWeight={'light'} color="rgba(255,255,255,0.7)">Programming</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;