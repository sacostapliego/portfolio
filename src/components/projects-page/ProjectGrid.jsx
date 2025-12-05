import React from 'react';
import { Box, SimpleGrid, VStack, Image, Heading, Text, Icon, HStack, Wrap, Badge, Separator } from '@chakra-ui/react';
import { LuArrowUpRight } from 'react-icons/lu';
import { Link } from 'react-router-dom'; // Import React Router's Link

const ProjectGrid = ({ projects }) => {
  return (
    <Box>
      <SimpleGrid
        columns={{ base: 1, md: 2 }} // 1 column for mobile, 2 for desktop
        spacing={'6rem'}
        gap={'2rem'}
        w="100%"
      >
        {projects.map((project, idx) => (
          <Link
            key={idx}
            to={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`} // Dynamic route
            style={{ textDecoration: 'none' }} // Remove default link styling
          >
            <Box
              borderRadius="1rem"
              p={4}
              transition="transform 200ms ease, background-color 200ms ease, box-shadow 200ms ease"
              w={'100%'}
              maxWidth="700px"
              h="100%"
              display="flex"
              flexDirection="column"
              _hover={{
                bg: 'rgba(25, 25, 25, 0.95)',
              }}
            >
              <VStack align="stretch" spacing={4}>
                {/* Project images */}
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  borderRadius="0.5rem"
                  w="100%"
                />

                {/* Title and Arrow */}
                <HStack justify="space-between" align="center">
                  <Heading as="h3" fontSize="lg" color="white" fontWeight="bold">
                    {project.title}
                  </Heading>
                  <Icon as={LuArrowUpRight} boxSize={5} color="white" />
                </HStack>

                {/* Tags/Chips */}
                <Wrap spacing={2}>
                  {project.tags.map((tag, tagIdx) => (
                    <Badge key={tagIdx} size="sm" color={'white'} backgroundColor="rgba(43, 43, 43, 1)">
                      {tag}
                    </Badge>
                  ))}
                </Wrap>

                {/* Separator */}
                <Separator />

                {/* Description */}
                <Text fontSize="sm" color="gray.300">
                  {project.preview}
                </Text>
              </VStack>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectGrid;