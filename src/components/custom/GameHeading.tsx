import { GameQuery } from '@/App';
import useGenres from '@/hooks/useGenres';
import usePlatforms from '@/hooks/usePlatforms';
import { Heading } from '@chakra-ui/react';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const selectedGenre = genres.results.find((g) => g.id === gameQuery.genreId);
  const selectedPlatform = platforms.results.find(
    (p) => p.id === gameQuery.platformId
  );
  const heading = `${selectedPlatform?.name || ''} ${selectedGenre?.name || ''} Games`;

  return (
    <Heading as={'h1'} my={5} fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
