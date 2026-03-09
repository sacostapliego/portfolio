import React, { useMemo } from 'react';
import { Box, Tabs } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LuHouse } from 'react-icons/lu';
import { FaRegFolder, FaCode } from 'react-icons/fa6';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { IoExtensionPuzzleOutline } from 'react-icons/io5';
import NavButton from './common/NavButton';

const navItems = [
  { label: 'Home', icon: LuHouse, value: '/' },
  { label: 'Projects', icon: FaRegFolder, value: '/projects' },
  { label: 'Skills', icon: FaCode, value: '/skills' },
  { label: 'Playground', icon: IoExtensionPuzzleOutline, value: '/playground' },
  { label: 'Résumé', icon: IoDocumentTextOutline, value: '/resume' },
];

const getActiveTabValue = (pathname) => {
  if (pathname === '/') return '/';
  if (pathname.startsWith('/projects')) return '/projects';
  if (pathname.startsWith('/skills')) return '/skills';
  if (pathname.startsWith('/playground')) return '/playground';
  if (pathname.startsWith('/resume')) return '/resume';
  return '/';
};

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const activeValue = useMemo(() => getActiveTabValue(location.pathname), [location.pathname]);

  return (
    <Box
      as="header"
      top={{ base: '15px', md: '30px' }}
      w="100%"
      textAlign="center"
      mt={{ base: '20px', md: '60px' }}
      px={{ base: 3, md: 6 }}
    >
      <Tabs.Root
        value={activeValue}
        onValueChange={(e) => {
          window.scrollTo({ top: 0 });
          navigate(e.value);
        }}
        variant="plain"
        size="md"
        className="nav-tabs"
      >
        <Tabs.List
          as={Box}
          className="nav-tabs-list"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          gap={{ base: 2, sm: 3, md: 4 }}
          px={{ base: 3, sm: 4, md: 5 }}
          py={{ base: 2, sm: 2.5, md: 3 }}
          borderRadius="16px"
          backdropFilter="blur(20px)"
          border="1px solid rgba(255, 255, 255, 0.06)"
          position="relative"
          w="fit-content"
          minW="min-content"
        >
          <Tabs.Indicator
            position="absolute"
            borderRadius="12px"
            bg="rgba(25, 25, 25, 0.85)"
            border="2px solid rgba(137, 207, 240, 1)"
            boxShadow="0 0 8px rgba(137, 207, 240, 0.2)"
            transition="all 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
            className="nav-tabs-indicator"
          />
          {navItems.map((item) => (
            <Tabs.Trigger key={item.value} value={item.value} asChild>
              <Box
                as="span"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                minW={{ base: '40px', sm: '44px', md: '48px' }}
                minH={{ base: '40px', sm: '44px', md: '48px' }}
                w={{ base: '40px', sm: '44px', md: '48px' }}
                h={{ base: '40px', sm: '44px', md: '48px' }}
                bg="transparent"
                _selected={{ bg: 'transparent' }}
                onClick={() => {
                  window.scrollTo({ top: 0 });
                  navigate(item.value);
                }}
              >
                <NavButton
                  label={item.label}
                  icon={item.icon}
                  isActive={item.value === activeValue}
                />
              </Box>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>
    </Box>
  );
};

export default Header;
