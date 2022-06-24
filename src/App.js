import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar';

import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';

function App() {
  const [mode, setMode] = React.useState('light');

  const darkTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#e00011',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color="text.primary">
        <Navbar setMode={setMode} mode={mode} />
        <Stack
          direction="row"
          spacing={{ xs: 0, sm: 2 }}
          justifyContent="space-between"
        >
          <Sidebar setMode={setMode} mode={mode} />
          <Home />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
