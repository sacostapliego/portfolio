import { Box, Flex, Text, Heading, Separator } from '@chakra-ui/react';
import { BiError } from "react-icons/bi";
import ChatBot from '../components/experiments-page/first/ChatBot';
import '../components/animations/fade.css';
import { useEffect } from 'react';

function PlaygroundPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      {/* Parent container to hold splashes */}
      <Box position="relative" w="100%" h="100%" overflow="hidden">
        {/* Left Blue Splash */}
        <Box
          position="absolute"
          top={{ base: "60%", md: "65%", '2xl': "60%" }}
          left="-5rem"
          transform="translateY(-50%)"
          w="20rem"
          h="20rem"
          bg="blue.500"
          opacity={0.3}
          borderRadius="50%"
          filter="blur(100px)"
        />

        {/* Right Red Splash */}
        <Box
          position="absolute"
          top={{ base: "38%", md: "45%", '2xl': "40%" }}
          right="-5rem"
          transform="translateY(-50%)"
          w={{ base: "12rem", md: "20rem", lg: "20rem" }}
          h={{ base: "12rem", md: "20rem", lg: "20rem" }}
          bg="red.500"
          opacity={0.3}
          borderRadius="50%"
          filter="blur(100px)"
        />

        {/* Main content box */}
        <Flex
          className="fade-in"
          w={{ base: '100%', lg: '85vw', '2xl': '70vw' }}
          minH={{ base: '120vh', md: '100vh', lg: '100vh' }}
          px={{ base: '1rem', lg: '2.5rem' }}
          pb="2.5rem"
          mx="auto"
          flexDirection={'column'}
          alignItems={'center'}
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
              textAlign={'left'}
            >
              <Text color="rgba(251,247,245)" display="block" mb={'0.5rem'} fontWeight="900">PLAYGROUND</Text>
              <Text w={{ base: '100%', md: '50%' }} fontSize={{ base: '1rem', md: '2rem', lg: '1.5rem' }} color="rgba(251,247,245)" display="block" mb={'0.5rem'} fontWeight="400">
                This is just a playground for me to experiment with ideas and technologies.
              </Text>
            </Heading>

            <Separator mb={'2rem'} />

            {/* Chatbot */}
            <Box mb={'1rem'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <BiError color='yellow' />
              <Text display={'inline-block'} color="rgba(255, 255, 255, 0.9)" fontSize={{ base: '0.8rem', md: '1rem' }} fontWeight="600" ml={'0.5rem'}>
                Note: This is a very basic chatbot, it does not have advanced capabilities like context retention or complex conversations.
              </Text>
            </Box>
            <ChatBot />
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default PlaygroundPage;