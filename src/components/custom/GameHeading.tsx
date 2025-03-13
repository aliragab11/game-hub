import { GameQuery } from '@/App';
import useGenre from '@/hooks/useGenre';
import usePlatform from '@/hooks/usePlatform';
import { Heading } from '@chakra-ui/react';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const selectedGenre = useGenre(gameQuery.genreId);
  const selectedPlatform = usePlatform(gameQuery.platformId);
  const heading = `${selectedPlatform?.name || ''} ${selectedGenre?.name || ''} Games`;

  return (
    <Heading as={'h1'} my={5} fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
