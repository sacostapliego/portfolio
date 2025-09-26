import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { LuHouse } from 'react-icons/lu';
import { FaRegFolder, FaCode } from 'react-icons/fa6';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import NavButton from './common/NavButton';

const Header = () => {
  return (
    <Box
      as="header"
      top={{ base: '15px', md: '30px' }}
      w="100%"
      textAlign="center"
      mt={{ base: '20px', md: '60px' }}
    >
      <HStack
        mx="auto"
        w={'fit-content'}
        bg="rgba(25, 25, 25, 1)"
        backdropFilter="blur(20px)"
        borderRadius="20px"
        py="10px"
        align="center"
        gap={{ base: 3, md: 4 }}
        minW={{ base: '60vw', md: '15vw' }}
        justify="center"
      >
        <NavButton label="Home" icon={LuHouse} to="/" />
        <NavButton label="Projects" icon={FaRegFolder} to="/projects" />
        <NavButton label="Skills" icon={FaCode} to="/skills" />
        <NavButton label="Playground" icon={IoExtensionPuzzleOutline} to="/playground" />
        <NavButton label="Résumé" icon={IoDocumentTextOutline} to="/resume" />
      </HStack>
    </Box>
  );
};

export default Header;