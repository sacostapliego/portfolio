import { forwardRef } from 'react';
import { Box } from '@chakra-ui/react';
import {
  NAV_TRANSITION,
  LABEL_OPEN_MAX_W,
  LABEL_OPEN_PADDING_LEFT,
  LABEL_ATTR,
} from './navMotion';

const accentFocus = 'rgba(137, 207, 240, 0.4)';

/*
 * A single nav pill. When it is the active item AND it opts into a label
 * (`showLabel`), the label slides open beside the icon and the header's
 * indicator grows to wrap it. The label is clipped with max-width rather than
 * mounted/unmounted so the width change is animatable; `box-sizing: border-box`
 * (set globally in index.css) means the padding is clipped along with it.
 */
const NavButton = forwardRef(
  ({ label, icon: Icon, isActive = false, showLabel = false, onClick }, ref) => {
    const expanded = isActive && showLabel;

    return (
      <Box
        as="button"
        ref={ref}
        type="button"
        onClick={onClick}
        aria-label={label}
        aria-current={isActive ? 'page' : undefined}
        position="relative"
        zIndex={1}
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        flexShrink={0}
        h={{ base: '2.5em', sm: '2.75em', md: '3em' }}
        px={{ base: '0.7em', sm: '0.8em', md: '0.9em' }}
        bg="transparent"
        border="0"
        borderRadius="0.75em"
        cursor="pointer"
        color={isActive ? 'rgba(251,247,245)' : 'rgba(255,255,255,0.65)'}
        transition="color 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
        outline="none"
        _hover={!isActive ? { color: 'rgba(251,247,245)' } : {}}
        _active={!isActive ? { transform: 'scale(0.96)' } : {}}
        _focus={{ boxShadow: 'none', outline: 'none' }}
        _focusVisible={{ boxShadow: `0 0 0 2px ${accentFocus}` }}
      >
        <Box
          as={Icon}
          flexShrink={0}
          boxSize={{ base: '1.125em', sm: '1.1875em', md: '1.25em' }}
        />

        {showLabel && (
          <Box
            as="span"
            aria-hidden="true"
            {...{ [LABEL_ATTR]: '' }}
            overflow="hidden"
            whiteSpace="nowrap"
            pl={expanded ? LABEL_OPEN_PADDING_LEFT : '0'}
            maxW={expanded ? LABEL_OPEN_MAX_W : '0'}
            opacity={expanded ? 1 : 0}
            fontSize={{ base: '0.8125em', md: '0.875em' }}
            fontWeight="600"
            letterSpacing="0.01em"
            lineHeight="1"
            transition={`max-width ${NAV_TRANSITION}, padding-left ${NAV_TRANSITION}, opacity 0.22s ease`}
          >
            {label}
          </Box>
        )}
      </Box>
    );
  }
);

NavButton.displayName = 'NavButton';

export default NavButton;
