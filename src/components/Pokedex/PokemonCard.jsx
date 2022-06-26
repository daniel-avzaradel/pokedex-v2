import React, { useState, useEffect } from 'react';

import { Box, Stack, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

// styles
import { useStyles } from './PokemonCardStyles';

export default function ActionAreaCard({ pokemon }) {
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    fetch(pokemon.url)
      .then((response) => response.json())
      .then((data) => setPokemonData(data));
  }, []);

  const star = () => <StarIcon sx={{ width: 20, color: 'goldenrod', stroke: 'black' }} />;

  const TYPE_COLORS = {
    bug: '#C3D21F',
    dark: '#8A6653',
    dragon: '#8A76FF',
    electric: '#FEE744',
    fairy: '#FBAEFF',
    fighting: '#A45544',
    fire: '#FA5543',
    flying: '#79A4FF',
    ghost: '#7874D4',
    grass: '#8DD851',
    ground: '#ECCE5B',
    ice: '#96F1FF',
    normal: '#BAB9AD',
    poison: '#A85CA0',
    psychic: '#F965B2',
    rock: '#CEBD72',
    steel: '#C2C0D8',
    water: '#56AEFF',
  };

  const totalPower = (pokemonData) => {
    let sum = 0;
    pokemonData.stats.map((stat) => (sum += stat.base_stat));
    return sum;
  };

  return (
    <>
      {pokemonData ? (
        <Box
          className={classes.cardContainer}
          sx={{
            background: TYPE_COLORS[pokemonData.types[0].type.name],
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='20' viewBox='0 0 16 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a4a4a4' fill-opacity='0.42' fill-rule='evenodd'%3E%3Cpath d='M8 0v20L0 10M16 0v10L8 0M16 10v10H8'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundBlendMode: 'darken',
          }}
        >
          <Stack position={'relative'} direction='column'>
            <Box className={classes.imgBox} sx={{ height: '80px', mt: 2 }}>
              <img
                src={pokemonData && pokemonData.sprites.other['official-artwork'].front_default}
                alt={pokemonData.name}
                style={{ width: 70 }}
              />
            </Box>
            <Box px={2} className={classes.cardTitle} mt={1} sx={{ width: 120 }}>
              <Typography variant='body2' fontWeight={500}>
                {pokemonData.name[0].toUpperCase() + pokemonData.name.substring(1)}
                {''} #{pokemonData.id < 10 ? '00' + pokemonData.id : pokemonData.id < 100 ? '0' + pokemonData.id : pokemonData.id}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {pokemonData.types.map((type, i) => {
                  return (
                    <Typography
                      paragraph
                      key={i}
                      variant='caption'
                      className={classes.typeBtn}
                      m={'4px'}
                      sx={{ background: TYPE_COLORS[type.type.name], fontSize: '0.7rem' }}
                    >
                      {type.type.name.toUpperCase()}
                    </Typography>
                  );
                })}
              </Box>
              <Typography paragraph variant='caption'>
                Base Stats: {totalPower(pokemonData)}
              </Typography>
            </Box>
            <Box display={'flex'} justifyContent='flex-end' m={0} width='100%'>
              {totalPower(pokemonData) >= 580
                ? Array(5).fill(star())
                : totalPower(pokemonData) >= 500
                ? Array(4).fill(star())
                : totalPower(pokemonData) >= 420
                ? Array(3).fill(star())
                : totalPower(pokemonData) >= 360
                ? Array(2).fill(star())
                : star()}
            </Box>
          </Stack>
        </Box>
      ) : (
        ''
      )}
    </>
  );
}
