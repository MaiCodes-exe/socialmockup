// import React from 'react';
// import SideBar from './components/sidebar';
// import Feed from './components/feed';
// import RightBar from './components/rightbar';
// import Footer from './components/footer';
import NavBar from ' ./components/navbar';
import { Box, Stack } from '@mui/material';



function App() {
  return (
    <Box>
      <Stack direction="row" spacing={3} justifyContent={'center'}>
      <NavBar></NavBar>
      {/* <SideBar></SideBar>
      <Feed></Feed>
      <RightBar></RightBar>
      <Footer></Footer> */}
      </Stack>
    </Box>
  );
}

export default App;