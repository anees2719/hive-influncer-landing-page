import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, useTheme, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BarChartIcon from '@mui/icons-material/BarChart';
import SecurityIcon from '@mui/icons-material/Security';
import featureBackground from '../../assets/feature-section-background.jpg';

const features = [
  {
    title: 'Find the Perfect Match',
    description: 'Our AI-powered search helps you find influencers that perfectly align with your brand values and target audience.',
    icon: <SearchIcon sx={{ fontSize: 60 }} />,
    color: '#3f51b5'
  },
  {
    title: 'Seamless Collaboration',
    description: 'Our platform streamlines communication, contracts, and payments for hassle-free partnerships.',
    icon: <HandshakeIcon sx={{ fontSize: 60 }} />,
    color: '#f50057'
  },
  {
    title: 'Detailed Analytics',
    description: 'Track campaign performance with comprehensive analytics and insights to maximize your ROI.',
    icon: <BarChartIcon sx={{ fontSize: 60 }} />,
    color: '#00bcd4'
  },
  {
    title: 'Secure Transactions',
    description: 'Our secure escrow payment system protects both brands and influencers throughout the partnership.',
    icon: <SecurityIcon sx={{ fontSize: 60 }} />,
    color: '#4caf50'
  }
];

const Features = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ 
      py: { xs: 6, md: 10 }, 
      backgroundImage: `url(${featureBackground})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100%',
      maxWidth: '100%',
      position: 'relative',
    }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 700, 
              mb: 2,
              fontSize: { xs: '2rem', md: '2.75rem' }
            }}
          >
            Why Choose Hive
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              maxWidth: 700, 
              mx: 'auto', 
              color: 'text.secondary',
              fontSize: { xs: '1rem', md: '1.25rem' }
            }}
          >
            Our platform offers everything you need to build successful influencer marketing campaigns
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)'
                  }
                }}
              >
                <Box 
                  sx={{ 
                    p: 2, 
                    display: 'flex', 
                    justifyContent: 'center',
                    bgcolor: feature.color,
                    color: 'white'
                  }}
                >
                  {feature.icon}
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features; 