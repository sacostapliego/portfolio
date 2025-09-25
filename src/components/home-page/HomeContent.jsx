import React from 'react'
import {
  Box,
  Grid,
  Heading,
  Text,
  Image,
  Stack,
  Icon,
} from '@chakra-ui/react'
import { IoMdSchool } from 'react-icons/io'
import { GiStarsStack } from 'react-icons/gi'

const HomeContent = () => {
  return (
    <Box display="flex" flexDirection="column" flex="1">
      <Heading
        as="h1"
        fontWeight="900"
        lineHeight="1.05"
        fontSize={{ base: '2.5rem', md: '5rem', xl: '5rem' }}
        mb={{ base: 4, md: 2 }}

      >
        <Text color="rgba(251,247,245)" display="block">STEVEN</Text>
        <Text color="rgba(255,255,255,0.3)" display="block">ACOSTA-PLIEGO</Text>
      </Heading>

      <Text
        fontSize={{ base: '1.25rem', md: '1.5rem', lg: '1.2rem', '2xl': '1.5rem' }}
        fontWeight="400"
        color="rgba(255,255,255,0.5)"
        maxW={{ base: '100%', md: '35rem' }}
        alignSelf="flex-start"
        mb={{ base: 6, md: 8 }}
      >
        Hi, my name is Steven. I am a self-taught developer, and currently
        pursuing a Bachelor's degree in Computer Science at Georgia State
        University.
      </Text>

      <Box h={{ base: '2rem', md: '10rem' }} />

      <Grid
        templateColumns={{ base: '1fr', lg: 'repeat(auto-fill, minmax(22rem, 1fr))' }}
        gap={{ base: 4, md: 6 }}               /* mobile gap: 1rem (4) */
        width="100%"
        justifyContent="flex-start"
      >
        <Box
          position="relative"
          minH={{ base: 'auto', md: '14rem' }}  /* mobile: unset/auto */
          borderRadius="1rem"
          p={{ base: 4, md: 6 }}                /* mobile padding: 1rem */
          bg="rgba(0, 113, 206, 1)"
          overflow="hidden"
        >
          <Icon
            as={IoMdSchool}
            position="absolute"
            right={{ base: '0.5rem', md: '-1rem' }}
            bottom={{ base: '0.1rem', md: '-1rem' }}
            fontSize={{ base: '7rem', md: '14rem' }}
            color="rgba(251,247,245)"
            opacity="0.12"
            pointerEvents="none"
            aria-hidden="true"
          />

          <Stack spacing={3} height="100%" align="flex-start">
            <Box width="100%">
              <Box
                bg="rgba(251,247,245)"
                borderRadius="0.5rem"
                p="8px"
                w={{ base: '3rem', md: '6rem' }}   /* mobile: 3rem */
                h={{ base: '3rem', md: '6rem' }}   /* mobile: 3rem */
                display="flex"
                alignItems="center"
                justifyContent="center"
                overflow="hidden"
                fontSize={{ base: '1.25rem', md: 'inherit' }} /* mobile font-size */
              >
                <Image src="/gsu2.png" alt="Georgia State logo" objectFit="cover" w="100%" h="100%" />
              </Box>
            </Box>

            <Box width="100%">
              <Text fontSize={{ base: '1rem', md: '1.1rem' }} fontWeight="600" color="rgba(251,247,245)">
                GEORGIA STATE UNIVERSITY
              </Text>
              <Text fontSize={{ base: '0.75rem', md: '0.8rem' }} fontWeight="500" color="rgba(255,255,255,0.82)">
                B.S. IN COMPUTER SCIENCE
              </Text>
              <Text fontSize={{ base: '0.75rem', md: '0.8rem' }} fontWeight="500" color="rgba(255,255,255,0.82)">
                GPA: 3.78/4.0; HONORS
              </Text>
            </Box>
          </Stack>
        </Box>

        <Box
          position="relative"
          minH={{ base: 'auto', md: '14rem' }}   /* mobile: unset/auto */
          borderRadius="1rem"
          p={{ base: 4, md: 6 }}                 /* mobile padding: 1rem */
          bg="rgba(119, 118, 121, 1)"
          overflow="hidden"
        >
          <Icon
            as={GiStarsStack}
            position="absolute"
            right={{ base: '0.5rem', md: '-1rem' }}
            bottom={{ base: '0.1rem', md: '-1rem' }}
            fontSize={{ base: '7rem', md: '14rem' }}
            color="rgba(251,247,245)"
            opacity="0.12"
            pointerEvents="none"
            aria-hidden="true"
          />

          <Stack spacing={3} height="100%" align="flex-start">
            <Box width="100%">
              <Box
                bg="rgba(251,247,245)"
                borderRadius="0.5rem"
                p="8px"
                w={{ base: '3rem', md: '6rem' }}   /* mobile: 3rem */
                h={{ base: '3rem', md: '6rem' }}   /* mobile: 3rem */
                display="flex"
                alignItems="center"
                justifyContent="center"
                overflow="hidden"
                fontSize={{ base: '1.25rem', md: 'inherit' }} /* mobile font-size */
              >
                <Image src="/president.png" alt="President's list badge" objectFit="cover" w="100%" h="100%" />
              </Box>
            </Box>

            <Box width="100%">
              <Text fontSize={{ base: '1rem', md: '1.1rem' }} fontWeight="600" color="rgba(251,247,245)">
                PRESIDENT'S LIST
              </Text>
              <Text fontSize={{ base: '0.75rem', md: '0.8rem' }} fontWeight="500" color="rgba(255,255,255,0.82)">
                GEORGIA STATE UNIVERSITY'S PRESIDENT LIST
              </Text>
              <Text fontSize={{ base: '0.75rem', md: '0.8rem' }} fontWeight="500" color="rgba(255,255,255,0.82)">
                SUMMER 2025, SUMMER 2023, SPRING 2023, FALL 2022
              </Text>
            </Box>
          </Stack>
        </Box>
      </Grid>
    </Box>
  )
}

export default HomeContent