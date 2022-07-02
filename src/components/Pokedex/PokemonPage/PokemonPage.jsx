import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Box, Card, CardMedia, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import typeColors from '../../type-colors';
import { PrevPage, NextPage, BackToPokedex } from '../../Utils/Navigate/Navigate';

// styles
import { useStyles } from './PokemonPageStyles';
import PokemonDetails from './PokemonDetails';
import PokemonStats from './PokemonStats';

const PokemonPage = () => {
  const classes = useStyles();
  const { id } = useParams();

  const [pokemon, setPokemon] = useState();
  const TYPE_COLORS = typeColors;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [id]);

  const totalPower = (pokemon) => {
    let sum = 0;
    pokemon.stats.map((stat) => (sum += stat.base_stat));
    return sum;
  };

  const foil = `url('https://66.media.tumblr.com/bdca2e7a23acbfa0ca72af1ebff0b3d5/tumblr_pn2353aM1Y1uqkuw9o1_540.gif')`;

  return (
    <>
      {pokemon && (
        <Box flex={{ md: 5, lg: 5, xl: 3 }} p={4} minHeight={'86.3vh'}>
          <Typography variant='h5'>{pokemon.name.toUpperCase()} </Typography>
          <Box>
            <Box display='flex' alignItems='center' justifyContent={'space-between'} width='100%'>
              <Box display={'flex'} alignItems='center'>
                <PrevPage id={pokemon.id} />
                <Typography variant='body2'>
                  #{pokemon.id < 10 ? '00' + pokemon.id : pokemon.id < 100 ? '0' + pokemon.id : pokemon.id}
                </Typography>
                <NextPage id={pokemon.id} />
              </Box>
              <BackToPokedex id={pokemon.id} />
            </Box>
          </Box>
          <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row', md: 'row' }, my: 2 }}>
            <Box
              className={classes.cardmedia}
              sx={{
                background: TYPE_COLORS[pokemon.types[0].type.name],
              }}
            >
              <CardMedia
                sx={{
                  minWidth: 260,
                  background: TYPE_COLORS[pokemon.types[0].type.name],
                  backgroundImage: totalPower(pokemon) >= 505 ? foil : '',
                  backgroundPosition: 'center',
                  backgroundBlendMode: totalPower(pokemon) >= 505 ? 'luminosity' : 'normal',
                  border: totalPower(pokemon) >= 505 ? `4px solid ${TYPE_COLORS[pokemon.types[0].type.name]}` : '',
                }}
                component='img'
                image={pokemon.sprites.other['official-artwork'].front_default}
                alt={pokemon.name}
              />
            </Box>
            <Box m={2} px={2} sx={{ width: { xs: 'auto', sm: '70%' }, display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
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
