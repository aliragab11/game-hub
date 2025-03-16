import ExpandableText from '@/components/custom/ExpandableText';
import GameAttributes from '@/components/custom/GameAttributes';
import GameScreenshots from '@/components/custom/GameScreenshots';
import GameTrailer from '@/components/custom/GameTrailer';
import useGame from '@/hooks/useGame';
import { GridItem, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} p={5}>
      <GridItem>
        <Heading fontWeight={'bold'} mb={1}>
          {game.name}
        </Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
