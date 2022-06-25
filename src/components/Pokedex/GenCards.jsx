import * as React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material';

export default function GenCards({ gendata }) {
  const textColor = (mode) => (mode === 'dark' ? '#fff' : '#333');

  return (
    <Card
      sx={{
        minHeight: { sm: 'auto', md: 380, lg: 400, xl: 460 },
      }}
      elevation={2}
    >
      <CardActionArea>
        <Link
          to={`/pokedex/${gendata.name + 'gen'}`}
          style={{ textDecoration: 'none', color: textColor() }}
        >
          <CardMedia
            component="img"
            height="auto"
            image={gendata.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color={'red'}>
              {gendata.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {gendata.desc}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}
