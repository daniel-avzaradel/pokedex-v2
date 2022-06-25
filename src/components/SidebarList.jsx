import React from 'react';
import PeopleIcon from '@mui/icons-material/People';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import Pokeball from '../assets/pokeball.png';
import Pokeballs from '../assets/pokeballs.png';
import PikachuIcon from '../assets/pikachu-icon.png';
import ZubatIcon from '../assets/zubat-icon.png';
import Leaderboard from '../assets/leaderboard.png';
import Trainer from '../assets/trainer.png';
import Meowth from '../assets/meowth.png';
import Coin from '../assets/coin.png';

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';

const SidebarList = ({ setMode, mode }) => {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <img src={Pokeball} alt="Pokeball" width={26} />
          </ListItemIcon>
          <ListItemText primary="Home Page" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton component="a" href="#pokedex">
          <ListItemIcon>
            <img src={PikachuIcon} alt="Pikachu Icon" width={26} />
          </ListItemIcon>
          <ListItemText primary="Pokedex Entries" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton component="a" href="#myteams">
          <ListItemIcon>
            <img src={Pokeballs} alt="My Teams" width={26} />
          </ListItemIcon>
          <ListItemText primary="My Teams" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton component="a" href="#leaderboard">
          <ListItemIcon>
            <img src={Leaderboard} alt="Leaderboard" width={26} />
          </ListItemIcon>
          <ListItemText primary="Leaderboard" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton component="a" href="#marketplace">
          <ListItemIcon>
            <img src={Coin} alt="Marketplace" width={26} />
          </ListItemIcon>
          <ListItemText primary="Marketplace" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton component="a" href="#friends">
          <ListItemIcon>
            <img src={Meowth} alt="Friends" width={26} />
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton component="a" href="#profile">
          <ListItemIcon>
            <img src={Trainer} alt="Trainer" width={26} />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton disableRipple>
          <ListItemIcon>
            <img src={ZubatIcon} alt="Zubat Icon" width={26} />
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
