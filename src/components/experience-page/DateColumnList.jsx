import { useMemo } from 'react';
import { Box, Flex, Text, Stack } from '@chakra-ui/react';
import EntryDetail, { EntryMeta } from './EntryDetail';
import { accentOf } from './accent';

/**
 * The mobile view (below `md`): every entry laid out in full, newest first,
 * with the date range doing the structural work instead of a chart.
 *
 * Nothing here is interactive -- on a phone there is no room for a bar worth
 * tapping, and no reason to hide detail behind a tap when the whole list fits
 * in a scroll.
 */
const DateColumnList = ({ entries }) => {
  // Newest first, résumé convention.
  const rows = useMemo(
    () => [...entries].sort((a, b) => b.start.localeCompare(a.start)),
    [entries]
  );

  return (
    <Stack as="ol" className="projects-grid" gap="2.5rem" pl="0" listStyleType="none">
      {rows.map((entry) => (
        <Flex as="li" key={entry.id} direction="column" gap="0.75rem">
          <EntryMeta entry={entry} />
          {/* The rule carries the entry's brand colour, which is what tells
              school and work apart now that the badges are gone. */}
          <Box borderLeft="2px solid" borderColor={accentOf(entry)} pl="1rem">
            <EntryDetail entry={entry} showMeta={false} />
          </Box>
        </Flex>
      ))}
    </Stack>
  );
};

export default DateColumnList;
