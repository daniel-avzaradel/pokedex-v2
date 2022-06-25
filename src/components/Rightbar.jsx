import React from 'react';
import { Box, Typography } from '@mui/material';

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        minWidth: { md: 180, lg: 200, xl: 400 },
        display: { xs: 'none', sm: 'none', md: 'block' },
      }}
    >
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100} mb={2}>
          Online Friends
        </Typography>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
      </Box>
    </Box>
  );
};

export default Rightbar;
