import React from 'react';
// material
import { Box } from '@mui/material';
// components
import Header from './Header/Index';
import Footer from './Footer';
import Alert from './Alert';

// -------------------------------------------------------------------------------------------

function AppWrapper({ children }) {
  return (
    <>
      <Box sx={{ overflowX: 'hidden' }}>
        {/* Header */}
        <Header />
        {/* Main Content */}
        <Box>{children}</Box>
        {/* Footer */}
        <Footer />
      </Box>

      {/* Snackbar alert */}
      <Alert />
    </>
  );
}

export default AppWrapper;
