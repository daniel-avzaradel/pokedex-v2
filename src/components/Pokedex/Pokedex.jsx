import React from 'react';

import GenCards from './GenCards';
import PokedexIcon from '../../assets/pokedex.png';
import { gendata } from './gendata';

import { Box, Grid, Stack, Typography } from '@mui/material';

const Pokedex = () => {
  return (
    <Box flex={5} p={4} minHeight={'100vh'}>
      <Box display='flex' alignItems={'center'}>
        <Box>
          <img src={PokedexIcon} width='40' alt='Pokedex' />
        </Box>
        <Stack direction='column' justifyContent={'center'}>
          <Typography variant='h5' lineHeight={1}>
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
          flexWrap='wrap'
          justifyContent={{
            xs: 'center',
            sm: 'center',
            md: 'flex-start',
            xl: 'flex-start',
          }}
        >
          <Grid container spacing={2} pr={{ md: 0, lg: 0, xl: 10 }}>
            {gendata &&
              gendata.map((card) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={4} key={card.name}>
                    <GenCards key={card.name} gendata={card} />
                  </Grid>
                );
              })}
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};

export default Pokedex;
