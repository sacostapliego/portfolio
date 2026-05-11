import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, IconButton, VStack, Text, List, Flex, Wrap, Badge, Icon } from '@chakra-ui/react';
import { BiError } from "react-icons/bi";
import { FaChevronLeft, FaChevronRight, FaRegStar, FaGithub } from 'react-icons/fa';
import projectData from '../ProjectData';
import HoverArrowButton from '../../common/HoverArrowButton';
import SocialIconButton from '../../common/SocialIconButton';


function RightSideProjectsPage() {
  const { projectName } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const project = projectData.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === projectName
  );
  

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <VStack gap={{base:'0.5rem'}} align="stretch" w="100%">
      {/* Image Gallery */}
      <Box 
        position="relative" 
        mb="1.5rem"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={project.images[currentImageIndex]}
          alt={`${project.title} - Image ${currentImageIndex + 1}`}
          borderRadius="xl"
          w="100%"
        />

        {/* Show navigation arrows only if there are multiple images and on hover */}
        {project.images.length > 1 && isHovered && (
          <>
            <IconButton
              position="absolute"
              left="1rem"
              top="50%"
              transform="translateY(-50%)"
              onClick={handlePrevious}
              aria-label="Previous image"
              borderRadius="full"
              bg="rgba(0, 0, 0, 0.6)"
              color="white"
              _hover={{ bg: "rgba(0, 0, 0, 0.8)" }}
              size="lg"
            >
              <FaChevronLeft />
            </IconButton>

            <IconButton
              position="absolute"
              right="1rem"
              top="50%"
              transform="translateY(-50%)"
              onClick={handleNext}
              aria-label="Next image"
              borderRadius="full"
              bg="rgba(0, 0, 0, 0.6)"
              color="white"
              _hover={{ bg: "rgba(0, 0, 0, 0.8)" }}
              size="lg"
            >
              <FaChevronRight />
            </IconButton>
          </>
        )}
      </Box>
      {/* Warning Note */}
      {project.warning && (
        <Box
          mb="1.5rem"
          display="flex"
          alignItems="center"
          p="1rem"
          borderRadius="md"
          border="1px solid rgba(255, 255, 0, 0.5)"
          justifyContent={'center'}
        >
          <Icon as={BiError} boxSize={{ base: "1.5rem", md: "1rem", '2xl': "1.5rem" }} color="yellow.400" mr="0.5rem" />
          <Text fontSize={{ base: "0.7rem", md: "0.7rem", '2xl': "1rem" }} color="yellow.300" fontWeight="600">
            {project.warning}
          </Text>
        </Box>
      )}

      {/* Links Section */}
      {(project.link || project.github) && (
        <Flex 
          direction={{ base: 'column', xl: 'row' }}
          justify="space-between"
          align={{ base: 'center', xl: 'flex-start' }}
          gap={{ base: 4, xl: 3 }}
          mb={{ base: 3, md: 0 }}
        >
          {/* External Website Button */}
          {project.link && (
            <HoverArrowButton
              href={project.link}
              children={`Go To ${project.title}`}
            />
          )}
          {/* GitHub Link */}
          {project.github && (
            <HoverArrowButton 
              href={project.github} 
              children={`Repository`}
              leftIcon={FaGithub}
              color='white'
              bg='#1d1d1d'
            />
          )}
        </Flex>
      )}

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
    </VStack>
  );
}

export default RightSideProjectsPage;