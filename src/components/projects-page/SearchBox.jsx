import { Box, Input, VStack, Collapsible, Checkbox, Button, HStack } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const SearchBox = ({ projectData, onFilter }) => {
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [selectedTag, setSelectedTag] = useState(null); // State for the single selected tag
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

  // Get all unique tags and their counts
  const tagCounts = projectData.reduce((acc, project) => {
    project.tags.forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});

  // Filter projects whenever searchQuery or selectedTag changes
  useEffect(() => {
    const filteredProjects = projectData.filter((project) => {
      const matchesSearchQuery =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesSelectedTag =
        !selectedTag || project.tags.includes(selectedTag);

      return matchesSearchQuery && matchesSelectedTag;
    });

    onFilter(filteredProjects); // Pass filtered projects back to parent
  }, [searchQuery, selectedTag, projectData, onFilter]); // Dependencies for filtering

  // Handle tag selection (only one tag can be selected at a time)
  const handleTagSelect = (tag) => {
    setSelectedTag((prevTag) => (prevTag === tag ? null : tag)); // Deselect if the same tag is clicked
  };

  // Clear the search query and selected tag
  const handleClear = () => {
    setSearchQuery('');
    setSelectedTag(null);
  };

  return (
    <Box w="100%" position="relative" h="auto">
      {/* Search Input and Clear Button */}
      <HStack spacing={2} align="center" w="100%">
        <Input
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          size="lg"
          flex="1" // Make the input take up the remaining space
          onFocus={() => setIsDropdownOpen(true)}
          onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
        />
        {(searchQuery || selectedTag) && (
          <Button
            onClick={handleClear}
            size="lg"
            variant="outline"
            colorScheme="red"
          >
            Clear
          </Button>
        )}
      </HStack>

      {/* Dropdown for Tags */}
      <Collapsible.Root open={isDropdownOpen} unmountOnExit>
        <Collapsible.Trigger />
        <Collapsible.Content>
          <Box
            mt={-6}
            bg="rgba(25, 25, 25, 0.95)"
            borderBottomRadius="md"
            p={4}
            zIndex={10}
            position="absolute"
            w="100%"
          >
            <VStack align="start" spacing={2}>
              {Object.entries(tagCounts).map(([tag, count]) => (
                <Checkbox.Root
                  key={tag}
                  checked={selectedTag === tag} // Only one checkbox can be selected
                  onCheckedChange={() => handleTagSelect(tag)} // Handle single tag selection
                >
                  <Checkbox.HiddenInput />
                  <Checkbox.Control>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  <Checkbox.Label>
                    {tag} ({count})
                  </Checkbox.Label>
                </Checkbox.Root>
              ))}
            </VStack>
          </Box>
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  );
};

export default SearchBox;