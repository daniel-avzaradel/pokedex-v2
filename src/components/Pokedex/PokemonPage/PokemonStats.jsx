import React from 'react';
import { Box, Typography } from '@mui/material';

import typeColors from '../../type-colors';
import statsColors from './stats-colors';

// styles
import { useStyles } from './PokemonPageStyles';

const PokemonStats = ({ pokemon }) => {
  const classes = useStyles();
  const TYPE_COLORS = typeColors;
  const stats_colors = statsColors;

  const statBarWidth = (stat) => {
    let width = stat.base_stat;
    if (width >= 150) {
      return '100%';
    } else if (width >= 120) {
      return '85%';
    } else if (width >= 90) {
      return '60%';
    } else if (width >= 60) {
      return '25%';
    } else {
      return '10%';
    }
  };

  const statBarColor = (stat, stats_colors) => {
    let width = stat.base_stat;
    let color = '';
    if (width >= 150) {
      color = 'darkturquoise';
    } else if (width >= 120) {
      color = 'mediumseagreen';
    } else if (width >= 90) {
      color = 'yellowgreen';
    } else if (width >= 60) {
      color = 'gold';
    } else {
      color = stats_colors.orangered;
    }
    return color;
  };

  return (
    <Box width='50%'>
      <Typography color='secondary' mb={2}>
        Base Stats:
      </Typography>
      <Box display='flex' flexDirection={'column'}>
        {pokemon.stats.map((stat, i) => {
          return (
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box>
                <Typography paragraph lineHeight={1} key={i} textAlign='left' m='0'>
                  {stat.stat.name[0].toUpperCase() + stat.stat.name.substring(1)}
                </Typography>
              </Box>
              <Box sx={{ height: '8px', width: statBarWidth(stat), background: statBarColor(stat, stats_colors) }}></Box>
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
