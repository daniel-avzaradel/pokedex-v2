import React from 'react';
import { Box, Typography } from '@mui/material';

import { statsColors, statBarColor } from './stats-colors';

// styles

const PokemonStats = ({ pokemon }) => {
  const stats_colors = statsColors;

  const calcWidth = (stat) => {
    let finalWidth;
    if (stat >= 150) {
      finalWidth = 140 + 'px';
    } else if (stat >= 120) {
      finalWidth = stat * 0.95 + 'px';
    } else if (stat >= 20) {
      finalWidth = stat * 1 + 'px';
    } else if (stat <= 20) {
      finalWidth = 20 + 'px';
    }
    return finalWidth;
  };

  return (
    <Box sx={{ width: { xs: '80%', sm: '50%' } }} mt={{ xs: 2, sm: 0 }}>
      <Typography color='secondary' mb={2}>
        Base Stats:
      </Typography>
      <Box display='flex' flexDirection={'column'}>
        {pokemon.stats.map((stat, i) => {
          return (
            <Box key={i} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box>
                <Typography paragraph lineHeight={1} key={i} textAlign='left' m='0'>
                  {stat.stat.name[0].toUpperCase() + stat.stat.name.substring(1)}
                </Typography>
              </Box>
              <Box display='flex' alignItems={'center'}>
                <div
                  style={{
                    borderRadius: '4px',
                    my: '4px',
                    height: '8px',
                    width: calcWidth(stat.base_stat),
                    background: statBarColor(stat, stats_colors),
                  }}
                ></div>
                <Typography paragraph variant='caption' lineHeight={1} mx={1} my={0.5}>
                  {stat.base_stat}
                </Typography>
              </Box>
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
