import { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import './fade.css';
import './reveal.css';

/*
 * Fades a section up as it scrolls into view, once. Same behaviour the home
 * page sections use -- reveal.css supplies the transform and depends on the
 * fade-in-up keyframes in fade.css, so both are imported here rather than left
 * to the caller.
 *
 * Children of an element marked `className="projects-grid"` inside are
 * staggered by reveal.css.
 */
const Reveal = ({ threshold = 0.15, children, ...rest }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect a reduced-motion preference: show it immediately, no animation.
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible');
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <Box ref={ref} className="reveal" {...rest}>
      {children}
    </Box>
  );
};

export default Reveal;
