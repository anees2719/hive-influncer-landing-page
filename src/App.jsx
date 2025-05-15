import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Home from './pages/Home';

// Create a custom theme matching the design
const theme = createTheme({
  palette: {
    primary: {
      main: '#4A55D2', // Blue from the logo
    },
    secondary: {
      main: '#FFD700', // Yellow from the "JOIN AS BRAND" button
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0,
          width: '100%',
          maxWidth: '100%',
          '@media (min-width: 600px)': {
            paddingLeft: 0,
            paddingRight: 0,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
          overflowX: 'hidden',
          overflowY: 'visible',
        },
        body: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: 'auto',
          minHeight: '100%',
          overflowX: 'hidden',
          overflowY: 'visible',
        },
        '#root': {
          width: '100%',
          height: 'auto',
          minHeight: '100%',
          overflowX: 'hidden',
          overflowY: 'visible',
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        width: '100%', 
        maxWidth: '100vw', 
        overflowX: 'hidden', 
        overflowY: 'visible',
        height: 'auto',
        minHeight: '100vh'
      }}>
        <Home />
      </Box>
    </ThemeProvider>
  );
}

export default App;
