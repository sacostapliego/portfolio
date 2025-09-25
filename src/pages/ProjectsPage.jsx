import { Box, Flex, Heading, Separator, Text } from '@chakra-ui/react';
import RecentProjects from '../components/home-page/RecentProjects';
import '../components/animations/fade.css';
import ProjectGrid from '../components/projects-page/ProjectGrid';

function ProjectsPage() {
  return (
    <>
    {/* Fade in animation + page setup */}
      <Flex
        className="fade-in"
        w={{ base: '100%', lg: '100vw', '2xl': '70vw'  }}
        maxW={{ base: '100%', lg: '95%', '2xl': '85vw' }}
        px={{ base: '1rem', lg: '2.5rem' }}
        pt={{ base: '4rem', lg: '5rem' }}
        pb="2.5rem"
        mx="auto"
      >
        {/* Main content box */}
        <Box
          as="section"
          id="projects"
          className="reveal"
          mt={{ base: '4rem', md: '6rem' }}
        >
          <Heading
            as="h1"
            lineHeight="1.05"
            fontSize={{ base: '2.5rem', md: '3rem', lg: '4rem' }}
            mb={{ base: '1.5rem', md: '2rem' }}
          >
            <Text color="rgba(251,247,245)" display="block" mb={'0.5rem'} fontWeight="900">PROJECTS</Text>
            <Text color="rgba(255,255,255,0.3)" fontSize={{ base: '1rem', md: '1.5rem', lg: '1.5rem' }} fontWeight="400">
              These are projects, from school to personal passion projects, that I have learned a lot from.
            </Text>
          </Heading>
          <Separator mb={'2rem'} />

          <ProjectGrid />
        </Box>
      </Flex>
    </>
  );
}

export default ProjectsPage;