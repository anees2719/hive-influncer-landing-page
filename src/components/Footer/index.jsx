import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import hiveLogo from '../../assets/hive-logo-footer.png';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <Box className="footer-outer" sx={{ bgcolor: '#000', py: 6, width: '100%' }}>
      <Box className="footer-container" sx={{ 
        maxWidth: '1200px', 
        mx: 'auto',
        px: 4,
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      }}>
        {/* First Column */}
        <Box className="footer-column" sx={{ flex: { xs: '1 1 100%', sm: '0 1 22%' }, mb: { xs: 4, sm: 0 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box component="img" src={hiveLogo} alt="HiveInfluence Logo" sx={{ width: 36, height: 36, mr: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, letterSpacing: 0.5, color: 'white' }}>
              HiveInfluence
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: '#ccc', fontSize: '0.9rem' }}>
            Find the right influencers, keep them organized, monitor content, and save time on influencer marketing.
          </Typography>
        </Box>

        {/* Second Column */}
        <Box className="footer-column" sx={{ flex: { xs: '1 1 100%', sm: '0 1 22%' }, mb: { xs: 4, sm: 0 } }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, fontSize: '0.95rem', color: 'white' }}>
            OUR PRODUCTS
          </Typography>
          <Box className="footer-links" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Link href="#" color="inherit" underline="none" sx={{ color: '#ccc', fontSize: '0.9rem' }}>
              Influencer Search Tool
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ color: '#ccc', fontSize: '0.9rem' }}>
              Influencer Analytics Tool
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ color: '#ccc', fontSize: '0.9rem' }}>
              Influencer Management Tool
            </Link>
          </Box>
        </Box>

        {/* Third Column */}
        <Box className="footer-column" sx={{ flex: { xs: '1 1 100%', sm: '0 1 22%' }, mb: { xs: 4, sm: 0 } }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, fontSize: '0.95rem', color: 'white' }}>
            ABOUT US
          </Typography>
          <Box className="footer-links" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Link href="#" color="inherit" underline="none" sx={{ color: '#ccc', fontSize: '0.9rem' }}>
              Our Data
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ color: '#ccc', fontSize: '0.9rem' }}>
              Affiliate Program
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ color: '#ccc', fontSize: '0.9rem' }}>
              Terms & Conditions
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ color: '#ccc', fontSize: '0.9rem' }}>
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ color: '#ccc', fontSize: '0.9rem' }}>
              Cookie Policy
            </Link>
          </Box>
        </Box>

        {/* Fourth Column */}
        <Box className="footer-column" sx={{ flex: { xs: '1 1 100%', sm: '0 1 22%' } }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, fontSize: '0.95rem', color: 'white' }}>
            GUIDES
          </Typography>
          <Box className="footer-links" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Link href="#" color="inherit" underline="none" sx={{ color: '#ccc', fontSize: '0.9rem' }}>
              Book A Demo
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ color: '#ccc', fontSize: '0.9rem' }}>
              Help Center
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ color: '#ccc', fontSize: '0.9rem' }}>
              Top Instagram Influencers
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ color: '#ccc', fontSize: '0.9rem' }}>
              Top YouTube Influencers
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ color: '#ccc', fontSize: '0.9rem' }}>
              Top TikTok Influencers
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer; 