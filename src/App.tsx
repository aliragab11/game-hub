import { Grid, GridItem } from '@chakra-ui/react';
import Navbar from './components/custom/Navbar';
import GameGrid from './components/custom/GameGrid';

function App() {
  return (
    <Grid templateColumns={`150px 1fr`}>
      <GridItem colSpan={2}>
        <Navbar />
      </GridItem>

      <GridItem colSpan={1} display={{ base: 'none', lg: 'block' }}>
        Aside
      </GridItem>

      <GridItem colSpan={{ base: 2, lg: 1 }}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
