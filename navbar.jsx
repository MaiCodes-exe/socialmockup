import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection = () => {
  return (
    <Box mt={4} textAlign="center">
      <Typography variant="h2">Landing Page</Typography>
      <Typography variant="subtitle1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    </Typography>
      <Button variant="contained" color="primary">
        Learn More
      </Button>
    </Box>
  );
};

export default HeroSection;
