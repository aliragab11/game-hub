import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { Genre } from '@/hooks/useGenres';

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data: games, error, isLoading } = useGames(selectedGenre);
  const skeletons = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 2, md: 2, lg: 3, xl: 4 }} gap={4} p={'10px'}>
        {isLoading && skeletons.map((el) => <GameCardSkeleton key={el} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
