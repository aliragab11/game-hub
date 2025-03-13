import useGenres, { Genre } from '@/hooks/useGenres';
import getCroppedImage from '@/services/image-url';
import { Button, Heading, HStack, Image, List } from '@chakra-ui/react';
import GenreItemSkeleton from './GenreItemSkeleton';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data: genres, isLoading, error } = useGenres();
  const skeletons = Array.from({ length: 12 }, (_, i) => i + 1);
  if (error) return null;
  return (
    <>
      <Heading fontSize={'2xl'} mb={3}>
        Genres
      </Heading>
      <List.Root listStyle={'none'}>
        {isLoading && skeletons.map((el) => <GenreItemSkeleton key={el} />)}
        {genres?.results.map((genre) => (
          <List.Item key={genre.id} paddingY={1}>
            <HStack>
              <Image
                src={getCroppedImage(genre.image_background)}
                alt={genre.name}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                unstyled
                fontSize={'lg'}
                _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
                textAlign={'left'}
                onClick={() => onSelectGenre(genre)}
                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
