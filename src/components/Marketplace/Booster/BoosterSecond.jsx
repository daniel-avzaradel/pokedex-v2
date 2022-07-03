import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, CardActionArea, CardActions, Button } from '@mui/material';
import Coin from '../../../assets/coin.png';

export default function BoosterSecond() {
  const [pokeImg, setPokeImg] = useState();

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const random = getRndInteger(152, 251);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
      .then((response) => response.json())
      .then((data) => setPokeImg(data));
  }, []);

  console.log(pokeImg);
  const bg =
    'linear-gradient(135deg, #0fb398 25%, transparent 25%), linear-gradient(225deg, #0fb398 25%, transparent 25%), linear-gradient(45deg, #0fb398 25%, transparent 25%), linear-gradient(315deg, #0fb398 25%, #084a3f 25%)';

  return (
    <Card sx={{ maxWidth: 260, border: '4px solid #021d19', boxSizing: 'border-box', p: 1, background: '#084a3f' }}>
      <CardActionArea
        sx={{
          background: '#084a3f',
          backgroundImage: bg,
          backgroundBlendMode: 'hard-light',
          backgroundSize: 'no-repeat',
        }}
      >
        <CardMedia
          component='img'
          height={200}
          image={pokeImg && pokeImg.sprites.other['official-artwork'].front_default}
          alt='pokemon 2nd gen'
        />
        <CardContent>
          <Box bgcolor='#333' borderRadius='10px'>
            <Typography color='#fff' gutterBottom variant='body1' textAlign={'center'}>
              Gen II Booster Pack
            </Typography>
          </Box>
          <Box bgcolor='#084a3f' borderRadius='10px' px={2}>
            <Typography variant='body2' color='#fff' textAlign={'center'}>
              6 Tradable Game Cards
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' variant='contained' sx={{ background: '#0fb398', '&:hover': { background: '#007463' } }} m={0}>
          <img src={Coin} alt='coin' width={20} />
          <Typography color='#fff' mx={1}>
            {' '}
            10 Buy
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}
