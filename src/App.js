import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar/Sidebar';

import { Box } from '@mui/material';

function App() {
  const [mode, setMode] = useState('light');
  const toggleTheme = (mode) => {
    setMode((mode) => (mode === 'light' ? 'dark' : 'light'));
  };

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#B06E69',
        light: '#E58A6A',
        dark: '#9F4336',
        contrastText: '#EEE9C2',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="background.default" sx={{ height: '100vh' }}>
        <Topbar {...{ mode, toggleTheme }} />
        <Sidebar {...{ mode, toggleTheme }} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
