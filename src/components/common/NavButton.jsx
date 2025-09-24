import React from 'react';
import { Box } from '@chakra-ui/react';
import { Tooltip } from "../ui/tooltip"
import { Link } from 'react-router-dom';


const NavButton = ({ label, icon: Icon, to }) => {
  return (
  <Tooltip
    showArrow
    content={label}
    openDelay={0}
    contentProps={{
      css: {
        '--tooltip-bg': 'rgba(25, 25, 25, 0.95)',
        borderRadius: '8px',
        fontSize: '0.75rem',
        fontWeight: 500,
        color: "rgba(251,247,245)",
      },
    }}
  >
    <Link to={to}> 
        <Box
          as="button"
          type="button"
          bg="transparent"
          border="0"
          cursor="pointer"
          p="8px"
          borderRadius="12px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          transition="all 0.2s ease"
          outline="none"
          _hover={{ bg: 'rgba(255, 255, 255, 0.1)', transform: 'scale(1.05)' }}
          _active={{ transform: 'scale(0.95)' }}
          _focus={{ boxShadow: 'none', outline: 'none' }}
          aria-label={label}
        >
          <Box as={Icon} boxSize={{ base: '18px', md: '20px' }} />
        </Box>
      </Link>
  </Tooltip>
  )
};

export default NavButton;