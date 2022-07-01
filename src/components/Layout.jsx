import React from 'react';

import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Rightbar from './Rightbar/Rightbar';
import { Outlet } from 'react-router-dom';

import { Box, Stack } from '@mui/material';

const Layout = ({ mode, setMode }) => {
  return (
    <Box bgcolor={'background.default'} color='text.primary'>
      <Navbar {...{ mode, setMode }} />
      <Stack direction='row' spacing={{ xs: 0, sm: 0 }} justifyContent='space-between'>
        <Sidebar {...{ mode, setMode }} />
        <Outlet /> {/* <=== Routes rendered here */}
        <Rightbar />
      </Stack>
    </Box>
  );
};

export default Layout;
