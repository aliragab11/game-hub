import ExpandableText from '@/components/custom/ExpandableText';
import GameAttributes from '@/components/custom/GameAttributes';
import GameScreenshots from '@/components/custom/GameScreenshots';
import GameTrailer from '@/components/custom/GameTrailer';
import useGame from '@/hooks/useGame';
import { Box, Heading, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <Box p={5}>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenshots gameId={game.id} />
    </Box>
  );
};

export default GameDetailPage;
