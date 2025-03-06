import { Card, Heading, Image } from '@chakra-ui/react';
import { Game } from '../../hooks/useGames';
import PlatformIconList from './PlatformIconList';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <Card.Body>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
