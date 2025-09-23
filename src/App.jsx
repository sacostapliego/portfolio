import { Box, Flex } from '@chakra-ui/react';
import Header from './components/header/Header';
import Card from './components/card/Card';
import HomeContent from './components/home-content/HomeContent';
import RecentProjects from './components/recent-projects/RecentProjects';
import './App.css';

function App() {
  return (
    <>
      <Header />

      {/* Layout + animation wrapper (animations kept in App.css) */}
      <Flex
        className="fade-in"
        direction={{ base: 'column', lg: 'row' }}
        align={{ base: 'center', lg: 'stretch' }}
        gap={{ base: '1.25rem', lg: '2.5rem' }}
        w={{ base: '100vw', lg: '85vw' }}
        maxW={{ base: '100vw', lg: '90vw', '2xl': '95vw' }}
        px={{ base: '1.25rem', lg: '2.5rem' }}
        pt={{ base: '6.25rem', lg: '9rem' }}
        pb="2.5rem"
        mx="auto"
        boxSizing="border-box"
      >
        <Box
          flex={{ base: 'none', lg: '0 1 38%' }}
          mb={{ base: '1rem', lg: '0' }}
        >
          <Card />
        </Box>

        {/* Main content box */}
        <Box
          minW={0}
          pl={{ base: 0, lg: '1rem' }}
          flex={{ base: 'none', lg: '1 1 0' }}
          sx={{
            // h1: 2.5rem on large, 2rem on small
            'h1': {
              color: 'white',
              mb: '1.25rem',
              fontSize: { base: '2rem', lg: '2.5rem' },
            },
            // h2: 1.8rem on large, 1.5rem on small
            'h2': {
              color: 'white',
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
          <HomeContent />
          <RecentProjects />
        </Box>
      </Flex>
    </>
  );
}

export default App;