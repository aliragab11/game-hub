import { Box, Grid, GridItem, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import GameGrid from './components/custom/GameGrid';
import GenreList from './components/custom/GenreList';
import Navbar from './components/custom/Navbar';
import PlatformSelector from './components/custom/PlatformSelector';
import { Genre } from './hooks/useGenres';
import { Platform } from './hooks/usePlatforms';
import SortSelector from './components/custom/SortSelector';
import GameHeading from './components/custom/GameHeading';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid templateColumns={`200px 1fr`}>
      <GridItem colSpan={2}>
        <Navbar
          onSearchText={(searchText) =>
            setGameQuery({ ...gameQuery, searchText })
          }
        />
      </GridItem>

      <GridItem colSpan={1} display={{ base: 'none', lg: 'block' }} px={5}>
        <GenreList
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          selectedGenre={gameQuery.genre}
        />
      </GridItem>

      <GridItem colSpan={{ base: 2, lg: 1 }}>
        <Box paddingLeft={'10px'}>
          <GameHeading gameQuery={gameQuery} />
          <HStack gap={5} marginBottom={5}>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              selectedPlatform={gameQuery.platform}
            />
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              selectedOrder={gameQuery.sortOrder}
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
