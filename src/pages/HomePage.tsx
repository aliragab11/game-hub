import GameGrid from '@/components/custom/GameGrid';
import GameHeading from '@/components/custom/GameHeading';
import GenreList from '@/components/custom/GenreList';
import PlatformSelector from '@/components/custom/PlatformSelector';
import SortSelector from '@/components/custom/SortSelector';
import { Box, Grid, GridItem, HStack } from '@chakra-ui/react';

function HomePage() {
  return (
    <Grid templateColumns={`200px 1fr`}>
      <GridItem colSpan={1} display={{ base: 'none', lg: 'block' }} px={5}>
        <GenreList />
      </GridItem>

      <GridItem colSpan={{ base: 2, lg: 1 }}>
        <Box paddingLeft={'10px'}>
          <GameHeading />
          <HStack gap={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default HomePage;
