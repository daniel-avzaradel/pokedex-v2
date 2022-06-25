import React, { useState, useEffect } from 'react';

import GenCards from './GenCards';

import { Box, Stack, Typography } from '@mui/material';

const Pokedex = () => {
  const [pokedex, setPokedex] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((data) => setPokedex(data.results));
  }, []);

  console.log(pokedex);

  return (
    <Box flex={2.6} p={4}>
      <Typography variant="h5">POKEDEX</Typography>
      <Box py={4}>
        <Stack direction={'row'}>
          <GenCards gen="first" />
          <GenCards gen="second" />
          <GenCards gen="third" />
        </Stack>
      </Box>
    </Box>
  );
};

export default Pokedex;
