import React from 'react';
import SidebarList from './SidebarList';

import { Box } from '@mui/material';

const Sidebar = ({ setMode, mode }) => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        minWidth: { md: 200, lg: 200, xl: 280 },
        display: { xs: 'none', sm: 'none', md: 'block' },
      }}
    >
      <Box position="fixed">
        <SidebarList setMode={setMode} mode={mode} />
      </Box>
    </Box>
  );
};

export default Sidebar;
