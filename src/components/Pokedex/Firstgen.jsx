import React, { useState, useEffect } from 'react';

import { Box, Typography, LinearProgress } from '@mui/material';
import PokemonCard from './PokemonCard';

const Firstgen = () => {
  const [pokedex, setPokedex] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((data) => setPokedex(data.results));
  }, []);

  return (
    <Box p={4} flex={6}>
      <Typography variant='h5'>GEN I:</Typography>
      <Typography paragraph>#001 - #151</Typography>
      <Box sx={{ flexGrow: 1, display: 'flex', flexWrap: 'wrap' }}>
        {pokedex ? (
          pokedex.map((pokemon) => {
            return (
              <Box key={pokemon.name} p={1}>
                <PokemonCard {...{ pokemon }} />
              </Box>
            );
          })
        ) : (
          <LinearProgress color='primary' />
        )}
      </Box>
    </Box>
  );
};

export default Firstgen;
