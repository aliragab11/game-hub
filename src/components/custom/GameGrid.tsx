import { GameQuery } from '@/App';
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeletons = Array.from({ length: 15 }, (_, i) => i + 1);
  if (error) return <Text>{error.message}</Text>;
  return (
    <SimpleGrid columns={{ sm: 2, md: 2, lg: 3, xl: 4 }} gap={4} p={'10px'}>
      {isLoading && skeletons.map((el) => <GameCardSkeleton key={el} />)}
      {games?.results.map((game) => <GameCard key={game.id} game={game} />)}
    </SimpleGrid>
  );
};

export default GameGrid;
