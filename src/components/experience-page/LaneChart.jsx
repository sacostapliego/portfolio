import { useMemo } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { chartDomain, entryRange, formatRange } from './dates';
import { accentOf } from './accent';

const LABEL_W = { md: '11rem', lg: '14rem' };
const ROW_H = '2rem';
const ROW_GAP = '0.875rem';
const FADE_MASK = 'linear-gradient(to right, black calc(100% - 1.25rem), transparent)';

/*
 * Selection is carried by opacity on the whole bar rather than by swapping in
 * washed-out colours. A translucent fill behind a near-opaque border reads as a
 * different, muddier colour than the brand one; fading the entire bar keeps the
 * hue honest and just makes the unselected ones recede.
 */
const IDLE_OPACITY = 0.4;
const HOVER_OPACITY = 0.7;

/**
 * Horizontal lane chart: one bar per entry on a shared year axis.
 *
 * This is the view that earns combining work and school on one graphic -- a
 * stacked list can only show that two things happened, whereas overlapping bars
 * show that a job started while the degree was still running.
 *
 * Rendered from `md` up. Narrow screens get DateColumnList instead: bars sized
 * as a fraction of a phone's width collapse into slivers, and the interaction
 * this drives (tap a bar, read the detail below) needs a target worth tapping.
 */
const LaneChart = ({ entries, selectedId, onSelect }) => {
  // Oldest first so the bars cascade down and to the right with the axis.
  const rows = useMemo(
    () => [...entries].sort((a, b) => a.start.localeCompare(b.start)),
    [entries]
  );
  const domain = useMemo(() => chartDomain(entries), [entries]);

  return (
    <Box>
      <Flex direction="column" gap={ROW_GAP}>
        {rows.map((entry) => {
          const accent = accentOf(entry);
          const { from, to, ongoing } = entryRange(entry);
          const left = domain.percent(from);
          const width = Math.max(domain.percent(to) - left, 1.5);
          const selected = entry.id === selectedId;

          return (
            <Box
              as="button"
              type="button"
              key={entry.id}
              onClick={() => onSelect(entry.id)}
              aria-pressed={selected}
              aria-controls="experience-detail"
              textAlign="left"
              bg="transparent"
              border="0"
              p="0"
              cursor="pointer"
              display="flex"
              alignItems="center"
              gap={{ md: '1rem', lg: '1.5rem' }}
              borderRadius="0.5rem"
              outline="none"
              _focusVisible={{ boxShadow: `0 0 0 2px ${accent}` }}
              css={{ '&:hover .lane-bar[data-state="idle"]': { opacity: HOVER_OPACITY } }}
            >
              {/* Label gutter: bars can be too narrow to hold text, so the
                  title never lives inside the bar. */}
              <Box w={LABEL_W} flexShrink={0} minW={0}>
                <Text
                  fontSize={{ md: '0.875rem', lg: '0.9375rem' }}
                  fontWeight="700"
                  lineHeight="1.25"
                  color={selected ? 'rgba(251,247,245)' : 'rgba(255,255,255,0.72)'}
                  transition="color 200ms ease"
                  truncate
                >
                  {entry.title}
                </Text>
                <Text
                  fontSize={{ md: '0.75rem', lg: '0.8125rem' }}
                  fontWeight="500"
                  color="rgba(255,255,255,0.45)"
                  truncate
                >
                  {entry.org}
                </Text>
              </Box>

              {/* Track */}
              <Box position="relative" flex="1" minW={0} h={ROW_H}>
                {/* Year gridlines, drawn per row so they sit behind each bar. */}
                {domain.years.map((year) => (
                  <Box
                    key={year}
                    aria-hidden="true"
                    position="absolute"
                    top={0}
                    bottom={0}
                    left={`${domain.percent(new Date(year, 0, 1))}%`}
                    w="1px"
                    bg="rgba(255,255,255,0.07)"
                  />
                ))}

                <Box
                  className="lane-bar"
                  data-state={selected ? 'active' : 'idle'}
                  position="absolute"
                  top="50%"
                  transform="translateY(-50%)"
                  left={`${left}%`}
                  w={`${width}%`}
                  h={selected ? '1.75rem' : '1.375rem'}
                  borderRadius="0.375rem"
                  bg={accent}
                  opacity={selected ? 1 : IDLE_OPACITY}
                  transition="height 200ms ease, opacity 200ms ease"
                  /* An ongoing entry stops at today, so fade its right edge
                     rather than implying it ends there. */
                  css={
                    ongoing
                      ? {
                          maskImage: FADE_MASK,
                          WebkitMaskImage: FADE_MASK, // Safari
                        }
                      : undefined
                  }
                />
              </Box>
            </Box>
          );
        })}
      </Flex>

      {/* Year axis, aligned to the track column */}
      <Flex mt="0.75rem" gap={{ md: '1rem', lg: '1.5rem' }} aria-hidden="true">
        <Box w={LABEL_W} flexShrink={0} />
        <Box position="relative" flex="1" minW={0} h="1.25rem">
          {domain.years.map((year) => (
            <Text
              key={year}
              position="absolute"
              left={`${domain.percent(new Date(year, 0, 1))}%`}
              top={0}
              pl="0.375rem"
              fontSize="0.75rem"
              fontWeight="600"
              letterSpacing="0.04em"
              color="rgba(255,255,255,0.4)"
              fontVariantNumeric="tabular-nums"
            >
              {year}
            </Text>
          ))}
        </Box>
      </Flex>

      {/* Screen readers get the ranges as text; the bars are purely visual. */}
      <Box srOnly>
        <ul>
          {rows.map((entry) => (
            <li key={entry.id}>
              {entry.title}, {entry.org}: {formatRange(entry)}
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default LaneChart;
