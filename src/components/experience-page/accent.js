/*
 * Each entry brings its own colour, set on the entry in TimelineData.jsx.
 *
 * It used to be looked up from the entry's `type` (work / education), but that
 * was the wrong axis: the colour identifies the specific thing -- Georgia
 * State's blue, your employer's purple -- not the category it belongs to. Two
 * employers would have collided under the old scheme, and an entry could not be
 * recoloured or removed without thinking about what else shared its type.
 *
 * Any CSS colour works. Selection is expressed with opacity on the whole bar,
 * so one solid value per entry is all that is needed -- no alpha variants.
 */

/** Used when an entry has no `color`, so a missing one is visible, not silent. */
export const DEFAULT_ACCENT = 'rgba(200, 200, 200, 1)';

export const accentOf = (entry) => entry.color ?? DEFAULT_ACCENT;
