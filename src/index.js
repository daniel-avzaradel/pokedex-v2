import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import Home from './components/Home/Home';
import Pokedex from './components/Pokedex/Pokedex';
import Firstgen from './components/Pokedex/Firstgen/Firstgen';
import Secondgen from './components/Pokedex/Secondgen/Secondgen';
import Thirdgen from './components/Pokedex/Thirdgen/Thirdgen';
import PokemonPage from './components/Pokedex/PokemonPage/PokemonPage';
import Marketplace from './components/Marketplace/Marketplace';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/pokedex'>
            <Route index={true} element={<Pokedex />} />
            <Route path='firstgen' element={<Firstgen />} />
            <Route path='secondgen' element={<Secondgen />} />
            <Route path='thirdgen' element={<Thirdgen />} />
            <Route path=':id' element={<PokemonPage />} />
          </Route>
          <Route path='marketplace' element={<Marketplace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
