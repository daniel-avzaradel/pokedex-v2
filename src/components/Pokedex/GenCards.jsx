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
  return (
    <Card
      sx={{
        maxWidth: { xs: '90vw', sm: '40vw', md: 440, lg: 360 },
        height: '400px',
        mr: 2,
        mb: 2,
      }}
      elevation={2}
    >
      <CardActionArea>
        <Link
          to={`/pokedex/${gendata.name + 'gen'}`}
          style={{ textDecoration: 'none' }}
        >
          <CardMedia
            component="img"
            height="auto"
            image={gendata.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
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
