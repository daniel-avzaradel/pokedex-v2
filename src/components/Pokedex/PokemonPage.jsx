import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Box, Card, CardMedia, Typography } from '@mui/material';

const PokemonPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);

  return (
    <>
      {pokemon && (
        <Box flex={6} p={4}>
          <Box display={'flex'} alignItems='flex-end' justifyContent={'space-between'}>
            <Box flexDirection={'column'}>
              <Typography variant='h5'>{pokemon.name.toUpperCase()} </Typography>
              <Typography variant='body2'>
                #{pokemon.id < 10 ? '00' + pokemon.id : pokemon.id < 100 ? '0' + pokemon.id : pokemon.id}
              </Typography>
            </Box>
            <Typography variant='caption' onClick={() => navigate('/pokedex')}>
              {'<'}
              Back to pokedex
            </Typography>
          </Box>
          <Card sx={{ display: 'flex', my: 4 }}>
            <Box sx={{ display: 'flex', px: 2 }}>
              <CardMedia
                height='280px'
                component='img'
                image={pokemon.sprites.other['official-artwork'].front_default}
                alt={pokemon.name}
              />
            </Box>
            <Box m={4}>
              <Typography my={1}>Abilities:</Typography>
              <Box display='flex'>
                {pokemon.abilities.map((ab, i) => {
                  return (
                    <Typography key={i} paragraph lineHeight={0.5} mr={1}>
                      {ab.ability.name[0].toUpperCase() + ab.ability.name.substring(1)}
                    </Typography>
                  );
                })}
              </Box>
            </Box>
          </Card>
        </Box>
      )}
    </>
  );
};

export default PokemonPage;
