import React, { useContext } from 'react';
import { Button, Box, Typography } from '@mui/material/';
import { ThemeContext } from '../App';

const Home = () => {
  const theme = useContext(ThemeContext);
  return (
    <Box>
      <Typography>Home</Typography>
      <Button variant='contained' disableElevation onClick={theme.toggleTheme}>
        Dark Theme
      </Button>
    </Box>
  );
};

export default Home;
