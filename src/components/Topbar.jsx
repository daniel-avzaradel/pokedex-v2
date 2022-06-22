import React from 'react';
import { Button, Box, Typography, Switch } from '@mui/material/';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Topbar = ({ mode, toggleTheme }) => {
  return (
    <Box p={1} bgcolor='primary.dark' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box>
        <Typography color='primary.contrastText'>POKEDEX v2.0</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Switch onChange={toggleTheme} color={mode === 'dark' ? 'default' : 'primary'} />
        <DarkModeIcon color={mode === 'dark' ? 'primary' : 'primary.contrastText'} />
      </Box>
    </Box>
  );
};

export default Topbar;
