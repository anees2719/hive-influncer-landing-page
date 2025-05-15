import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  Button, 
  ToggleButtonGroup, 
  ToggleButton,
  Stack
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import TikTokIcon from '../icons/TikTokIcon';
import pricingSectionBackground from '../../assets/pricing-section-background.jpg';
import pricingCardBackground from '../../assets/pricing-card-background.jpg';
import '../../styles/Pricing.css';

const plans = [
  {
    title: 'Free',
    monthlyPrice: 0,
    yearlyPrice: 0,
    monthlyBilled: '$0',
    yearlyBilled: '$0',
    features: [
      '5 monthly Discovery credits',
      'Access to Boards: 1',
      'Up to 10 influencers on boards'
    ],
    platforms: ['instagram', 'youtube', 'tiktok'],
    popular: false
  },
  {
    title: 'Basic',
    monthlyPrice: 49,
    yearlyPrice: 39.2, // 20% off
    monthlyBilled: '$59',
    yearlyBilled: '$47.2',
    features: [
      '250 monthly Discovery credits',
      'Access to Boards: 1',
      'Up to 10 influencers on boards'
    ],
    platforms: ['instagram', 'youtube', 'tiktok'],
    popular: false
  },
  {
    title: 'Professional',
    monthlyPrice: 120,
    yearlyPrice: 96, // 20% off
    monthlyBilled: '$144',
    yearlyBilled: '$115.2',
    features: [
      '600 monthly Discovery credits',
      'Access to Boards: 5',
      'Up to 75 influencers on boards'
    ],
    platforms: ['instagram', 'youtube', 'tiktok'],
    popular: true
  },
  {
    title: 'Enterprise',
    monthlyPrice: 249,
    yearlyPrice: 199.2, // 20% off
    monthlyBilled: '$299',
    yearlyBilled: '$239.2',
    features: [
      '1300 monthly Discovery credits',
      'Access to Boards: 20',
      'Up to 300 influencers on boards'
    ],
    platforms: ['instagram', 'youtube', 'tiktok'],
    popular: false
  }
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const handleBillingCycleChange = (event, newBillingCycle) => {
    if (newBillingCycle !== null) {
      setBillingCycle(newBillingCycle);
    }
  };

  return (
    <Box 
      className="pricing-section"
      sx={{ 
        py: { xs: 8, md: 12 },
        width: '100%',
        maxWidth: '100%',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `url(${pricingSectionBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ fontWeight: 700, mb: 4 }}
          >
            Pick The Plan That's <span style={{ color: '#d23279' }}>Right For You</span>
          </Typography>
          
          <Box className="billing-toggle-container" sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            {/* Billing toggle */}
            <ToggleButtonGroup
              value={billingCycle}
              exclusive
              onChange={handleBillingCycleChange}
              aria-label="billing cycle"
              sx={{ 
                background: '#ededfd',
                borderRadius: '30px',
                '& .MuiToggleButtonGroup-grouped': {
                  border: 0,
                  borderRadius: '30px !important',
                  px: 4
                },
              }}
            >
              <ToggleButton 
                value="monthly" 
                aria-label="monthly billing"
                className={billingCycle === 'monthly' ? 'active' : ''}
                sx={{ 
                  color: 'text.primary',
                  typography: 'button',
                  py: 1,
                  '&.Mui-selected': {
                    bgcolor: '#6c64f8',
                    color: 'white',
                    '&:hover': {
                      bgcolor: '#5e57d9',
                    },
                  },
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                Month
              </ToggleButton>
              <ToggleButton 
                value="annually" 
                aria-label="annual billing"
                className={billingCycle === 'annually' ? 'active' : ''}
                sx={{ 
                  color: 'text.primary',
                  typography: 'button',
                  py: 1,
                  '&.Mui-selected': {
                    bgcolor: '#6c64f8',
                    color: 'white',
                    '&:hover': {
                      bgcolor: '#5e57d9',
                    }
                  },
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <Stack direction="row" alignItems="center" spacing={0.5}>
                  <KeyboardArrowLeftIcon />
                  <span>Annually</span>
                </Stack>
              </ToggleButton>
            </ToggleButtonGroup>
            
            {/* Save badge */}
            <Box 
              className="save-badge"
              sx={{
                position: 'absolute',
                top: '-15px',
                right: '20px',
                transform: 'rotate(12deg)',
                zIndex: 1,
                display: { xs: 'none', sm: 'block' }
              }}
            >
              <Box
                sx={{
                  bgcolor: '#e9437a',
                  color: 'white',
                  py: 0.5,
                  px: 2,
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  fontSize: '0.875rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                }}
              >
                SAVE 20%
              </Box>
            </Box>
          </Box>
        </Box>
        
        <Grid container spacing={3} justifyContent="center">
          {plans.map((plan, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card 
                sx={{ 
                  py: 3, 
                  px: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '12px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                  position: 'relative',
                  overflow: 'visible',
                  border: plan.popular ? '2px solid #e9437a' : 'none',
                  backgroundImage: plan.popular ? `url(${pricingCardBackground})` : 'none',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundColor: plan.popular ? 'transparent' : '#fff',
                }}
              >
                {plan.popular && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -12,
                      left: 'calc(50% - 60px)',
                      bgcolor: '#2c2c2c',
                      color: 'white',
                      py: 0.5,
                      px: 2,
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      zIndex: 1
                    }}
                  >
                    Most Popular
                  </Box>
                )}
                
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      border: '1px solid #eeeeee',
                      borderRadius: '50px',
                      width: 'fit-content',
                      px: 2,
                      py: 0.5
                    }}
                  >
                    <HelpOutlineIcon sx={{ color: '#9c27b0', mr: 1, fontSize: '1rem' }} />
                    <Typography variant="body1" component="h3" sx={{ fontWeight: 600 }}>
                      {plan.title}
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <Typography 
                    variant="h3" 
                    component="p" 
                    sx={{ 
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'center'
                    }}
                  >
                    ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    <Typography variant="body2" color="text.secondary" component="span" sx={{ ml: 1 }}>
                      / Per Month
                    </Typography>
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, fontWeight: 500 }}>
                    {billingCycle === 'monthly' ? plan.monthlyBilled : plan.yearlyBilled} If Billed Monthly
                  </Typography>
                </Box>
                
                <Button 
                  variant="contained"
                  fullWidth
                  sx={{ 
                    bgcolor: '#fddf40',
                    color: '#000',
                    py: 1.5,
                    mb: 3,
                    borderRadius: '30px',
                    fontWeight: 600,
                    '&:hover': {
                      bgcolor: '#efce28',
                    }
                  }}
                >
                  Get Started Free
                </Button>
                
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3, gap: 1 }}>
                  {plan.platforms.includes('instagram') && <InstagramIcon sx={{ color: '#555' }} />}
                  {plan.platforms.includes('youtube') && <YouTubeIcon sx={{ color: '#555' }} />}
                  {plan.platforms.includes('tiktok') && <TikTokIcon sx={{ color: '#555' }} />}
                </Box>
                
                <Box sx={{ mt: 'auto' }}>
                  {plan.features.map((feature, idx) => (
                    <Box 
                      key={idx} 
                      sx={{ 
                        display: 'flex',
                        alignItems: 'flex-start',
                        mb: 2
                      }}
                    >
                      <CheckCircleIcon 
                        sx={{ 
                          color: '#e9437a',
                          mr: 1,
                          fontSize: '1.2rem',
                          mt: 0.3
                        }} 
                      />
                      <Typography variant="body2" sx={{ color: '#555' }}>
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <Box 
          sx={{ 
            mt: 5, 
            display: 'flex', 
            justifyContent: 'center' 
          }}
        >
          <Button 
            variant="outlined"
            sx={{ 
              borderColor: '#888',
              color: '#555',
              borderRadius: '30px',
              px: 4,
              fontWeight: 500,
              '&:hover': {
                borderColor: '#666',
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              }
            }}
          >
            See All Features
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing; 