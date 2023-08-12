import React from 'react';
import { Box } from '@mui/material';

const RightBar = () => {
  return (
    <Box bgcolor={'yellow'} flex={2} p={2} sx={{display: {xs: "none", sm: "block"}}}> I am RightBar</Box>
  );
};

export default RightBar;