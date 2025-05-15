import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const MainLayout = ({ children }) => {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        height: 'auto',
        width: '100%',
        maxWidth: '100vw',
        overflowX: 'hidden',
        overflowY: 'visible',
      }}
    >
      {children}
    </Box>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout; 