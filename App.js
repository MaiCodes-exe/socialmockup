
import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import HeroSection from './herosection';
import Footer from './footer';


function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Working on a title</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <HeroSection />
      </Container>
      <Footer />
    </div>
  );
}

export default App;