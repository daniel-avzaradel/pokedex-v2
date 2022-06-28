import React from 'react';
import { Box, Typography } from '@mui/material';

const Rightbar = () => {
  return (
    <Box flex={1.2} py={3} sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' }, justifyContent: 'center' }}>
      <Box position='fixed' sx={{ justifyContent: 'center' }}>
        <Typography variant='h6' fontWeight={100}>
          Top #5 Rank
        </Typography>
      </Box>
    </Box>
  );
};

export default Rightbar;
