import { HStack, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

const GenreItemSkeleton = () => {
  return (
    <HStack paddingY={1}>
      <SkeletonCircle size="10" />
      <SkeletonText noOfLines={1} h={6} />
    </HStack>
  );
};

export default GenreItemSkeleton;
