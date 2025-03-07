import { Grid, GridItem } from '@chakra-ui/react';
import { useState } from 'react';
import GameGrid from './components/custom/GameGrid';
import GenreList from './components/custom/GenreList';
import Navbar from './components/custom/Navbar';
import PlatformSelector from './components/custom/PlatformSelector';
import { Genre } from './hooks/useGenres';
import { Platform } from './hooks/usePlatforms';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatfrom] = useState<Platform | null>(
    null
  );
  return (
    <Grid templateColumns={`200px 1fr`}>
      <GridItem colSpan={2}>
        <Navbar />
      </GridItem>

      <GridItem colSpan={1} display={{ base: 'none', lg: 'block' }} px={5}>
        <GenreList
          onSelectGenre={(genre) => setSelectedGenre(genre)}
          selectedGenre={selectedGenre}
        />
      </GridItem>

      <GridItem colSpan={{ base: 2, lg: 1 }}>
        <PlatformSelector
          onSelectPlatform={(platform) => setSelectedPlatfrom(platform)}
          selectedPlatform={selectedPlatform}
        />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
