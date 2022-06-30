import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

import typeColors from '../../type-colors';

// styles
import { useStyles } from './PokemonPageStyles';

const PokemonDetails = ({ pokemon }) => {
  const classes = useStyles();
  const TYPE_COLORS = typeColors;

  const star = () => <StarIcon sx={{ width: 20, color: 'goldenrod', strokeWidth: 2, stroke: 'black' }} />;
  const cyanStar = () => <StarIcon sx={{ width: 20, color: 'cyan', strokeWidth: 2, stroke: 'black' }} />;

  const totalPower = (pokemonData) => {
    let sum = 0;
    pokemonData.stats.map((stat) => (sum += stat.base_stat));
    return sum;
  };

  return (
    <Box sx={{ width: { xs: '70%', sm: '60%' } }}>
      <Typography color='secondary'>Abilities:</Typography>
      <Box display='flex'>
        <Stack direction='column' mt={1} mb={2}>
          {pokemon.abilities.map((ab, i) => {
            return (
              <Typography paragraph lineHeight={0.5} my={1}>
                {ab.ability.name[0].toUpperCase() + ab.ability.name.substring(1)}
              </Typography>
            );
          })}
        </Stack>
      </Box>
      <Box>
        <Typography color='secondary'>Types:</Typography>
        {pokemon.types.map((type, i) => {
          return (
            <div key={i} style={{ width: 120 }}>
              <Typography
                variant='caption'
                className={classes.typeBtn}
                sx={{ my: 1, background: TYPE_COLORS[type.type.name], color: '#333' }}
              >
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
      <Box my={2} display='flex' flexDirection={'column'}>
        <Typography color='secondary'>Total Power:</Typography>
        <Box>
          {totalPower(pokemon) >= 580
            ? Array(6).fill(cyanStar())
            : totalPower(pokemon) >= 540
            ? Array(5).fill(star())
            : totalPower(pokemon) >= 500
            ? Array(4).fill(star())
            : totalPower(pokemon) >= 420
            ? Array(3).fill(star())
            : totalPower(pokemon) >= 360
            ? Array(2).fill(star())
            : star()}
        </Box>
      </Box>
    </Box>
  );
};

export default PokemonDetails;
