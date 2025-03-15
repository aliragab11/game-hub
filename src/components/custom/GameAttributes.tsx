import { SimpleGrid, Text } from '@chakra-ui/react';
import DefinitionItem from './DefinitionItem';
import CriticScore from './CriticScore';
import { Game } from '@/entities/Game';

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid as={'dl'} columns={2} gap={5} my={5}>
      <DefinitionItem term="platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>

      <DefinitionItem term="genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="publishers">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
