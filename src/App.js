import React from 'react';
import Layout from './components/Layout';

import { createTheme, ThemeProvider } from '@mui/material';

function App() {
  const [mode, setMode] = React.useState('light');

  const darkTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#e00011',
      },
      secondary: {
        main: '#D05F63',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Layout {...{ mode, setMode }} />
    </ThemeProvider>
  );
}

export default App;
