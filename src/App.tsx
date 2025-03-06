import { Grid, GridItem } from '@chakra-ui/react';
import Navbar from './components/custom/Navbar';

function App() {
  return (
    <Grid templateColumns={`150px 1fr`}>
      <GridItem colSpan={2}>
        <Navbar />
      </GridItem>

      <GridItem
        colSpan={1}
        display={{ base: 'none', lg: 'block' }}
        bg="green.300"
      >
        Aside
      </GridItem>

      <GridItem colSpan={{ base: 2, lg: 1 }} bg="blue.200">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
