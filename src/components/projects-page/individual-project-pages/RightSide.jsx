import { useParams } from 'react-router-dom';
import { Box, Image, Button, Text, VStack } from '@chakra-ui/react';
import { BiError } from "react-icons/bi";
import projectData from '../ProjectData';


function RightSideProjectsPage() {
  const { projectName } = useParams();

  const project = projectData.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === projectName
  );

  return (
    <VStack spacing={4} align="stretch" w="100%">
      {/* Project Image */}
      <Box mb="1.5rem">
        <Image
          src={project.image}
          alt={project.title}
          borderRadius="xl"
          w="100%"
        />
      </Box>

      {/* Placeholder for Key Features */}

      <Box>
        <Text fontSize="lg" fontWeight="bold" mb="1rem">
          {/* Key Features: */}
        </Text>
        <Text fontSize="sm" color="gray.300">
          {/* Add key features here later */}
        </Text>
      </Box>

      
    </VStack>
  );
}

export default RightSideProjectsPage;