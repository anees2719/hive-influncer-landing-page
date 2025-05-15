import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import demoImage from '../../assets/demo-section.png';
import demoBackground from '../../assets/demo-section-background.jpg';
import '../../styles/DemoSection.css';

const DemoSection = () => {
  return (
    <Box 
      className="demo-section" 
      sx={{ 
        width: '100%', 
        py: 10,
        position: 'relative',
        backgroundImage: `url(${demoBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        overflowX: 'hidden',
        overflowY: 'visible',
      }}
    >
      {/* HIVE text watermark */}
      <Typography
        variant="h1"
        className="background-text"
        sx={{
          position: 'absolute',
          fontSize: { xs: '150px', sm: '200px', md: '300px', lg: '400px' },
          fontWeight: 800,
          color: 'rgba(255, 255, 255, 0.3)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          letterSpacing: '8px',
          zIndex: 0,
          whiteSpace: 'nowrap',
          opacity: 0.5,
        }}
      >
        HIVE
      </Typography>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 700,
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
              mb: 2
            }}
          >
            Meet With Hive Influence
          </Typography>
          <Typography 
            variant="body1" 
            component="p" 
            sx={{ 
              fontSize: { xs: '1rem', md: '1.125rem' },
              maxWidth: '700px',
              mx: 'auto',
              color: '#555'
            }}
          >
            If you'd like to learn more or just have a question, our team is ready to help
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <Button
            className="demo-button"
            variant="contained"
            sx={{
              bgcolor: '#ffe234',
              color: '#222',
              fontWeight: 600,
              py: 1.5,
              px: 4,
              fontSize: '1rem',
              borderRadius: '30px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#f0d400',
              }
            }}
          >
            BOOK A DEMO
          </Button>
        </Box>

        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center',
            maxWidth: '1000px',
            mx: 'auto'
          }}
        >
          <Box 
            component="img"
            className="laptop-image"
            src={demoImage}
            alt="Hive Influence Platform Dashboard"
            sx={{
              width: '100%',
              maxWidth: '900px',
              borderRadius: '8px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default DemoSection; 