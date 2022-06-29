import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Box, Card, CardMedia, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import typeColors from '../../type-colors';

// styles
import { useStyles } from './PokemonPageStyles';
import PokemonDetails from './PokemonDetails';
import PokemonStats from './PokemonStats';

const PokemonPage = () => {
  const classes = useStyles();
  const { id } = useParams();
  let navigate = useNavigate();

  const [pokemon, setPokemon] = useState();
  const TYPE_COLORS = typeColors;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [id]);

  console.log(pokemon);

  const prevPage = (id) => {
    if (id === 1) {
      navigate('/pokedex/151');
    } else {
      navigate(`/pokedex/${id - 1}`);
    }
  };

  const nextPage = (id) => {
    if (id === 151) {
      navigate('/pokedex/1');
    } else {
      navigate(`/pokedex/${id + 1}`);
    }
  };

  return (
    <>
      {pokemon && (
        <Box flex={5} p={4} minHeight={'86.3vh'}>
          <Box display={'flex'} alignItems='flex-end' justifyContent={'space-between'}>
            <Box flexDirection={'column'}>
              <Typography variant='h5'>{pokemon.name.toUpperCase()} </Typography>
              <Typography variant='body2'>
                <IconButton onClick={() => prevPage(pokemon.id)}>
                  <ArrowBackIcon />
                </IconButton>
                #{pokemon.id < 10 ? '00' + pokemon.id : pokemon.id < 100 ? '0' + pokemon.id : pokemon.id}
                <IconButton onClick={() => nextPage(pokemon.id)}>
                  <ArrowForwardIcon />
                </IconButton>
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
            <Box className={classes.cardmedia} sx={{ background: TYPE_COLORS[pokemon.types[0].type.name] }}>
              <CardMedia
                height='320px'
                component='img'
                image={pokemon.sprites.other['official-artwork'].front_default}
                alt={pokemon.name}
              />
            </Box>
            <Box m={2} px={2} sx={{ width: '60%', display: 'flex' }}>
              <PokemonDetails {...{ pokemon }} />
              <PokemonStats {...{ pokemon }} />
            </Box>
          </Card>
        </Box>
      )}
    </>
  );
};

export default PokemonPage;
