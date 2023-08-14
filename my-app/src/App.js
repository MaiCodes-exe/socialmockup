import React from 'react';
import SideBar from './sidebar';
import Feed from './feed';
import RightBar from './rightbar';
import NavBar from './navbar';
import { Box, Stack } from '@mui/material';

import Add from './add';

function App() {
  return (
    <Box>
      <NavBar></NavBar>
      <Stack direction="row" spacing={3} justifyContent={'space-evenly'}>
      <SideBar></SideBar>
      <Feed></Feed>
      <RightBar></RightBar>
      </Stack>
      <Add/>
    </Box>
  );
}

export default App;