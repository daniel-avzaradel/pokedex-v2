import React, { useState, useEffect } from 'react';

import { Box, Button, Stack, Typography } from '@mui/material';

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

  return (
    <>
      {pokemonData ? (
        <Box className={classes.cardContainer}>
          <Stack direction="column">
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className={classes.imgBox}
            >
              <img
                src={pokemonData && pokemonData.sprites.front_default}
                alt={pokemonData.name}
              />
            </Box>
            <Box px={2} className={classes.cardTitle}>
              <Typography variant="h6">
                {pokemonData.name[0].toUpperCase() +
                  pokemonData.name.substring(1)}
              </Typography>
            </Box>
            <Box className={classes.cardDesc}>
              <Typography paragraph variant="caption">
                #
                {pokemonData.id < 10
                  ? '00' + pokemonData.id
                  : pokemonData.id < 100
                  ? '0' + pokemonData.id
                  : pokemonData.id}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {pokemonData.types.map((type, i) => {
                  return (
                    <Box
                      key={i}
                      sx={{ background: TYPE_COLORS[type.type.name] }}
                      className={classes.typeBtn}
                    >
                      {type.type.name}
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Stack>
        </Box>
      ) : (
        ''
      )}
    </>
  );
}
