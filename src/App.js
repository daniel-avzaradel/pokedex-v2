import { useState, useContext, createContext } from 'react';

function App() {
  const ThemeProvider = createContext(null);
  const [theme, setTheme] = useState('light');
  return (
    <ThemeProvider value={{ theme, setTheme }}>
      <div>
        <h1>POKEDEX 2.0</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
