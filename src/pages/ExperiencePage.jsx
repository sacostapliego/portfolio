import { Box, Flex, Heading, Separator, Text } from '@chakra-ui/react';
import '../components/animations/fade.css';
import Reveal from '../components/animations/Reveal';
import Timeline from '../components/experience-page/Timeline';
import timelineData from '../components/experience-page/TimelineData';
import skillsData from '../components/skills-page/SkillsData';
import SkillsGrid from '../components/skills-page/SkillsGrid';

// Section headings match the page title's treatment, the same way every
// section heading on the home page does.
const HEADING_SIZE = { base: '2.5rem', md: '3rem', lg: '4rem' };

function ExperiencePage() {
  return (
    <Flex
      className="fade-in"
      w={{ base: '100%', lg: '85vw', '2xl': 'min(95vw, 84rem)' }}
      px={{ base: '1rem', lg: '2.5rem' }}
      pb="2.5rem"
      mx="auto"
      flexDirection="column"
      alignItems="center"
    >
      <Box as="main" mt={{ base: '4rem', md: '6rem' }} w="100%">
        <Heading
          as="h1"
          lineHeight="1.05"
          fontWeight="900"
          fontSize={HEADING_SIZE}
          mb={{ base: '1.5rem', md: '2rem' }}
        >
          <Text color="rgba(251,247,245)" display="block">
            EXPERIENCE
          </Text>
        </Heading>

        <Separator mb={{ base: '2.5rem', md: '3rem' }} />

        {/* Work + education on one timeline */}
        <Box as="section" mb={{ base: '4rem', md: '6rem' }}>
          <Timeline entries={timelineData} />
        </Box>

        {/* Skills: the page that used to live at /skills, now a section here */}
        <Box as="section" aria-labelledby="skills-heading">
          <Reveal>
            <Heading
              as="h2"
              id="skills-heading"
              lineHeight="1.05"
              fontWeight="900"
              fontSize={HEADING_SIZE}
              mb={{ base: '1.5rem', md: '2rem' }}
            >
              <Text color="rgba(251,247,245)" display="block">
                SKILLS
              </Text>
            </Heading>

            <Separator mb={{ base: '2.5rem', md: '3rem' }} />

            <SkillsGrid skillsData={skillsData} />
          </Reveal>
        </Box>
      </Box>
    </Flex>
  );
}

export default ExperiencePage;
