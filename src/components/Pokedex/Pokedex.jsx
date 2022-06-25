import React, { useState, useEffect } from 'react';

import GenCards from './GenCards';
import PokedexIcon from '../../assets/pokedex.png';
import { gendata } from './gendata';

import { Box, Stack, Typography } from '@mui/material';

const Pokedex = () => {
  const [pokedex, setPokedex] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((data) => setPokedex(data.results));
  }, []);

  console.log(pokedex);
  console.log(gendata);

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
        </Stack>
      </Box>

      <Box
        my={2}
        justifyContent={{
          xs: 'center',
          sm: 'center',
          md: 'center',
          lg: 'flex-start',
        }}
      >
        <Typography paragraph lineHeight={1} mb={0}>
          Choose the generation
        </Typography>
      </Box>

      <Box pb={4}>
        <Stack
          direction={'row'}
          flexWrap="wrap"
          justifyContent={{
            xs: 'center',
            sm: 'center',
            md: 'flex-start',
            xl: 'flex-start',
          }}
        >
          {gendata &&
            gendata.map((card) => {
              return <GenCards key={card.name} gendata={card} />;
            })}
        </Stack>
      </Box>
    </Box>
  );
};

export default Pokedex;
