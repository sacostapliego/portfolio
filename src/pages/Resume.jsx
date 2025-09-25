import { Box, Flex, Heading, Separator, Text } from '@chakra-ui/react';
import '../components/animations/fade.css';

function Resume() {
  return (
    <>
    {/* Fade in animation + page setup */}
      <Flex
        className="fade-in"
        w={{ base: '100%', lg: '85vw', '2xl': '70vw'  }}
        px={{ base: '1rem', lg: '2.5rem' }}
        pt={{ base: '4rem', lg: '5rem' }}
        pb="2.5rem"
        mx="auto"
      >
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
          >
            <Text color="rgba(251,247,245)" display="block" mb={'0.5rem'} fontWeight="900">MY RÉSUMÉS</Text>
          </Heading>
          <Separator mb={'2rem'} />


          {/* PDF Viewer using iframe */}
          <Box
            w={{ base: "100%", md: "50%" }}
            h={{ base: "55vh", md: "90vh" }}
            borderRadius="8px"
            mx={'auto'}
            >
              <Text 
              color="rgba(255, 255, 255, 0.9)" 
              fontSize={{ base: '1rem', lg: '1rem' }} 
              fontWeight="600"
              >
                Overall résumé
              </Text>
              <Text 
              color="rgba(255, 255, 255, 0.7)" 
              fontSize={{ base: '1rem', md: '0.5rem', lg: '0.75rem' }} 
              fontWeight="600"
              mb={'1rem'}
              >
                This résumé is intended for general use, specifically for software development or full-stack positions.
                Highlighting both backend, and frontend skills and experience.
              </Text>
              <iframe 
              src="https://drive.google.com/file/d/1XoX34_hnjXcxQOC0vmJD0VEvUHzUupyX/preview"
              width="100%" 
              height={'100%'} 
              allow="autoplay"
              >
                <p>Your browser does not support iframes.</p>
              </iframe>
            </Box>
        </Box>
      </Flex>
    </>
  );
}

export default Resume;