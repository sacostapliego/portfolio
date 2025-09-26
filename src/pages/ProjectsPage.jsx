import { Box, Flex, Heading, Separator, Text } from '@chakra-ui/react';
import { useState } from 'react';
import ProjectGrid from '../components/projects-page/ProjectGrid';
import SearchBox from '../components/projects-page/SearchBox';
import projectData from '../components/projects-page/ProjectData'; // Import project data

function ProjectsPage() {
  const [filteredProjects, setFilteredProjects] = useState(projectData); // State for filtered projects

  return (
    <>
      {/* Fade in animation + page setup */}
      <Flex
        className="fade-in"
        w={{ base: '100%', lg: '85vw', '2xl': '70vw' }}
        maxW={{ base: '100%', lg: '95%', '2xl': '85vw' }}
        minH={'80vh'}
        px={{ base: '1rem', lg: '2.5rem' }}
        pb="2.5rem"
        mx="auto"
        flexDirection="column"
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
            <Text color="rgba(251,247,245)" display="block" mb={'0.5rem'} fontWeight="900">
              PROJECTS
            </Text>
          </Heading>

          {/* Search Box */}
          <Box  w={{ base: '100%', md: '50%' }} justifyContent="flex-end">
            <SearchBox projectData={projectData} onFilter={setFilteredProjects} />
          </Box>

          <Separator mb={'2rem'} />

          {/* Project Grid */}
          <ProjectGrid projects={filteredProjects} />
        </Box>
      </Flex>
    </>
  );
}

export default ProjectsPage;