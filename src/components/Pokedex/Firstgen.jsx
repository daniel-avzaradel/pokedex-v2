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
    <Box p={{ xs: '4px', sm: 4 }} flex={6}>
      <Typography variant='h5' px={1} pt={{ xs: 2, md: 0 }}>
        GEN I: #001 - #151
      </Typography>
      <br />
      <Box sx={{ flexGrow: 1, display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
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
