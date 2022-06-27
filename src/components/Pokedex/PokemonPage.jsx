import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

const PokemonPage = () => {
  const { id } = useParams();

  return (
    <Box flex={6} p={4}>
      <Typography variant='h3'>POKEMON ID #{id} </Typography>
    </Box>
  );
};

export default PokemonPage;
