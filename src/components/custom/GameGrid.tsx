import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 2, md: 2, lg: 3, xl: 5 }} gap={4} px={'10px'}>
        {isLoading && skeletons.map((el) => <GameCardSkeleton key={el} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
