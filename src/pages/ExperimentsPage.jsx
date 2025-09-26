import { Box, Flex, Text, Heading, Separator } from '@chakra-ui/react';
import ChatBot from '../components/experiments-page/first/ChatBot';

function ExperimentsPage() {
  return (
    <>
      <Flex
          className="fade-in"
          w={{ base: '100%', lg: '85vw', '2xl': '70vw'  }}
          minH={'80vh'}
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
              <Text color="rgba(251,247,245)" display="block" mb={'0.5rem'} fontWeight="900">EXPERIMENTS</Text>
              <Text w={'50%'} fontSize={{ base: '1rem', md: '2rem', lg: '1.5rem' }} color="rgba(251,247,245)" display="block" mb={'0.5rem'} fontWeight="400">
                This is just a playground for me to experiment with ideas and technologies.
              </Text>
            </Heading>

            <Separator mb={'2rem'} />

            {/* Chatbot */}
            <ChatBot />
        </Box>
      </Flex>
    </>
  );
}

export default ExperimentsPage;