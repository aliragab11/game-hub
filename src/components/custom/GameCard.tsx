import { Card, Heading, HStack, Image } from '@chakra-ui/react';
import { Game } from '@/hooks/Game';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImage from '../../services/image-url';
import Emoji from './Emoji';
import { Link } from 'react-router';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root overflow="hidden">
      <Link to={`/games/${game.slug}`}>
        <Image
          src={getCroppedImage(game.background_image)}
          alt={game.name}
          _hover={{ transform: 'scale(1.03)', transition: 'all 0.15s ease-in' }}
        />
        <Card.Body>
          <HStack justifyContent={'space-between'} mb={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize={'2xl'}>
            {game.name}
            <Emoji rating={game.rating_top} />
          </Heading>
        </Card.Body>
      </Link>
    </Card.Root>
  );
};

export default GameCard;
