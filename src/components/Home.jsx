import React from 'react';
import Post from './Post';

import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
    </Box>
  );
};

export default Home;
