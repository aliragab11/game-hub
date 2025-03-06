import { Card, Heading, Image } from '@chakra-ui/react';
import { Game } from '../../hooks/useGames';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root maxW="xl" overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <Card.Body>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
