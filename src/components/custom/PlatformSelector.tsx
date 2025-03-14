import usePlatform from '@/hooks/usePlatform';
import usePlatforms from '@/hooks/usePlatforms';
import useGameQueryStore from '@/store';
import { Button } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '../ui/menu';

const PlatformSelector = () => {
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const { data: platforms, error } = usePlatforms();
  const selectedPlatform = usePlatform(platformId);
  if (error) return null;
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform?.name || 'Platforms'} <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {platforms?.results.map((platform) => (
          <MenuItem
            value={platform.name}
            key={platform.id}
            onClick={() => setPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
