import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Box, Flex, HStack } from '@chakra-ui/react';
import projectData from '../../components/projects-page/ProjectData';
import LeftSideProjectsPage from '../../components/projects-page/individual-project-pages/LeftSide';
import RightSideProjectsPage from '../../components/projects-page/individual-project-pages/RightSide';

function IndividualProjectPage() {
  const { projectName } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const project = projectData.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === projectName
  );

  if (!project) {
    return (
      <Box minH="80vh" display="flex" justifyContent="center" alignItems="center">
        <Heading>Project Not Found</Heading>
      </Box>
    );
  }

  return (
    <Flex
      className="fade-in"
      w={{ base: '100%', lg: '85vw', '2xl': '75vw' }}
      px={{ base: '1rem', lg: '2.5rem' }}
      pb="2.5rem"
      mx="auto"
      pt={{ base: '5rem', lg: '5rem' }}
      minH={'70vh'}
      direction={{ base: 'column', md: 'row' }}
      align="start"
      spacing={8}
    >
      <Box w={{ base: '100%', lg: '50%' }} mb={{ base: '2rem', lg: '0' }}>
        <LeftSideProjectsPage />
      </Box>
      <Box w={{ base: '100%', lg: '50%' }}>
        <RightSideProjectsPage />
      </Box>
    </Flex>
  );
}

export default IndividualProjectPage;