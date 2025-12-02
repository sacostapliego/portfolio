import { Box, HStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";
import SocialIconButton from './common/SocialIconButton';

export default function Footer() {
  return (
    <Box
      as="footer"
      mt={16}
      w="100%"
      minW={"100%"}
      background="linear-gradient(to bottom, rgba(21, 21, 21, 1), #1d1d1d)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={24}
    >
      <HStack gap={6} mt={-50}>
        <SocialIconButton 
          href="https://github.com/sacostapliego/" 
          icon={FaGithub}
          ariaLabel="GitHub Profile"
        />
        <SocialIconButton 
          href="https://www.linkedin.com/in/steven-acosta-pliego/" 
          icon={FaLinkedin}
          ariaLabel="LinkedIn Profile"
        />
        <SocialIconButton 
          href="mailto:steven.acosta867@gmail.com" 
          icon={IoMdMail}
          ariaLabel="Email Contact"
        />
      </HStack>
    </Box>
  );
}