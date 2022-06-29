import React from 'react';
import { Box, Typography } from '@mui/material';

import typeColors from '../../type-colors';

// styles
import { useStyles } from './PokemonPageStyles';

const PokemonStats = ({ pokemon }) => {
  const classes = useStyles();
  const TYPE_COLORS = typeColors;

  return (
    <Box width='50%'>
      <Typography color='secondary' mb={2}>
        Base Stats:
      </Typography>
      <Box display='flex' flexDirection={'column'}>
        {pokemon.stats.map((stat, i) => {
          return (
            <Box sx={{ display: 'flex' }}>
              <Typography paragraph lineHeight={0.5} key={i} textAlign='left'>
                {stat.stat.name[0].toUpperCase() + stat.stat.name.substring(1)}
              </Typography>
            </Box>
          );
        })}
      </Box>
      <Box></Box>
      <Box my={2}></Box>
    </Box>
  );
};

export default PokemonStats;
