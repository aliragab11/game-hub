import useGenre from '@/hooks/useGenre';
import usePlatform from '@/hooks/usePlatform';
import useGameQueryStore from '@/store';
import { Heading } from '@chakra-ui/react';

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const selectedGenre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(platformId);

  const heading = `${selectedPlatform?.name || ''} ${selectedGenre?.name || ''} Games`;

  return (
    <Heading as={'h1'} my={5} fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
