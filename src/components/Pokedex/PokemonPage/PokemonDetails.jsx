import React from 'react';
import { Box, Typography } from '@mui/material';

import typeColors from '../../type-colors';

// styles
import { useStyles } from './PokemonPageStyles';

const PokemonDetails = ({ pokemon }) => {
  const classes = useStyles();
  const TYPE_COLORS = typeColors;

  return (
    <Box width='50%'>
      <Typography color='secondary'>Abilities:</Typography>
      <Box display='flex'>
        <ul>
          {pokemon.abilities.map((ab, i) => {
            return (
              <li key={i}>
                <Typography paragraph lineHeight={0.5} mr={1}>
                  {ab.ability.name[0].toUpperCase() + ab.ability.name.substring(1)}
                </Typography>
              </li>
            );
          })}
        </ul>
      </Box>
      <Box>
        <Typography color='secondary'>Types:</Typography>
        {pokemon.types.map((type, i) => {
          return (
            <div key={i} style={{ width: 160 }}>
              <Typography variant='caption' className={classes.typeBtn} sx={{ m: 1, background: TYPE_COLORS[type.type.name] }}>
                {type.type.name.toUpperCase()}
              </Typography>
            </div>
          );
        })}
      </Box>
      <Box my={2} display='flex'>
        <Box display={'flex'} flexDirection='column'>
          <Typography color='secondary'>Weight:</Typography>
          <Typography paragraph lineHeight={0.5} my={1}>
            {pokemon.weight}Hg
          </Typography>
        </Box>
        <Box display={'flex'} flexDirection='column' mx={4}>
          <Typography color='secondary'>Height:</Typography>
          <Typography paragraph lineHeight={0.5} my={1} textAlign='left'>
            {pokemon.height / 10}m
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PokemonDetails;
