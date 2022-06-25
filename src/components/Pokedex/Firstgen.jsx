import React, { useState, useEffect } from 'react';

import { Box, Typography, LinearProgress, Grid } from '@mui/material';
import PokemonCard from './PokemonCard';

const Firstgen = () => {
  const [pokedex, setPokedex] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((data) => setPokedex(data.results));
  }, []);

  console.log(pokedex);

  return (
    <Box p={4} flex={6}>
      <Typography variant="h5">GEN I:</Typography>
      <Typography paragraph>#001 - #151</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {pokedex ? (
            pokedex.map((pokemon) => {
              return (
                <Grid
                  item
                  xs={6}
                  sm={2}
                  md={3}
                  lg={2}
                  xl={2}
                  key={pokemon.name}
                >
                  <PokemonCard {...{ pokemon }} />
                </Grid>
              );
            })
          ) : (
            <LinearProgress color="primary" />
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Firstgen;
