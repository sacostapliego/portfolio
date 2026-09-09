/*
 * One source of truth for the white rounded-square badges on the home page,
 * so the accolade logos (HomeContent) and the tech icons (Skills) always step
 * through the same breakpoints instead of drifting apart.
 */

// Large badges: the university / award logos on the accolade cards.
export const ACCOLADE_BADGE = { base: '3rem', md: '5rem', lg: '6rem' };

// Small badges: the tech icons in the skills grid.
export const SKILL_BADGE = { base: '3rem', md: '3.5rem', lg: '4rem' };

// Shared chrome for both.
export const BADGE_BG = 'rgba(251,247,245)';
export const BADGE_RADIUS = '0.5rem';
export const BADGE_PADDING = '0.5rem';
