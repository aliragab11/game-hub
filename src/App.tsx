import { Grid, GridItem } from '@chakra-ui/react';
import Navbar from './components/custom/Navbar';
import GameGrid from './components/custom/GameGrid';
import GenreList from './components/custom/GenreList';

function App() {
  return (
    <Grid templateColumns={`200px 1fr`}>
      <GridItem colSpan={2}>
        <Navbar />
      </GridItem>

      <GridItem colSpan={1} display={{ base: 'none', lg: 'block' }} px={5}>
        <GenreList />
      </GridItem>

      <GridItem colSpan={{ base: 2, lg: 1 }}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
