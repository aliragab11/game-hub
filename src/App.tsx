import { Grid, GridItem } from '@chakra-ui/react';
import { useState } from 'react';
import GameGrid from './components/custom/GameGrid';
import GenreList from './components/custom/GenreList';
import Navbar from './components/custom/Navbar';
import PlatformSelector from './components/custom/PlatformSelector';
import { Genre } from './hooks/useGenres';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
