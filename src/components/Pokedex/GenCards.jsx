import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { gendata } from './gendata';

export default function GenCards({ gen }) {
  return (
    <Card sx={{ maxWidth: 320, mr: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={gendata[gen].img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {gendata[gen].title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {gendata[gen].desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
