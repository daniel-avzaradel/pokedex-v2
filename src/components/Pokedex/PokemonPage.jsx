import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import typeColors from '../type-colors';

import { Box, Card, CardMedia, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

  console.log(pokemon);

  return (
    <>
      {pokemon && (
        <Box flex={5} p={4} minHeight={'86.3vh'}>
          <Box display={'flex'} alignItems='flex-end' justifyContent={'space-between'}>
            <Box flexDirection={'column'}>
              <Typography variant='h5'>{pokemon.name.toUpperCase()} </Typography>
              <Typography variant='body2'>
                #{pokemon.id < 10 ? '00' + pokemon.id : pokemon.id < 100 ? '0' + pokemon.id : pokemon.id}
              </Typography>
            </Box>
            <Box display='flex' alignItems='center'>
              <ArrowBackIcon />
              <Typography variant='caption' onClick={() => navigate('/pokedex/firstgen')} sx={{ cursor: 'pointer', mx: 1, lineHeight: 1 }}>
                BACK TO POKEDEX
              </Typography>
            </Box>
          </Box>
          <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row', md: 'row' }, my: 4 }}>
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
                height='320px'
                component='img'
                image={pokemon.sprites.other['official-artwork'].front_default}
                alt={pokemon.name}
              />
            </Box>
            <Box m={4}>
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
            </Box>
          </Card>
        </Box>
      )}
    </>
  );
};

export default PokemonPage;
