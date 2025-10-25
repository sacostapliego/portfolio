import { Box, SimpleGrid, Text, Wrap, Badge, VStack, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import '../animations/flip-card.css';

const SkillsGrid = ({ skillsData }) => {
  const [flippedCard, setFlippedCard] = useState({ categoryIdx: null, skillIdx: null });

  useEffect(() => {
    // Automatically flip the first card
    const flipTimeout = setTimeout(() => {
      setFlippedCard({ categoryIdx: 0, skillIdx: 0 }); // Flip the first card in the first catalog
      setTimeout(() => {
        setFlippedCard({ categoryIdx: null, skillIdx: null }); // Flip it back after 750ms
      }, 750);
    }, 250); // Delay before flipping the card

    return () => clearTimeout(flipTimeout); // Cleanup timeout
  }, []);

  return (
    <SimpleGrid 
      columns={{ base: 1, lg: 2 }} 
      gapX={6}
      gapY={{ base: 10, md: 6 }} 
      w="100%"
    >
      {skillsData.map((category, categoryIdx) => (
        <Box key={categoryIdx} w="100%">
          <Text
            as="h2"
            fontSize={{ base: '1.5rem', lg: '2rem' }}
            fontWeight="bold"
            color="rgba(251,247,245)"
            mb="1.5rem"
            textAlign="center"
          >
            {category.category}
          </Text>

          <SimpleGrid 
            columns={{ base: 1, md: 2 }} 
            gapX={6}
            gapY={{ base: 10, md: 6 }}
          >
            {category.skills.map((skill, skillIdx) => (
              <Box 
                key={skillIdx} 
                className={`flip-card ${
                  flippedCard.categoryIdx === categoryIdx && flippedCard.skillIdx === skillIdx
                    ? 'flipped'
                    : ''
                }`} 
                w="100%" 
                h="6rem" 
                borderRadius="0.75rem"
              >
                <Box className="flip-card-inner" w="100%" h="100%">
                  {/* Front Side */}
                  <Box
                    className="flip-card-front"
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="flex-start"
                    p="1rem"
                    borderRadius="0.75rem"
                    cursor={'default'}
                  >
                    {/* Image on the left */}
                    <Box
                      boxSize="4rem"
                      background="white"
                      borderRadius="0.5rem"
                      padding="0.5rem"
                      mr="1rem"
                    >
                      <Image src={skill.imageSrc} alt={skill.title} />
                    </Box>

                    {/* Title and Subtitle */}
                    <VStack align="flex-start" gapY={1}>
                      <Text
                        fontSize={{ base: '1.25rem', lg: '1.25rem', '2xl': '1.5rem' }}
                        fontWeight="bolder"
                        color="rgba(251,247,245)"
                        w={'full'}
                        textAlign={'left'}
                      >
                        {skill.title}
                      </Text>
                    </VStack>
                  </Box>

                  {/* Back Side */}
                  <Box
                    className="flip-card-back"
                    w="100%"
                    h="100%"
                    display="flex"
                    flexDirection="column"
                    p="1rem"
                    borderRadius="0.75rem"
                    bg="rgba(25,25,25,0.95)"
                    alignItems={'flex-start'}
                    cursor={'default'}
                  >
                    <Wrap spacing={2} justify="flex-start">
                      {skill.tags.map((tag, tagIdx) => (
                        <Badge 
                          key={tagIdx}
                          size={{ base: "sm", md: "xs", '2xl': "sm" }} 
                          backgroundColor="rgba(43, 43, 43, 1)"
                          color={'white'}
                          >
                          {tag}
                        </Badge>
                      ))}
                    </Wrap>
                  </Box>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default SkillsGrid;