import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import ctaBackground from '../../assets/cta-section-background.png';
import '../../styles/CTA.css';

const CTA = () => {
  return (
    <Box 
      className="cta-section" 
      sx={{ 
        width: '100%', 
        maxWidth: '100%', 
        position: 'relative', 
        overflowX: 'hidden', 
        overflowY: 'visible',
        backgroundImage: `url(${ctaBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        py: 8
      }}
    >
      {/* Background with floating icons - These are added via CSS */}
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 }, py: { xs: 1, md: 1 } }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          textAlign: 'center',
          maxWidth: '800px',
          mx: 'auto',
          position: 'relative',
          zIndex: 2
        }}>
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              fontWeight: 700, 
              mb: 1,
              color: '#000',
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.75rem' }
            }}
          >
            Looking For An Advanced Solution? Lets Talk
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 5, 
              maxWidth: '700px',
              color: '#000',
              fontSize: { xs: '1rem', md: '1.125rem' }
            }}
          >
            Our customizable premium plan can help you expand your video strategy with even more content and collaborators
          </Typography>
          
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              bgcolor: '#FFDC40',
              color: '#000',
              px: 6,
              py: 1.8,
              borderRadius: '50px',
              fontWeight: 600,
              fontSize: '1rem',
              textTransform: 'uppercase',
              boxShadow: '0 4px 15px rgba(255, 220, 64, 0.3)',
              '&:hover': {
                bgcolor: '#FFD700',
                boxShadow: '0 6px 20px rgba(255, 220, 64, 0.4)',
              }
            }}
          >
            Get In Touch
          </Button>
        </Box>
      </Container>
      
      {/* Floating icon circles - added via CSS */}
    </Box>
  );
};

export default CTA; 