import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box mt={4} textAlign="center">
      <Typography variant="body2">
        © {new Date().getFullYear()} Landing Page. All rights reserved.
      </Typography>
      <Link href="/privacy">Privacy Policy</Link>
    </Box>
  );
};

export default Footer;
