import { Box, SimpleGrid, Text, Wrap, Badge, VStack, Image } from '@chakra-ui/react';
import '../animations/flip-card.css';

const SkillsGrid = ({ skillsData }) => {
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
            textAlign="center" // Center the category title
          >
            {category.category}
          </Text>

          <SimpleGrid 
            columns={{ base: 1, md: 2 }} 
            gapX={6}
            gapY={{ base: 10, md: 6 }}
          >
            {category.skills.map((skill, skillIdx) => (
              <Box key={skillIdx} className="flip-card" w="100%" h="6rem" borderRadius="0.75rem">
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
                    <VStack align="flex-start" spacing={0}>
                      <Text
                        fontSize={{ base: '1.25rem', lg: '1.25rem', '2xl': '1.5rem' }}
                        fontWeight="bolder"
                        color="rgba(251,247,245)"
                        justifyContent={'flex-start'}
                        alignItems={'flex-start'}
                        w={'full'}
                      >
                        {skill.title}
                      </Text>
                      <Text
                        fontSize={{ base: '0.875rem', lg: '0.875rem' }}
                        fontWeight="light"
                        color="rgba(255,255,255,0.7)"
                        w={'full'}
                      >
                        {skill.subtitle}
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
                  >
                    <Text fontSize="0.7rem" color="gray.300" mb="0.5rem">
                      Proficiency: {skill.proficiency}
                    </Text>
                    <Wrap spacing={2} justify="flex-start">
                      {skill.tags.map((tag, tagIdx) => (
                        <Badge key={tagIdx} size="xs" backgroundColor="rgba(43, 43, 43, 1)">
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