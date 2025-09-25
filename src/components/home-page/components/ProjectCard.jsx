import {
  Box,
  Stack,
  Heading,
  Text,
  Image,
  Flex,
  Icon,
  Link,
} from '@chakra-ui/react';
import { LuArrowUpRight } from "react-icons/lu";

const PLACEHOLDER = 'https://i.sstatic.net/9AF6f.png';

const ProjectCard = ({ title, desc, href, image }) => {
  const imgSrc = image || PLACEHOLDER;

  return (
    <Link
      href={href}
      isExternal
      target="_blank"
      aria-label={`Open ${title} externally`}
      display="block"
      _hover={{ textDecoration: 'none' }}
      width='100%'
      _focus={{ boxShadow: 'none', outline: 'none' }}
      _focusVisible={{ boxShadow: 'none', outline: 'none' }}
      _active={{ boxShadow: 'none', outline: 'none' }}
      sx={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <Box
        as="article"
        borderRadius="1rem"
        p={{ base: 4, md: 5 }}
        minH="8rem"
        position="relative"
        transition="transform 200ms ease, background-color 200ms ease, box-shadow 200ms ease"
        cursor="pointer"
        _hover={{
          bg: 'rgba(25,25,25,0.95)',
        }}
      >
        {/* external icon top-right (visual only; outer Link handles clicks) */}
        <Icon
          as={LuArrowUpRight}
          boxSize={5}
          color='rgba(137, 207, 240, 1)'
          position="absolute"
          right="12px"
          top="12px"
          pointerEvents="none"
        />

        <Flex align="center" gap={4}>
          <Box
            flex="0 0 auto"
            h={{ base: '7.5rem', md: '8rem' }}
            w={{ base: '7.5rem', md: '8rem' }}
            borderRadius="0.5rem"
            overflow="hidden"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image src={imgSrc} alt={`${title} thumbnail`} objectFit="cover" w="100%" h="100%" />
          </Box>

          <Stack spacing={1} flex="1" minW={0}>
            <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} color="#fff" fontWeight="800" lineHeight="1">
              {title}
            </Heading>
            <Text fontSize="sm" color="rgba(255,255,255,0.75)" noOfLines={3}>
              {desc}
            </Text>
          </Stack>
        </Flex>
      </Box>
    </Link>
  );
};

export default ProjectCard;