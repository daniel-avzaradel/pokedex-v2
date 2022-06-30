import React, { useState, useEffect } from 'react';
import typeColors from '../../type-colors';

import { Box, Stack, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

// styles
import { useStyles } from './PokemonCardStyles';
import { Link } from 'react-router-dom';

const PokemonCard = ({ pokemon }) => {
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    fetch(pokemon.url)
      .then((response) => response.json())
      .then((data) => setPokemonData(data));
  }, [pokemon.url]);

  const star = () => <StarIcon sx={{ width: 20, color: 'goldenrod', strokeWidth: 2, stroke: 'black' }} />;
  const cyanStar = () => <StarIcon sx={{ width: 20, color: 'cyan', strokeWidth: 2, stroke: 'black' }} />;

  const TYPE_COLORS = typeColors;

  const totalPower = (pokemonData) => {
    let sum = 0;
    pokemonData.stats.map((stat) => (sum += stat.base_stat));
    return sum;
  };

  const foil = `url('https://66.media.tumblr.com/bdca2e7a23acbfa0ca72af1ebff0b3d5/tumblr_pn2353aM1Y1uqkuw9o1_540.gif')`;
  const normal = `url("data:image/svg+xml,%3Csvg width='16' height='20' viewBox='0 0 16 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a4a4a4' fill-opacity='0.42' fill-rule='evenodd'%3E%3Cpath d='M8 0v20L0 10M16 0v10L8 0M16 10v10H8'/%3E%3C/g%3E%3C/svg%3E")`;

  return (
    <>
      {pokemonData ? (
        <Box key={pokemonData.id}>
          <Link to={`/pokedex/${pokemonData.id}`} style={{ textDecoration: 'none' }}>
            <Box
              className={classes.cardContainer}
              sx={{
                background: TYPE_COLORS[pokemonData.types[0].type.name],
                backgroundImage: totalPower(pokemonData) >= 505 ? foil : normal,
                backgroundBlendMode: totalPower(pokemonData) >= 505 ? 'luminosity' : 'darken',
                backgroundPosition: 'center',
              }}
            >
              <Stack position={'relative'} direction='column'>
                <Box display={'flex'} justifyContent='flex-start' mt={1} width='100%' height='22px'>
                  {totalPower(pokemonData) >= 580
                    ? Array(6).fill(cyanStar())
                    : totalPower(pokemonData) >= 540
                    ? Array(5).fill(star())
                    : totalPower(pokemonData) >= 500
                    ? Array(4).fill(star())
                    : totalPower(pokemonData) >= 420
                    ? Array(3).fill(star())
                    : totalPower(pokemonData) >= 360
                    ? Array(2).fill(star())
                    : star()}
                </Box>
                <Box className={classes.imgBox} height='70px' mb='4px'>
                  <img
                    src={pokemonData && pokemonData.sprites.other['official-artwork'].front_default}
                    alt={pokemonData.name}
                    style={{
                      width: 70,
                    }}
                  />
                </Box>
                <Box px={2} className={classes.cardTitle} mt={1} sx={{ width: 120 }} height='88px'>
                  <Typography variant='body2' fontSize={'0.75rem'} fontWeight={500} mt={1}>
                    {pokemonData.name.toUpperCase()}
                    {''} #{pokemonData.id < 10 ? '00' + pokemonData.id : pokemonData.id < 100 ? '0' + pokemonData.id : pokemonData.id}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 1 }}>
                    {pokemonData.types.map((type, i) => {
                      return (
                        <div key={i}>
                          <Typography
                            paragraph
                            variant='caption'
                            className={classes.typeBtn}
                            m={'4px'}
                            sx={{ background: TYPE_COLORS[type.type.name], fontSize: '0.6rem' }}
                          >
                            {type.type.name.toUpperCase()}
                          </Typography>
                        </div>
                      );
                    })}
                  </Box>
                  <Typography paragraph variant='caption' fontSize={'0.7rem'}>
                    Base Stats: {totalPower(pokemonData)}
                  </Typography>
                </Box>
                <Box display={'flex'} justifyContent='flex-end' m={0} height='22px' width='100%'></Box>
              </Stack>
            </Box>
          </Link>
        </Box>
      ) : (
        ''
      )}
    </>
  );
};

export default PokemonCard;
