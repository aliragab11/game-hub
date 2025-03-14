import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useGames from '../../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  const skeletons = Array.from({ length: 15 }, (_, i) => i + 1);
  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      next={() => fetchNextPage()}
      hasMore={hasNextPage}
      loader={<Spinner />}
    >
      <SimpleGrid columns={{ sm: 2, md: 2, lg: 3, xl: 4 }} gap={4} p={'10px'}>
        {isLoading && skeletons.map((el) => <GameCardSkeleton key={el} />)}
        {games?.pages.map((game, index) => (
          <React.Fragment key={index}>
            {game?.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
