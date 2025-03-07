import { Box, Button } from '@chakra-ui/react';
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '../ui/menu';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms, { Platform } from '@/hooks/usePlatforms';

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data: platforms, error } = usePlatforms();

  if (error) return null;
  return (
    <Box px={'10px'}>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline" size="sm">
            {selectedPlatform?.name || 'Platforms'} <BsChevronDown />
          </Button>
        </MenuTrigger>
        <MenuContent>
          {platforms.map((platform) => (
            <MenuItem
              value={platform.name}
              key={platform.id}
              onClick={() => onSelectPlatform(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </Box>
  );
};

export default PlatformSelector;
