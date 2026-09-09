import { useMemo, useRef, useLayoutEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LuHouse } from 'react-icons/lu';
import { FaRegFolder, FaCode } from 'react-icons/fa6';
import NavButton from './common/NavButton';
import {
  NAV_DURATION_MS,
  NAV_TRANSITION,
  LABEL_OPEN_MAX_W,
  LABEL_OPEN_PADDING_LEFT,
  LABEL_ATTR,
} from './common/navMotion';

/* ─── Nav bar size knob ──────────────────────────────────────────────────────
 * The whole bar -- pill padding, button height, icon, label and corner radius
 * -- is sized in `em` off this one number, so changing it scales everything
 * together and nothing drifts out of proportion.
 *
 *   1     original size
 *   1.1   10% bigger  <- current
 *   1.2   20% bigger
 *
 * Just edit this value. It multiplies rem, which itself scales with the
 * viewport above 1440px (see index.css), so the bar keeps up on big monitors.
 * ─────────────────────────────────────────────────────────────────────────── */
const NAV_SCALE = 1.2;

// A little past the end of the move, so the correction lands at rest.
const NAV_SETTLE_MS = NAV_DURATION_MS + 60;

/*
 * `showLabel` decides whether the item's name slides open inside the pill when
 * it becomes active. Home stays icon-only -- the house reads on its own and the
 * label would just push the other two items around on every visit to the site.
 */
const navItems = [
  { label: 'Home', icon: LuHouse, value: '/', showLabel: false },
  { label: 'Experience', icon: FaRegFolder, value: '/experience', showLabel: true },
  { label: 'Projects', icon: FaCode, value: '/projects', showLabel: true },
];

const getActiveTabValue = (pathname) => {
  if (pathname === '/') return '/';
  if (pathname.startsWith('/projects')) return '/projects';
  // /skills is the old route for this page and still redirects here.
  if (pathname.startsWith('/experience') || pathname.startsWith('/skills')) {
    return '/experience';
  }
  return '/';
};

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const activeValue = useMemo(
    () => getActiveTabValue(location.pathname),
    [location.pathname]
  );

  const listRef = useRef(null);
  const indicatorRef = useRef(null);
  const itemRefs = useRef({});
  const hasPositioned = useRef(false);

  /*
   * Where the outline needs to end up, measured rather than guessed.
   *
   * The obvious approach -- read the active button's box and transition to it
   * -- gives the wrong answer, because at the moment the active item changes
   * the buttons are still laid out for the *old* state and will keep moving for
   * the next 300ms as one label closes and another opens. Following that live
   * box makes the outline chase a target that drifts and then doubles back,
   * which is the trailing and overshoot this used to have.
   *
   * So measure the settled layout up front: clone the bar offscreen, put the
   * clone straight into the target state with no transitions, and read the box
   * off that. It is the real element with the real stylesheet, so there is no
   * arithmetic to get wrong and nothing to keep in sync but the label values in
   * navMotion.js. The clone never paints and is gone within the same frame.
   */
  const measureTarget = (value) => {
    const list = listRef.current;
    const index = navItems.findIndex((item) => item.value === value);
    if (!list || index < 0) return null;

    const clone = list.cloneNode(true);
    Object.assign(clone.style, {
      position: 'absolute',
      left: '-9999px',
      top: '0',
      visibility: 'hidden',
      pointerEvents: 'none',
      transition: 'none',
    });

    const buttons = [...clone.querySelectorAll('button')];
    navItems.forEach((item, i) => {
      const label = buttons[i]?.querySelector(`[${LABEL_ATTR}]`);
      if (!label) return;
      const open = item.showLabel && item.value === value;
      label.style.transition = 'none';
      label.style.maxWidth = open ? LABEL_OPEN_MAX_W : '0px';
      label.style.paddingLeft = open ? LABEL_OPEN_PADDING_LEFT : '0px';
    });

    list.parentNode.appendChild(clone);
    const button = buttons[index];
    // offsetParent is the positioned clone, so these are already bar-relative.
    const rect = {
      x: button.offsetLeft,
      y: button.offsetTop,
      w: button.offsetWidth,
      h: button.offsetHeight,
    };
    clone.remove();
    return rect;
  };

  useLayoutEffect(() => {
    const indicator = indicatorRef.current;
    const active = itemRefs.current[activeValue];
    if (!indicator || !active) return;

    const reducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const apply = (rect, animated) => {
      indicator.style.transition = animated
        ? `transform ${NAV_TRANSITION}, width ${NAV_TRANSITION}, height ${NAV_TRANSITION}`
        : 'none';
      indicator.style.width = `${rect.w}px`;
      indicator.style.height = `${rect.h}px`;
      indicator.style.transform = `translate3d(${rect.x}px, ${rect.y}px, 0)`;
    };

    const live = () => ({
      x: active.offsetLeft,
      y: active.offsetTop,
      w: active.offsetWidth,
      h: active.offsetHeight,
    });

    const target = measureTarget(activeValue) ?? live();

    if (!hasPositioned.current) {
      // First paint: sit on the active item rather than flying in.
      hasPositioned.current = true;
      apply(target, false);
      indicator.style.opacity = '1';
    } else {
      apply(target, !reducedMotion);
    }

    /*
     * Safety net. If the measured target were ever off -- a font swapping in
     * late, a stylesheet the clone somehow missed -- this pins the outline to
     * the real button once everything has settled. When the measurement was
     * right, which is the normal case, it writes back the identical numbers and
     * nothing moves.
     */
    const settle = () => apply(live(), false);
    const timer = window.setTimeout(settle, NAV_SETTLE_MS);

    // Reflow on window resize: re-measure and jump, no animation.
    const onResize = () => apply(measureTarget(activeValue) ?? live(), false);
    window.addEventListener('resize', onResize);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('resize', onResize);
    };
  }, [activeValue]);

  const go = (value) => {
    window.scrollTo({ top: 0 });
    navigate(value);
  };

  return (
    <Box
      as="header"
      w="100%"
      textAlign="center"
      mt={{ base: '1.25rem', md: '2rem' }}
      px={{ base: 3, md: 6 }}
    >
      <Box
        as="nav"
        aria-label="Primary"
        ref={listRef}
        fontSize={`${NAV_SCALE}rem`}
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        gap={{ base: '0.25em', sm: '0.375em', md: '0.5em' }}
        p={{ base: '0.4em', sm: '0.5em', md: '0.55em' }}
        borderRadius="1.25em"
        bg="rgba(25, 25, 25, 0.55)"
        backdropFilter="blur(20px)"
        border="1px solid rgba(255, 255, 255, 0.08)"
        w="fit-content"
        maxW="100%"
      >
        <Box
          ref={indicatorRef}
          aria-hidden="true"
          position="absolute"
          left={0}
          top={0}
          opacity={0}
          pointerEvents="none"
          zIndex={0}
          borderRadius="0.75em"
          bg="rgba(25, 25, 25, 0.85)"
          border="2px solid rgba(137, 207, 240, 1)"
          boxShadow="0 0 8px rgba(137, 207, 240, 0.2)"
        />

        {navItems.map((item) => (
          <NavButton
            key={item.value}
            ref={(node) => {
              itemRefs.current[item.value] = node;
            }}
            label={item.label}
            icon={item.icon}
            showLabel={item.showLabel}
            isActive={item.value === activeValue}
            onClick={() => go(item.value)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Header;
