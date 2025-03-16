import useScreenshots from '@/hooks/useScreenshots';
import { Image, SimpleGrid } from '@chakra-ui/react';

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;
  if (data?.results.length === 0) return null;
  return (
    <SimpleGrid columns={{ base: 1, sm: 2 }} gap={2}>
      {data?.results.map((img) => (
        <Image key={img.id} src={img.image} alt="Game screenshot" />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
