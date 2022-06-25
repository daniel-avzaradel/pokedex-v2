import React from 'react';
import { Link } from 'react-router-dom';

import Pokeball from '../../assets/pokeball.png';
import Pokeballs from '../../assets/pokeballs.png';
import PikachuIcon from '../../assets/pikachu-icon.png';
import ZubatIcon from '../../assets/zubat-icon.png';
import Leaderboard from '../../assets/leaderboard.png';
import Trainer from '../../assets/trainer.png';
import Meowth from '../../assets/meowth.png';
import Coin from '../../assets/coin.png';

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';

const SidebarList = ({ setMode, mode }) => {
  const iconWidth = 32;
  const textColor = (mode) => (mode === 'dark' ? '#fff' : '#333');
  return (
    <List>
      <ListItem disablePadding>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: textColor(mode),
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <img src={Pokeball} alt="Pokeball" width={iconWidth} />
            </ListItemIcon>
            <ListItemText primary="Home Page" />
          </ListItemButton>
        </Link>
      </ListItem>

      <ListItem disablePadding>
        <Link
          to="/pokedex"
          style={{
            textDecoration: 'none',
            color: textColor(mode),
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <img src={PikachuIcon} alt="Pikachu Icon" width={iconWidth} />
            </ListItemIcon>
            <ListItemText primary="Pokedex" />
          </ListItemButton>
        </Link>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton component="a" href="#myteams">
          <ListItemIcon>
            <img src={Pokeballs} alt="My Teams" width={iconWidth} />
          </ListItemIcon>
          <ListItemText primary="My Teams" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton component="a" href="#leaderboard">
          <ListItemIcon>
            <img src={Leaderboard} alt="Leaderboard" width={iconWidth} />
          </ListItemIcon>
          <ListItemText primary="Leaderboard" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton component="a" href="#marketplace">
          <ListItemIcon>
            <img src={Coin} alt="Marketplace" width={iconWidth} />
          </ListItemIcon>
          <ListItemText primary="Marketplace" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton component="a" href="#friends">
          <ListItemIcon>
            <img src={Meowth} alt="Friends" width={iconWidth} />
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton component="a" href="#profile">
          <ListItemIcon>
            <img src={Trainer} alt="Trainer" width={iconWidth} />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton disableRipple>
          <ListItemIcon>
            <img src={ZubatIcon} alt="Zubat Icon" width={iconWidth} />
          </ListItemIcon>
          <Switch
            onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')}
            checked={mode === 'dark' ? true : false}
          />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default SidebarList;
