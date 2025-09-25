import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { LuHouse } from 'react-icons/lu';
import { FaRegFolder, FaCode } from 'react-icons/fa6';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { AiOutlineExperiment } from "react-icons/ai";
import NavButton from './common/NavButton';

const Header = () => {
  return (
    <Box
      as="header"
      position="fixed"
      top={{ base: '15px', md: '30px' }}
      left="50%"
      transform="translateX(-50%)"
      zIndex={1000}
    >
      <HStack
        bg="rgba(25, 25, 25, 1)"
        backdropFilter="blur(20px)"
        borderRadius="20px"
        px={{ base: '20px', md: '40px' }}
        py="10px"
        align="center"
        spacing={{ base: '15px', md: '30rem' }}
        gap={{ base: 3, md: 4 }}
        minW={{ base: '180px', md: '200px' }}
        justify="center"
      >
        <NavButton label="Home" icon={LuHouse} to="/" />
        <NavButton label="Projects" icon={FaRegFolder} to="/projects" />
        <NavButton label="Skills" icon={FaCode} to="/skills" />
        <NavButton label="Experiments" icon={AiOutlineExperiment} to="/" />
        <NavButton label="Resume" icon={IoDocumentTextOutline} to="/resume" />
      </HStack>
    </Box>
  );
};

export default Header;