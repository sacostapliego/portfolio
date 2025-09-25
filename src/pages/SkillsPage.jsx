import { Box, Flex } from '@chakra-ui/react';
import Card from '../components/home-page/Card';
import Skills from '../components/home-page/Skills';
import '../components/animations/fade.css';

function SkillsPage() {
  return (
    <>
      <Flex
        className="fade-in"
        direction={{ base: 'column', lg: 'column' }}
        align={{ base: 'center', lg: 'center' }}
        gap={{ base: '1.25rem', lg: '2.5rem' }}
        w={{ base: '100%', lg: '100vw', '2xl': '85vw'  }}
        maxW={{ base: '100%', lg: '95%', '2xl': '85vw' }}
        px={{ base: '1rem', lg: '2.5rem' }}
        pt={{ base: '6.25rem', lg: '5rem' }}
        pb="2.5rem"
        mx="auto"
        boxSizing="border-box"
        mt={{ base: '0.5rem', md: '2rem' ,lg: '-1rem', '2xl': '2rem'}}
      >

        {/* Main content box */}
        <Box
          minW={0}
          pl={{ base: 0, lg: '1rem' }}
          flex={{ base: 'none', lg: '1 1 0' }}
          sx={{
            // h1: 2.5rem on large, 2rem on small
            'h1': {
              color: "rgba(251,247,245)",
              mb: '1.25rem',
              fontSize: { base: '2rem', lg: '2.5rem' },
            },
            // h2: 1.8rem on large, 1.5rem on small
            'h2': {
              color: "rgba(251,247,245)",
              fontSize: { base: '1.5rem', lg: '1.8rem' },
            },
            // p: color and spacing preserved
            'p': {
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.6,
              mb: '1.25rem',
            },
          }}
        >
          <Skills />
        </Box>
      </Flex>
    </>
  );
}

export default SkillsPage;