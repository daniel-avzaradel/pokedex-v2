import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Box, Card, Stack, Typography } from '@mui/material';

const PokemonPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);

  console.log(pokemon);
  return (
    <>
      {pokemon && (
        <Box flex={6} p={4}>
          <Box>
            <Typography variant='h5'>{pokemon.name.toUpperCase()} </Typography>
            <Typography variant='body2'>
              #{pokemon.id < 10 ? '00' + pokemon.id : pokemon.id < 100 ? '0' + pokemon.id : pokemon.id}
            </Typography>
          </Box>
          <Box>
            <Stack direction='row' my={2} py={2}>
              <Card bgcolor='#f2f2f2' px={4}>
                <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} width='280px' />
                <Box bgcolor='#f2f2f2' px={4}>
                  {pokemon.abilities.map((ability, i) => {
                    <Typography paragraph>{ability.name}</Typography>;
                  })}
                </Box>
              </Card>
            </Stack>
          </Box>
        </Box>
      )}
    </>
  );
};

export default PokemonPage;
