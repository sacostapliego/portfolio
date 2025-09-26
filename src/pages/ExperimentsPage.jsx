import { Box, Flex, Text, Heading, Separator } from '@chakra-ui/react';
import skillsData from '../components/skills-page/SkillsData';
import SkillsGrid from '../components/skills-page/SkillsGrid';

function ExperimentsPage() {
  return (
    <>
      <Flex
          className="fade-in"
          w={{ base: '100%', lg: '85vw', '2xl': '70vw'  }}
          px={{ base: '1rem', lg: '2.5rem' }}
          pt={{ base: '4rem', lg: '5rem' }}
          pb="2.5rem"
          mx="auto"
          flexDirection={'column'}
          alignItems={'center'}
        >
          {/* Main content box */}
          <Box
            as="section"
            id="projects"
            className="reveal"
            mt={{ base: '4rem', md: '6rem' }}
            w={'100%'}
          >
            <Heading
              as="h1"
              lineHeight="1.05"
              fontSize={{ base: '2.5rem', md: '3rem', lg: '4rem' }}
              mb={{ base: '1.5rem', md: '2rem' }}
              textAlign={'left'}
            >
              <Text color="rgba(251,247,245)" display="block" mb={'0.5rem'} fontWeight="900">SKILLS</Text>
            </Heading>

            <Separator mb={'2rem'} />

            {/* Skills Grid */}
          <SkillsGrid skillsData={skillsData} />
        </Box>
      </Flex>
    </>
  );
}

export default ExperimentsPage;