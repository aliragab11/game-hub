import useGenres from '@/hooks/useGenres';
import getCroppedImage from '@/services/image-url';
import { HStack, Image, List, Text } from '@chakra-ui/react';
import GenreItemSkeleton from './GenreItemSkeleton';

const GenreList = () => {
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
            <Text fontSize={'lg'}>{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
