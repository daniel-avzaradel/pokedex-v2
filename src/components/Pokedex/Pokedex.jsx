import React, { useState, useEffect } from 'react';

import GenCards from './GenCards';
import PokedexIcon from '../../assets/pokedex.png';

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
    <Box flex={6} p={4}>
      <Box display="flex" alignItems={'center'}>
        <Box>
          <img src={PokedexIcon} width="40" alt="Pokedex" />
        </Box>
        <Stack direction="column" justifyContent={'center'}>
          <Typography variant="h5" lineHeight={1}>
            POKEDEX ENTRIES
          </Typography>
          <Typography paragraph lineHeight={1} mb={0}>
            Choose the generation
          </Typography>
        </Stack>
      </Box>

      <Box py={4}>
        <Stack direction={'row'} flexWrap="wrap" justifyContent="flex-start">
          <GenCards gen="first" />
          <GenCards gen="second" />
          <GenCards gen="third" />
        </Stack>
      </Box>
    </Box>
  );
};

export default Pokedex;
