import { Box } from '@chakra-ui/react';

const SocialIconButton = ({ 
  href, 
  icon: IconComponent, 
  ariaLabel,
  bgColor = "#1d1d1d",
  iconColor = "gray.400",
  hoverColor = "#FAF9F6",
}) => {
  return (
    <Box
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      h="48px"
      w="48px"
      borderRadius="8px"
      color={iconColor}
      background={bgColor}
      p={3}
      role="group"
      aria-label={ariaLabel}
      _hover={{
        '& .footer-icon': {
          transform: 'scale(1.18)',
          color: hoverColor,
        },
      }}
    >
      <Box
        as={IconComponent}
        className="footer-icon"
        boxSize="40px"
        transition="transform .25s ease, color .25s ease"
        transformOrigin="50% 50%"
      />
    </Box>
  );
};

export default SocialIconButton;