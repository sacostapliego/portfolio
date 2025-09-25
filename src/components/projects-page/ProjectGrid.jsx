import React from 'react';
import { Box, SimpleGrid, VStack, Image, Heading, Text, Icon, HStack, Tag, Link, Separator, Wrap, Badge } from '@chakra-ui/react';
import { LuArrowUpRight } from 'react-icons/lu';
import projectData from './ProjectData';

const ProjectGrid = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }} // 1 column for mobile, 2 for desktop
      spacing={'6rem'}
      gap={'2rem'}
      w="100%"
    >
      {projectData.map((project, idx) => (
        <Link
          key={idx}
          href={project.link}
          isExternal
          target='_blank'
          _hover={{ textDecoration: 'none' }}
          _focus={{ boxShadow: 'none', outline: 'none' }}
          _focusVisible={{ boxShadow: 'none', outline: 'none' }}
          _active={{ boxShadow: 'none', outline: 'none' }}
          sx={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <Box
            borderRadius="1rem"
            p={4}
            transition="transform 200ms ease, background-color 200ms ease, box-shadow 200ms ease"
            w={"100%"}
            h="100%"
            display="flex"
            flexDirection="column"
            _hover={{
              bg: 'rgba(25, 25, 25, 0.95)',
            }}
          >
            <VStack align="stretch" spacing={4}>
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                borderRadius="0.5rem"
                objectFit="cover"
                w="100%"
              />

              {/* Title and Arrow */}
              <HStack justify="space-between" align="center">
                <Heading as="h3" fontSize="lg" color="white" fontWeight="bold">
                  {project.title}
                </Heading>
                <Icon as={LuArrowUpRight} boxSize={5} color="teal.200" />
              </HStack>

              {/* Tags/Chips */}
              <Wrap spacing={2}>
                {project.tags.map((tag, tagIdx) => (
                  <Badge key={tagIdx} size="sm" backgroundColor="rgba(43, 43, 43, 1)">
                    {tag}
                  </Badge>
                ))}
              </Wrap>

              {/* Separator */}
              <Separator />

              {/* Description */}
              <Text fontSize="sm" color="gray.300">
                {project.description}
              </Text>
            </VStack>
          </Box>
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default ProjectGrid;