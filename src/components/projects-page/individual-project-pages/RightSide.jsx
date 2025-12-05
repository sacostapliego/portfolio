import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, IconButton, VStack, Heading, Text, List, ListItem } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight, FaRegStar } from 'react-icons/fa';
import projectData from '../ProjectData';

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

      {project.keyfeatures && project.keyfeatures.length > 0 && (
        <Box >
          <Heading
            as="h2"
            fontSize={{ base: "1.2rem", md: "1.2rem", '2xl': "1.5rem" }}
            mb="1rem"
            color="rgba(251,247,245)"
            fontWeight="700"
            display="flex"
            alignItems="center"
            gap={'0.5rem'}
          >
            <FaRegStar color="white" />
            Key Features
          </Heading>
          
          <List.Root gap={'1rem'} pl={'2rem'}>
            {project.keyfeatures.map((feature, index) => (
              <List.Item
                key={index}
                fontSize="1rem"
                color="gray.300"
                lineHeight="1.6"
              >
                {feature}
              </List.Item>
            ))}
          </List.Root>
        </Box>
      )}

    </VStack>
  );
}

export default RightSideProjectsPage;