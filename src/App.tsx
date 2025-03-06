import { Grid, GridItem } from '@chakra-ui/react';

function App() {
  return (
    <Grid templateColumns={`150px 1fr`}>
      <GridItem colSpan={2} bg="red.500">
        Nav
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
