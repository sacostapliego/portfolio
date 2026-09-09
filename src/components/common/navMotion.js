/*
 * Shared between NavButton and Header so the label and the outline animate on
 * exactly the same curve.
 *
 * That match is load-bearing, not cosmetic. While a label opens, every button's
 * left edge and width is a straight-line function of that label's eased
 * progress. Animating the outline between the same two endpoints on the same
 * curve therefore keeps it locked to the button for the whole move. Change the
 * duration or easing here and both stay in step; change one in isolation and
 * the outline drifts off the button mid-flight.
 */
export const NAV_DURATION_MS = 300;
export const NAV_EASE = 'cubic-bezier(0.4, 0, 0.2, 1)';
export const NAV_TRANSITION = `${NAV_DURATION_MS}ms ${NAV_EASE}`;

// The open state of a nav label. Header re-applies these to an offscreen clone
// to measure where the outline needs to land, so they must be the values
// NavButton actually renders.
export const LABEL_OPEN_MAX_W = '12em';
export const LABEL_OPEN_PADDING_LEFT = '0.55em';
export const LABEL_ATTR = 'data-nav-label';
