import React from 'react';
import { Box, Container, Typography, Button, Grid, useTheme, useMediaQuery } from '@mui/material';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box 
      sx={{ 
        py: { xs: 6, md: 12 },
        background: 'linear-gradient(45deg, #4A55D2 30%, #7986CB 90%)',
        color: 'white',
        width: '100%',
        maxWidth: '100%',
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography 
                variant="h2" 
                component="h1" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem' }
                }}
              >
                Connect with Top Influencers
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4, 
                  opacity: 0.8,
                  fontSize: { xs: '1.2rem', md: '1.5rem' }
                }}
              >
                Build your brand with the perfect influencer partnerships
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Button 
                  variant="contained" 
                  size="large" 
                  sx={{ 
                    borderRadius: '25px', 
                    px: 4, 
                    py: 1.5,
                    backgroundColor: theme.palette.secondary.main,
                    color: '#000',
                    '&:hover': {
                      backgroundColor: '#F7CA00',
                    }
                  }}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outlined" 
                  size="large" 
                  sx={{ 
                    borderRadius: '25px', 
                    px: 4, 
                    py: 1.5,
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    }
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                height: '100%'
              }}
            >
              {/* Placeholder for hero image */}
              <Box 
                sx={{ 
                  width: '100%', 
                  height: 400, 
                  bgcolor: 'rgba(255, 255, 255, 0.2)', 
                  borderRadius: 4,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Typography variant="h6" sx={{ opacity: 0.7 }}>
                  Hero Image Placeholder
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero; 