import { Box, Flex, Text, Stack, Wrap, Badge } from '@chakra-ui/react';
import { formatRange } from './dates';
import { accentOf } from './accent';

/** Date range line, shared by the detail panel and the mobile list. */
export const EntryMeta = ({ entry }) => (
  <Text
    fontSize={{ base: '0.75rem', md: '0.8125rem' }}
    fontWeight="600"
    letterSpacing="0.04em"
    color="rgba(255,255,255,0.55)"
    fontVariantNumeric="tabular-nums"
  >
    {formatRange(entry)}
  </Text>
);

/**
 * The body of one entry: title, org, summary, highlights, tags. Rendered in the
 * detail panel under the lane chart and, on mobile, inline in the date list.
 */
const EntryDetail = ({ entry, showMeta = true }) => {
  const accent = accentOf(entry);

  return (
    <Box minW={0}>
      {showMeta && (
        <Box mb="0.625rem">
          <EntryMeta entry={entry} />
        </Box>
      )}

      <Text
        as="h3"
        fontSize={{ base: '1.25rem', md: '1.5rem' }}
        fontWeight="800"
        lineHeight="1.2"
        color="rgba(251,247,245)"
      >
        {entry.title}
      </Text>

      <Text
        fontSize={{ base: '0.875rem', md: '1rem' }}
        fontWeight="600"
        color="rgba(255,255,255,0.7)"
        mt="0.125rem"
      >
        {entry.org}
        {entry.location && (
          <Text as="span" fontWeight="500" color="rgba(255,255,255,0.45)">
            {' '}&middot; {entry.location}
          </Text>
        )}
      </Text>

      {entry.summary && (
        <Text
          fontSize={{ base: '0.875rem', md: '0.9375rem' }}
          lineHeight="1.65"
          color="rgba(255,255,255,0.72)"
          mt="0.75rem"
          maxW="60ch"
        >
          {entry.summary}
        </Text>
      )}

      {entry.highlights?.length > 0 && (
        <Stack as="ul" gap="0.375rem" mt="0.75rem" pl="0" listStyleType="none">
          {entry.highlights.map((line, i) => (
            <Flex as="li" key={i} gap="0.625rem" align="flex-start">
              <Box mt="0.55rem" w="0.25rem" h="0.25rem" borderRadius="full" bg={accent} flexShrink={0} />
              <Text fontSize={{ base: '0.8125rem', md: '0.875rem' }} lineHeight="1.6" color="rgba(255,255,255,0.66)">
                {line}
              </Text>
            </Flex>
          ))}
        </Stack>
      )}

      {entry.tags?.length > 0 && (
        <Wrap gap="0.5rem" mt="1rem">
          {entry.tags.map((tag) => (
            <Badge
              key={tag}
              bg="rgba(255,255,255,0.06)"
              color="rgba(255,255,255,0.7)"
              border="1px solid rgba(255,255,255,0.08)"
              borderRadius="0.5rem"
              px="0.5rem"
              py="0.1875rem"
              fontSize="0.75rem"
              fontWeight="500"
              textTransform="none"
            >
              {tag}
            </Badge>
          ))}
        </Wrap>
      )}
    </Box>
  );
};

export default EntryDetail;
