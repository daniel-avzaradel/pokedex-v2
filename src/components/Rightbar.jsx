import React from 'react';
import { Box, Typography } from '@mui/material';

const Rightbar = () => {
  return (
    <Box
      flex={1}
      py={3}
      px={3}
      sx={{
        display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
      }}
    >
      <Box position='fixed'>
        <Typography variant='h6' fontWeight={100} mb={2}>
          Top #5 Rank
        </Typography>
      </Box>
    </Box>
  );
};

export default Rightbar;
