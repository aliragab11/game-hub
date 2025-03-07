import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { BsGlobe } from 'react-icons/bs';
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from 'react-icons/fa6';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo, SiSega } from 'react-icons/si';
import { FaGamepad } from 'react-icons/fa';
import { Platform } from '../../hooks/useGames';

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
    sega: SiSega,
    'neo-geo': FaGamepad,
    'commodore-amiga': FaGamepad,
    atari: FaGamepad,
    '3do': FaGamepad,
  };

  return (
    <HStack>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color={'gray.500'}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
