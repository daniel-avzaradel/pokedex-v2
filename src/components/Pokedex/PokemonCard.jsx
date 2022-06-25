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
            >
              <img
                src={pokemonData && pokemonData.sprites.front_default}
                alt={pokemonData.name}
              />
            </Box>
            <Box className={classes.cardTitle} px={2}>
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
              <Box>
                {pokemonData.types.map((type, i) => {
                  return (
                    <Button key={i} className={classes.typeBtn}>
                      {type.type.name}
                    </Button>
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
