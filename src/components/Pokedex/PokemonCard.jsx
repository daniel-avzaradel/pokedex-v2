import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ pokemon }) {
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    fetch(pokemon.url)
      .then((response) => response.json())
      .then((data) => setPokemonData(data));
  }, []);
  //  {pokemonData.name.toUpperCase() + pokemonData.name.substring(1)}
  return (
    <>
      {pokemonData ? (
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              image={pokemonData && pokemonData.sprites.front_default}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
              ></Typography>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ) : (
        ''
      )}
    </>
  );
}
