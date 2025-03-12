import { GameQuery } from '@/App';
import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import React from 'react';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data: games,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = Array.from({ length: 15 }, (_, i) => i + 1);
  if (error) return <Text>{error.message}</Text>;
  return (
    <Box p={'10px'}>
      <SimpleGrid columns={{ sm: 2, md: 2, lg: 3, xl: 4 }} gap={4}>
        {isLoading && skeletons.map((el) => <GameCardSkeleton key={el} />)}
        {games?.pages.map((game, index) => (
          <React.Fragment key={index}>
            {game?.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} my={5}>
          {isFetchingNextPage ? 'LOADING...' : 'Load more'}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
