import { HStack, Switch } from '@chakra-ui/react';
import { useColorMode } from '../ui/color-mode';

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch.Root
        colorPalette={'green'}
        checked={colorMode === 'dark'}
        onChange={toggleColorMode}
      >
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>

        <Switch.Label display={{ base: 'none', sm: 'block' }}>
          {colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
        </Switch.Label>
      </Switch.Root>
    </HStack>
  );
};

export default ColorModeSwitch;
