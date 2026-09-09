import { useMemo, useState } from 'react';
import { Box } from '@chakra-ui/react';
import Reveal from '../animations/Reveal';
import '../animations/fade.css';
import LaneChart from './LaneChart';
import DateColumnList from './DateColumnList';
import EntryDetail from './EntryDetail';

/*
 * Which view desktop gets. Mobile is always the list -- there is no room for a
 * bar worth tapping on a phone.
 *
 *   'chart'  lane chart + detail panel from md up   (default)
 *   'list'   the date list at every width
 *
 * Flipping this to 'list' keeps LaneChart and everything it depends on in the
 * codebase, so it is a reversible decision, not a deletion.
 */
const DESKTOP_VIEW = 'chart';

const Timeline = ({ entries }) => {
  const showChart = DESKTOP_VIEW === 'chart';

  // Open on the most recent entry. The panel is the point of the chart, so
  // landing on an empty slot wastes the first impression and leaves a chunk of
  // dead space until something is clicked.
  const mostRecent = useMemo(
    () => [...entries].sort((a, b) => b.start.localeCompare(a.start))[0],
    [entries]
  );
  const [selectedId, setSelectedId] = useState(mostRecent?.id);
  const selected = entries.find((entry) => entry.id === selectedId) ?? mostRecent;

  if (!entries?.length) return null;

  return (
    <Reveal>
      {/* Lane chart + detail panel, md and up */}
      {showChart && (
      <Box display={{ base: 'none', md: 'block' }}>
        <LaneChart
          entries={entries}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />

        {/*
         * One detail slot. Selecting another bar replaces what is in it rather
         * than stacking a second panel, and the `key` makes React swap the
         * subtree so the fade-in replays on every change instead of only the
         * first. Once opened the slot stays mounted, so swapping between
         * entries does not collapse and re-expand the page.
         */}
        <Box
          id="experience-detail"
          role="region"
          aria-live="polite"
          aria-label="Selected entry"
          mt="2.5rem"
        >
          <Box
            key={selected.id}
            className="fade-in"
            borderTop="1px solid rgba(255,255,255,0.08)"
            pt="2rem"
          >
            <EntryDetail entry={selected} />
          </Box>
        </Box>
      </Box>
      )}

      {/* Date-column list: below md, or at every width when DESKTOP_VIEW is 'list' */}
      <Box display={showChart ? { base: 'block', md: 'none' } : 'block'}>
        <DateColumnList entries={entries} />
      </Box>
    </Reveal>
  );
};

export default Timeline;
