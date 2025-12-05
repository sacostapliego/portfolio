import React from 'react';
import { Box, Image, Heading, Text, HStack, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import me from '../../components/assets/images/me.png';

const blue = 'rgba(137, 207, 240, 1)';

const Card = () => {
  return (
    <Box
      as="section"
      maxW={{ base: '14rem', md: '23rem' }}
      mx={{ base: 0, md: 'auto' }}
      mb={{ base: 0, md: '1rem' }}
      mt={{ base: -7, md: 0 }}
      display="block"
      height={{ base: 'auto', md: '100%' }}
    >
      <Box
        bg="rgba(251,247,245)"
        borderRadius="1.25rem"
        p={{ base: '1.75rem', md: '2rem' }}
        overflow="hidden"
        position={{ base: 'relative', md: 'sticky' }}
        top={{ base: 0, md: '5rem', lg: '7rem' }}
        zIndex={2}
        // Dotted lines
        _before={{
          content: '""',
          position: 'absolute',
          top: { base: '-1.5rem', md: '-3rem' },
          right: { base: '-1.5rem', md: '-3rem' },
          w: { base: '80px', md: '150px' },
          h: { base: '80px', md: '150px' },
          border: 'dashed',
          borderColor: blue,
          borderWidth: { base: '3px', md: '5px' },
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
        _after={{
          content: '""',
          position: 'absolute',
          bottom: { base: '-1rem', md: '-2rem' },
          left: { base: '-1rem', md: '-2rem' },
          w: { base: '70px', md: '125px' },
          h: { base: '70px', md: '125px' },
          border: 'dashed',
          borderColor: blue,
          borderWidth: { base: '3px', md: '5px' },
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      >
        <Box display="flex" justifyContent="center" mb="1.5rem">
          <Image
            src={me}
            alt="Profile"
            w={{ base: '6.25rem', md: '16rem' }}
            h={{ base: '6.25rem', md: '18rem' }}
            borderRadius="8px"
            objectFit="cover"
            transition="transform 0.3s ease"
            background={blue}
          />
        </Box>

        <Box textAlign="center" color="black">
          <Heading
            as="h2"
            fontSize={{ base: '1.25rem', md: '1.75rem' }}
            fontWeight="900"
            mb="1rem"
            lineHeight="1.2"
            color="black"
          >
            Steven <br /> Acosta-Pliego
          </Heading>

          <Text
            fontSize={{ base: '0.8125rem', md: '1.125rem' }}
            fontWeight="700"
            color="rgba(0, 0, 0, 0.5)"
            mt={{ base: '2.5rem', md: '5rem' }}
          >
            A Computer Science student @ GSU with a passion for building and learning.
          </Text>

          <HStack justify="center" gap={{ base: '0.75rem', md: '1rem' }} mt="1rem">
            <Link
              href="https://github.com/sacostapliego"
              isExternal
              color={blue}
              textDecoration="none"
              p="0.5rem"
              borderRadius="0.75rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
              transition="transform 0.25s ease, background-color 0.25s ease, color 0.25s ease"  // added
              _hover={{ bg: 'rgba(255, 255, 255, 0.75)', transform: 'scale(1.18)', color: blue }}
              aria-label="GitHub"
            >
              <Box as={FaGithub} boxSize={{ base: '1.125rem', md: '2rem' }} />
            </Link>

            <Link
              href="https://github.com/sacostapliego"
              isExternal
              color={blue}
              textDecoration="none"
              p="0.1rem"
              borderRadius="0.75rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
              transition="transform 0.25s ease, background-color 0.25s ease, color 0.25s ease"  // added
              _hover={{ bg: 'rgba(255, 255, 255, 0.75)', transform: 'scale(1.18)', color: blue }}
              aria-label="GitHub"
            >
              <Box as={FaLinkedin} boxSize={{ base: '1.125rem', md: '2rem' }} />
            </Link>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;