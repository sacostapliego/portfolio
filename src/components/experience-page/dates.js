/*
 * Entry dates are stored as 'YYYY-MM' so the lane chart can place them on a
 * real axis, and `end: null` means still going. Everything the UI shows is
 * derived from those two fields -- there are no display strings in the data to
 * drift out of sync with the positions on the chart.
 */

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

/** First instant of a 'YYYY-MM'. */
export const monthStart = (value) => {
  const [year, month] = value.split('-').map(Number);
  return new Date(year, month - 1, 1);
};

/** Last instant of a 'YYYY-MM' -- end dates are inclusive of their month. */
export const monthEnd = (value) => {
  const [year, month] = value.split('-').map(Number);
  return new Date(year, month, 0, 23, 59, 59);
};

/** An ongoing entry runs to today. */
export const entryRange = (entry, now = new Date()) => ({
  from: monthStart(entry.start),
  to: entry.end ? monthEnd(entry.end) : now,
  ongoing: !entry.end,
});

export const formatMonth = (value) => {
  const [year, month] = value.split('-').map(Number);
  return `${MONTHS[month - 1]} ${year}`;
};

export const formatRange = (entry) =>
  `${formatMonth(entry.start)} – ${entry.end ? formatMonth(entry.end) : 'Present'}`;

/**
 * Whole-year domain covering every entry, so the axis ticks land on clean year
 * boundaries instead of wherever the earliest entry happens to start.
 */
export const chartDomain = (entries, now = new Date()) => {
  const bounds = entries.map((entry) => entryRange(entry, now));
  const firstYear = Math.min(...bounds.map((b) => b.from.getFullYear()));
  const lastYear = Math.max(...bounds.map((b) => b.to.getFullYear()), now.getFullYear());
  const from = new Date(firstYear, 0, 1);
  const to = new Date(lastYear + 1, 0, 1);
  const span = to - from;

  return {
    from,
    to,
    years: Array.from({ length: lastYear - firstYear + 1 }, (_, i) => firstYear + i),
    /** Position of a date as a percentage across the chart. */
    percent: (date) => ((date - from) / span) * 100,
  };
};
