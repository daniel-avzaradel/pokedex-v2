import React from 'react';
import {
  AppBar,
  Badge,
  Box,
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
import { Link } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

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
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const iconWidth = 26;
  const textColor = (mode) => (mode === 'dark' ? '#fff' : '#333');

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 250 : 'auto' }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <Link
            to='/'
            style={{
              textDecoration: 'none',
              color: textColor(mode),
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <img src={Pokeball} alt='Pokeball' width={iconWidth} />
              </ListItemIcon>
              <Typography variant='body2'>Home Page</Typography>
            </ListItemButton>
          </Link>
        </ListItem>

        <ListItem disablePadding>
          <Link
            to='/pokedex'
            style={{
              textDecoration: 'none',
              color: textColor(mode),
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <img src={PikachuIcon} alt='Pikachu Icon' width={iconWidth} />
              </ListItemIcon>
              <Typography variant='body2'>Pokedex</Typography>
            </ListItemButton>
          </Link>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href='#myteams'>
            <ListItemIcon>
              <img src={Pokeballs} alt='My Teams' width={iconWidth} />
            </ListItemIcon>
            <Typography variant='body2'>My Teams</Typography>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href='#leaderboard'>
            <ListItemIcon>
              <img src={Leaderboard} alt='Leaderboard' width={iconWidth} />
            </ListItemIcon>
            <Typography variant='body2'>Leaderboard</Typography>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href='#marketplace'>
            <ListItemIcon>
              <img src={Coin} alt='Marketplace' width={iconWidth} />
            </ListItemIcon>
            <Typography variant='body2'>Marketplace</Typography>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href='#friends'>
            <ListItemIcon>
              <img src={Meowth} alt='Friends' width={iconWidth} />
            </ListItemIcon>
            <Typography variant='body2'>Friends</Typography>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href='#profile'>
            <ListItemIcon>
              <img src={Trainer} alt='Trainer' width={iconWidth} />
            </ListItemIcon>
            <Typography variant='body2'>Profile</Typography>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton disableRipple>
            <ListItemIcon>
              <img src={ZubatIcon} alt='Zubat Icon' width={iconWidth} />
            </ListItemIcon>
            <Switch onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')} checked={mode === 'dark' ? true : false} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
          <Typography variant='h6'>POKEDEX v2.0</Typography>
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
            alt='Pokeball'
            width={30}
            style={{ marginRight: '10px' }}
            className={classes.pokeball}
            onClick={toggleDrawer('top', true)}
          />
        </Box>
        <Drawer anchor={'top'} open={state['top']} onClose={toggleDrawer('top', false)}>
          {list('top')}
        </Drawer>
        <Icons>
          <Badge badgeContent={10} color='error'>
            <EmailIcon />
          </Badge>
          <Badge badgeContent={10} color='error' sx={{ m: 2 }}>
            <NotificationsIcon />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} onClick={handleClick} />
        </Icons>
        <UserBox onClick={handleClick}>
          <Avatar sx={{ width: 30, height: 30 }} />
          <Typography variant='span'>Daniel</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
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
