import React, { useState } from 'react';
import SideBar from './sidebar';
import Feed from './feed';
import RightBar from './rightbar';
import NavBar from './navbar';
import { Box, Stack, ThemeProvider } from '@mui/material';

import Add from './add';

function App() {
  const [mode,setMode] = useState("light")

  const darkTheme = createTheme({
    palette:{
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}> 

    <Box>
      <NavBar></NavBar>
      <Stack direction="row" spacing={2} justifyContent={'space-evenly'}>
      <SideBar></SideBar>
      <Feed></Feed>
      <RightBar></RightBar>
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;