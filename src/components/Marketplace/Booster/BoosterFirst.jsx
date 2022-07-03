import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, CardActionArea, CardActions, IconButton, Button } from '@mui/material';
import Coin from '../../../assets/coin.png';

export default function BoosterFirst() {
  const [pokeImg, setPokeImg] = useState();

  const random = Math.floor(Math.random() * 152);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
      .then((response) => response.json())
      .then((data) => setPokeImg(data));
  }, []);

  console.log(pokeImg);
  const bg =
    'linear-gradient(135deg, #672e00 25%, transparent 25%), linear-gradient(225deg, #672e00 25%, transparent 25%), linear-gradient(45deg, #672e00 25%, transparent 25%), linear-gradient(315deg, #672e00 25%, #ad9e10 25%)';

  return (
    <Card sx={{ maxWidth: 220, border: '4px solid #ab7951', boxSizing: 'border-box', p: 1, background: '#672e00' }}>
      <CardActionArea
        sx={{
          background: '#e5e5f7',
          backgroundImage: bg,
          backgroundBlendMode: 'hard-light',
          backgroundSize: 'no-repeat',
        }}
      >
        <CardMedia
          component='img'
          height={200}
          image={pokeImg && pokeImg.sprites.other['official-artwork'].front_default}
          alt='pokemon 1st gen'
        />
        <CardContent>
          <Box bgcolor='#333' borderRadius='10px'>
            <Typography color='#fff' gutterBottom variant='body1' textAlign={'center'}>
              Gen I Booster Pack
            </Typography>
          </Box>
          <Box bgcolor='#672e00' borderRadius='10px' px={2}>
            <Typography variant='body2' color='#fff' textAlign={'center'}>
              6 Tradable Game Cards
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' variant='contained' color='secondary' m={0}>
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
