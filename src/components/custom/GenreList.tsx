import useGenres, { Genre } from '@/hooks/useGenres';
import getCroppedImage from '@/services/image-url';
import { Button, HStack, Image, List } from '@chakra-ui/react';
import GenreItemSkeleton from './GenreItemSkeleton';

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data: genres, isLoading } = useGenres();
  const skeletons = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <List.Root listStyle={'none'}>
      {isLoading && skeletons.map((el) => <GenreItemSkeleton key={el} />)}
      {genres.map((genre) => (
        <List.Item key={genre.id} paddingY={1}>
          <HStack>
            <Image
              src={getCroppedImage(genre.image_background)}
              alt={genre.name}
              boxSize="32px"
              borderRadius={8}
            />
            <Button
              unstyled
              fontSize={'lg'}
              _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
              textAlign={'left'}
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
