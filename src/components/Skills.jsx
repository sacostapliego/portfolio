import { useEffect, useRef } from 'react';
import { Box, SimpleGrid, Heading, Text, VStack, Image, Icon } from '@chakra-ui/react';
import './animations/reveal.css';
import skillsData from './common/SkillsData'; // Import the skills data

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
        <Text color="rgba(251,247,245)" display="block">TECHNICAL</Text>
        <Text color="rgba(255,255,255,0.3)" display="block">SKILLS</Text>
      </Heading>

      <SimpleGrid
        columns={{ base: 2, md: 3, lg: 3 }}
        alignItems="center"
        justifyItems="center"
        gapX={6}
        gapY={{base: 10, md: 6}}
        w="100%"
      >
        {skillsData.map((skill, idx) => (
          <Box
            key={idx}
            borderRadius="0.75rem"
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            alignItems="center"
            justifyContent="flex-start" 
            w={'100%'}
            h="6rem"
            transition="transform 200ms ease, background-color 200ms ease, box-shadow 200ms ease"
            _hover={{
              bg: 'rgba(25,25,25,0.95)',
            }}
            aria-hidden="true"
            padding={4}
            cursor="default"
          >
            <Image
              src={skill.imageSrc}
              alt={skill.title}
              boxSize="4rem"
              borderRadius="full"
              mr={4}
            />
            <VStack align="center" spacing={0}>
              <Text w="full" fontSize={{base:"1.25rem", lg:'1rem', '2xl':"1.2.5rem"}} fontWeight="bold" color="rgba(251,247,245)">
                {skill.title}
              </Text>
              <Text w="full" fontSize={{ base: "0rem", md: "0.875rem" }} fontWeight="light" color="rgba(255,255,255,0.7)">
                {skill.subtitle}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;