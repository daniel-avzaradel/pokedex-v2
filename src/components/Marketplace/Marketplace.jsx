import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Coin from '../../assets/coin.png';
import BoosterFirst from './Booster/BoosterFirst';

const Marketplace = () => {
  return (
    <Box flex={5} p={4} minHeight={'100vh'}>
      <Box display='flex' alignItems={'center'}>
        <img src={Coin} alt='Marketplace' width={50} />
        <Typography variant='h5' ml={2}>
          Marketplace
        </Typography>
      </Box>
      <Box py={4}>
        <Stack direction='row'>
          <BoosterFirst />
        </Stack>
      </Box>
    </Box>
  );
};

export default Marketplace;
