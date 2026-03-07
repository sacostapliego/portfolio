import React from 'react';
import { Box } from '@chakra-ui/react';
import { Tooltip } from '../ui/tooltip';

const NavButton = ({ label, icon: Icon, isActive = false }) => {
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
          color: 'rgba(251,247,245)',
        },
      }}
    >
      <Box
        as="button"
        type="button"
        bg="transparent"
        border="0"
        cursor="pointer"
        p={{ base: '6px', sm: '8px', md: '10px' }}
        borderRadius="12px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        transition="all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
        outline="none"
        _hover={!isActive ? { bg: 'rgba(255, 255, 255, 0.08)' } : {}}
        _active={!isActive ? { transform: 'scale(0.96)' } : {}}
        _focus={{ boxShadow: 'none', outline: 'none' }}
        _focusVisible={{ boxShadow: '0 0 0 2px rgba(137, 207, 240, 0.4)' }}
        aria-label={label}
      >
        <Box as={Icon} boxSize={{ base: '18px', sm: '19px', md: '20px' }} />
      </Box>
    </Tooltip>
  );
};

export default NavButton;