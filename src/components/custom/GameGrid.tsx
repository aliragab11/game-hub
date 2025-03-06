import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../../hooks/useGames';
import GameCard from './GameCard';

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 2, md: 2, lg: 3, xl: 5 }} gap={4} px={'10px'}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
