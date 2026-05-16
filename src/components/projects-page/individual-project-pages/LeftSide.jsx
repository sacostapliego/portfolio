import { useParams } from 'react-router-dom';
import { Box, Heading, Text, Flex, Separator, Icon, List } from '@chakra-ui/react';
import projectData from '../ProjectData';
import { FaRegStar } from 'react-icons/fa';
import HoverArrowButton from '../../common/HoverArrowButton';
import SocialIconButton from '../../common/SocialIconButton';

function LeftSideProjectsPage() {
  const { projectName } = useParams();

  const project = projectData.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === projectName
  );

  return (
    <Flex
      direction="column"
      className="fade-in"
      px={{ base: '1rem', lg: '2.5rem' }}
      pb="2.5rem"
      mx="auto"
      w="100%"
    >
      <Box>
        {/* Title */}
        <Heading
          as="h1"
          fontSize={{ base: '2rem', md: '2.5rem', lg: '3.5rem' }}
          mb={{ base: '1.5rem', md: '1.5rem' }}
        >
          <Text color="rgba(251,247,245)" fontWeight="900">
            {project.title}
          </Text>
        </Heading>

        {/* Separator */}
        <Separator mb="1.5rem" />

        {/* Description */}
        <Box mb="2rem">
          {project.description.split('\n').map((paragraph, index) => (
            <Text key={index} fontSize="1rem" color="gray.300" mb="1rem">
              {paragraph}
            </Text>
          ))}
        </Box>

        {/* Key Features */}
        {project.keyfeatures && project.keyfeatures.length > 0 && (
          <Box >
            <Heading
              as="h2"
              fontSize={{ base: "1.2rem", md: "1.2rem", '2xl': "1.5rem" }}
              mb="1rem"
              color="rgba(251,247,245)"
              fontWeight="700"
              display="flex"
              alignItems="center"
              gap={'0.5rem'}
            >
              <FaRegStar color="white" />
              Key Features
            </Heading>

            <List.Root gap={'1rem'} pl={'1.5rem'}>
              {project.keyfeatures.map((feature, index) => (
                <List.Item
                  key={index}
                  fontSize="1rem"
                  color="gray.300"
                  lineHeight="1.6"
                >
                  {feature}
                </List.Item>
              ))}
            </List.Root>
          </Box>
        )}
      </Box>
    </Flex>
  );
}

export default LeftSideProjectsPage;