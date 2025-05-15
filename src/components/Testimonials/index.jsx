import React from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar, Grid, Rating, useTheme, useMediaQuery } from '@mui/material';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director, TechCorp',
    avatar: '/path/to/avatar1.jpg', // Will be replaced with actual image
    content: 'Hive transformed our influencer marketing strategy. We found the perfect partners for our brand and saw a 300% increase in engagement.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Social Media Manager, FashionBrand',
    avatar: '/path/to/avatar2.jpg', // Will be replaced with actual image
    content: 'The analytics dashboard alone is worth it. We can now track our ROI in real-time and make data-driven decisions for our campaigns.',
    rating: 5,
  },
  {
    name: 'Emma Rodriguez',
    role: 'Influencer with 500K followers',
    avatar: '/path/to/avatar3.jpg', // Will be replaced with actual image
    content: 'As an influencer, Hive makes it easy to find brands that align with my values. The payment protection gives me peace of mind.',
    rating: 4,
  }
];

const Testimonials = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ 
      py: { xs: 6, md: 10 }, 
      bgcolor: 'white',
      width: '100%',
      maxWidth: '100%',
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
            What Our Users Say
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
            Hear from brands and influencers who have found success with our platform
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  position: 'relative',
                  p: 2,
                  overflow: 'visible'
                }}
              >
                <Box 
                  sx={{ 
                    position: 'absolute',
                    top: -20,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 70,
                    height: 70,
                    bgcolor: 'background.paper',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                  }}
                >
                  <Avatar 
                    sx={{ width: 60, height: 60 }}
                    alt={testimonial.name}
                    src={testimonial.avatar}
                  >
                    {testimonial.name.charAt(0)}
                  </Avatar>
                </Box>
                <CardContent sx={{ pt: 5, textAlign: 'center' }}>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {testimonial.role}
                  </Typography>
                  <Rating value={testimonial.rating} readOnly sx={{ my: 2 }} />
                  <Typography variant="body1" sx={{ fontStyle: 'italic', mt: 2 }}>
                    "{testimonial.content}"
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

export default Testimonials; 