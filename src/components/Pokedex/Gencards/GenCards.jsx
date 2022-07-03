import * as React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

export default function GenCards({ gendata }) {
  const textColor = (mode) => (mode === 'dark' ? '#fff' : '#333');

  return (
    <Card
      sx={{
        minWidth: { lg: 280 },
        minHeight: { md: 340, lg: 320, xl: 340 },
      }}
      elevation={2}
    >
      <CardActionArea>
        <Link to={`/pokedex/${gendata.name + 'gen'}`} style={{ textDecoration: 'none', color: textColor() }}>
          <CardMedia component='img' height='auto' image={gendata.img} alt={`${gendata.name} generation card`} />
          <CardContent>
            <Typography gutterBottom variant='h5' fontSize={'1rem'} component='div' color={'text.primary'}>
              {gendata.title}
            </Typography>
            <Typography variant='caption' fontSize={'.7rem'} color='text.secondary'>
              {gendata.desc}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}
