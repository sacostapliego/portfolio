import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import '../components/animations/fade.css';

function Resume() {
  const pdfUrl = 'https://drive.google.com/file/d/1XoX34_hnjXcxQOC0vmJD0VEvUHzUupyX/view'; // Replace with your Google Drive link or local file path
  return (
    <>
    {/* Fade in animation + page setup */}
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

        <Heading
        as="h1"
        fontWeight="900"
        lineHeight="1.05"
        fontSize={{ base: '2.5rem', md: '3rem', lg: '4rem' }}
        mb={{ base: '1.5rem', md: '2rem' }}
        mt={{ base: '4rem', md: '5rem' }}
      >
        <Text color="rgba(251,247,245)" display="block">RESUME</Text>
      </Heading>

      {/* PDF Viewer using iframe */}
      <Box
        w="100%"
        maxW="800px"
          h="80vh"
          border="1px solid rgba(255,255,255,0.3)"
          borderRadius="8px"
          overflow="hidden"
        >
          <iframe
            src={pdfUrl}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Resume PDF"
          />
        </Box>
      </Flex>
    </>
  );
}

export default Resume;