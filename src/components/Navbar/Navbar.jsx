import React from 'react';
import {
  AppBar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';

import Pokeball from '../../assets/pokeball.png';
import Pokeballs from '../../assets/pokeballs.png';
import PikachuIcon from '../../assets/pikachu-icon.png';
import ZubatIcon from '../../assets/zubat-icon.png';
import Leaderboard from '../../assets/leaderboard.png';
import Trainer from '../../assets/trainer.png';
import Meowth from '../../assets/meowth.png';
import Coin from '../../assets/coin.png';

// styles
import { useStyles } from './NarvbarStyles';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const Navbar = ({ setMode, mode }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 250 : 'auto' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
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
      <Divider />
    </Box>
  );

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
          <Typography variant="h6">POKEDEX v2.0</Typography>
        </Box>
        <Box
          sx={{
            p: 0,
            m: 0,
            display: { xs: 'flex', sm: 'flex', md: 'none' },
            alignItems: 'center',
          }}
        >
          <img
            src={Pokeball}
            alt="Pokeball"
            width={30}
            style={{ marginRight: '10px' }}
            className={classes.pokeball}
            onClick={toggleDrawer('top', true)}
          />
        </Box>
        <Drawer
          anchor={'top'}
          open={state['top']}
          onClose={toggleDrawer('top', false)}
        >
          {list('top')}
        </Drawer>
        <Search>
          <InputBase placeholder="Search..." sx={{ width: '400px' }} />
        </Search>
        <Icons>
          <Badge badgeContent={10} color="error">
            <EmailIcon />
          </Badge>
          <Badge badgeContent={10} color="error" sx={{ m: 2 }}>
            <NotificationsIcon />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} onClick={handleClick} />
        </Icons>
        <UserBox onClick={handleClick}>
          <Avatar sx={{ width: 30, height: 30 }} />
          <Typography variant="span">Daniel</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        anchorEl={anchorEl}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
