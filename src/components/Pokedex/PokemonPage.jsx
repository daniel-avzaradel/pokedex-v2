import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import typeColors from '../type-colors';

import { Box, Card, CardMedia, Typography } from '@mui/material';

const PokemonPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  let navigate = useNavigate();
  const TYPE_COLORS = typeColors;

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
            <Typography variant='caption' onClick={() => navigate('/pokedex')} sx={{ cursor: 'pointer' }}>
              {'<'}
              Back to pokedex
            </Typography>
          </Box>
          <Card sx={{ display: 'flex', my: 4 }}>
            <Box
              sx={{
                display: 'flex',
                px: 2,
                background: TYPE_COLORS[pokemon.types[0].type.name],
                opacity: '0.8',
                backgroundSize: '7px 7px',
                backgroundImage: 'repeating-linear-gradient(45deg, #444cf7 0, #444cf7 0.7000000000000001px, #e5e5f7 0, #e5e5f7 50%)',
                backgroundBlendMode: 'overlay',
              }}
            >
              <CardMedia
                height='280px'
                component='img'
                image={pokemon.sprites.other['official-artwork'].front_default}
                alt={pokemon.name}
              />
            </Box>
            <Box m={4}>
              <Typography my={1} color='secondary'>
                Abilities:
              </Typography>
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
