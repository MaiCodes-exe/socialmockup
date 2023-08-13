import React from 'react';
import SideBar from './sidebar';
import Feed from './feed';
import RightBar from './rightbar';
// import Footer from './components/footer';
import NavBar from './navbar';
import { Box, Stack } from '@mui/material';



function App() {
  return (
    <Box>
      <NavBar></NavBar>
      <Stack direction="row" spacing={3} justifyContent={'space-evenly'}>
      <SideBar></SideBar>
      <Feed></Feed>
      <RightBar></RightBar>
      {/* <Footer></Footer> */}
      </Stack>
    </Box>
  );
}

export default App;