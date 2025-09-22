import React from 'react';
import { Box, Image, Heading, Text, HStack, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Card = () => {
  return (
    <Box
      as="section"
      height="fit-content"
      position="sticky"
      top="7rem"
      maxW="23rem"
      mx="auto"
      sx={{
        '@media (max-width: 1100px)': {
          position: 'sticky',
          top: '5rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '1rem',
        },
        '@media (max-width: 768px)': {
          position: 'static',
          top: 0,
          maxWidth: '17rem',
          margin: 0,
        },
      }}
    >
      <Box
        bg="white"
        borderRadius="1.25rem"
        p="2rem"
        position="relative"
        overflow="hidden"
      >
        {/* Top-right dashed circle */}
        <Box
          aria-hidden="true"
          position="absolute"
          top="-3rem"
          right="-3rem"
          width="150px"
          height="150px"
          border="5px dashed rgba(137, 207, 240, 1)"
          borderRadius="50%"
          pointerEvents="none"
          sx={{
            '@media (max-width: 768px)': {
              top: '-1.5rem',
              right: '-1.5rem',
              width: '80px',
              height: '80px',
              borderWidth: '3px',
            },
          }}
        />
        {/* Bottom-left dashed circle */}
        <Box
          aria-hidden="true"
          position="absolute"
          bottom="-2rem"
          left="-2rem"
          width="125px"
          height="125px"
          border="5px dashed rgba(137, 207, 240, 1)"
          borderRadius="50%"
          pointerEvents="none"
          sx={{
            '@media (max-width: 768px)': {
              bottom: '-1rem',
              left: '-1rem',
              width: '70px',
              height: '70px',
              borderWidth: '3px',
            },
          }}
        />

        <Box display="flex" justifyContent="center" mb="1.5rem">
          <Image
            src="https://cdna.artstation.com/p/assets/images/images/075/039/706/large/retratosanime-514.jpg?1713581850"
            alt="Profile"
            w="16rem"
            h="18rem"
            borderRadius="8px"
            objectFit="cover"
            transition="transform 0.3s ease"
            sx={{
              '@media (max-width: 768px)': {
                width: '6.25rem',
                height: '6.25rem',
              },
            }}
          />
        </Box>

        <Box textAlign="center" color="black">
          <Heading
            as="h2"
            fontSize="1.75rem"
            fontWeight="900"
            mb="1rem"
            color="black"
            lineHeight="1.2"
            sx={{
              '@media (max-width: 768px)': { fontSize: '1.25rem' },
            }}
          >
            Steven <br /> Acosta-Pliego
          </Heading>

          <Text
            fontSize="1.125rem"
            fontWeight="700"
            color="rgba(0, 0, 0, 0.5)"
            mt="5rem"
            sx={{
              '@media (max-width: 768px)': {
                fontSize: '0.8125rem',
                mt: '2.5rem',
              },
            }}
          >
            A Software Engineer who has developed countless innovative solutions.
          </Text>

          <HStack justify="center" gap="1rem" mt="1rem" sx={{ '@media (max-width: 768px)': { gap: '0.75rem' } }}>
            <Link
              href="https://github.com/sacostapliego"
              isExternal
              color="rgba(137, 207, 240, 1)"
              textDecoration="none"
              p="0.5rem"
              borderRadius="0.75rem"
              transition="all 0.2s ease"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{ bg: 'rgba(255, 255, 255, 0.1)', transform: 'scale(1.05)', color: 'rgba(137, 207, 240, 1)' }}
              _active={{ transform: 'scale(0.95)' }}
              aria-label="GitHub"
            >
              <Box as={FaGithub} boxSize="2rem" sx={{ '@media (max-width: 768px)': { boxSize: '1.125rem' } }} />
            </Link>

            <Link
              href="https://linkedin.com/in/sacostapliego"
              isExternal
              color="rgba(137, 207, 240, 1)"
              textDecoration="none"
              p="0.5rem"
              borderRadius="0.75rem"
              transition="all 0.2s ease"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{ bg: 'rgba(255, 255, 255, 0.1)', transform: 'scale(1.05)', color: 'rgba(137, 207, 240, 1)' }}
              _active={{ transform: 'scale(0.95)' }}
              aria-label="LinkedIn"
            >
              <Box as={FaLinkedin} boxSize="2rem" sx={{ '@media (max-width: 768px)': { boxSize: '1.125rem' } }} />
            </Link>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;