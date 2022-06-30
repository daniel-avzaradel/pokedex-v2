import React, { useState, useEffect } from 'react';

import { Box, Typography, LinearProgress } from '@mui/material';
import PokemonCard from '../PokemonCard/PokemonCard';

const Secondgen = () => {
  const [pokedex, setPokedex] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=151&limit=100')
      .then((response) => response.json())
      .then((data) => setPokedex(data.results));
  }, []);

  return (
    <Box p={{ xs: '4px', sm: 4 }} flex={5}>
      <Typography variant='h5' px={1} pt={{ xs: 2, md: 0 }}>
        Generation II Pokémon:
      </Typography>
      <Typography paragraph variant='caption' px={{ xs: 1 }}>
        {' '}
        #152 - #251
      </Typography>
      <br />
      <Box sx={{ flexGrow: 1, display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
        {pokedex ? (
          pokedex.map((pokemon, i) => {
            return (
              <Box key={i} p={1}>
                <PokemonCard key={i} {...{ pokemon }} />
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

export default Secondgen;
