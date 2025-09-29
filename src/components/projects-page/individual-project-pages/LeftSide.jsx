import { useParams } from 'react-router-dom';
import { Box, Heading, Text, Flex, Wrap, Badge, Separator, Button, Icon } from '@chakra-ui/react';
import projectData from '../ProjectData';
import { BiError } from "react-icons/bi";
import HoverArrowButton from '../../common/HoverArrowButton';


function LeftSideProjectsPage() {
  const { projectName } = useParams();

  const project = projectData.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === projectName
  );

  return (
    <Flex
      direction="column"
      className="fade-in"
      px={{ base: '1rem', lg: '2.5rem' }}
      pb="2.5rem"
      mx="auto"
      w="100%"
    >
      <Box>
        {/* Title */}
        <Heading
          as="h1"
          fontSize={{ base: '2rem', md: '2.5rem', lg: '3.5rem' }}
          mb={{ base: '1.5rem', md: '1.5rem' }}
        >
          <Text color="rgba(251,247,245)" fontWeight="900">
            {project.title}
          </Text>
        </Heading>

        {/* Separator */}
        <Separator mb="1.5rem" />

        {/* Description */}
        <Text fontSize="1rem" color="gray.300" mb="2rem">
          {project.description}
        </Text>

        {/* Warning Note */}
        {project.warning && (
          <Box
            mb="1.5rem"
            display="flex"
            alignItems="center"
            p="1rem"
            borderRadius="md"
            border="1px solid rgba(255, 255, 0, 0.5)"
          >
            <Icon as={BiError} boxSize={{ base: "1.5rem", md: "1rem", '2xl': "1.5rem" }} color="yellow.400" mr="0.5rem" />
            <Text fontSize={{ base: "0.7rem", md: "0.7rem", '2xl': "1rem" }} color="yellow.300" fontWeight="600">
              {project.warning}
            </Text>
          </Box>
        )}
  
        {/* External Website Button */}
        <HoverArrowButton
          href={project.link}
          children={`Go To ${project.title}`} // Dynamically set button text
        />

        {/* Technologies Used */}
        <Wrap spacing={2}>
          {project.tags.map((tag, index) => (
            <Badge
              key={index}
              color="white"
              backgroundColor="rgba(43, 43, 43, 1)"
              fontSize="0.9rem"
              px="2"
              py="1"
              borderRadius="md"
            >
              {tag}
            </Badge>
          ))}
        </Wrap>
      </Box>
    </Flex>
  );
}

export default LeftSideProjectsPage;