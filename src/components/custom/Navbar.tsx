import { Box, HStack, Image } from '@chakra-ui/react';
import logo from '../../../src/assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <HStack p={'10px'}>
      <Link to="/">
        <Box boxSize={'60px'}>
          <Image src={logo} alt="logo" objectFit={'cover'} />
        </Box>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
