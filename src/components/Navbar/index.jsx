import React, { useState } from 'react';
import { 
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// Updated menu items to match the image
const pages = ['HOME', 'RESEARCH TOOL', 'HIRE CREATORS', 'PRICING'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar 
      position="static" 
      color="transparent" 
      elevation={0} 
      sx={{ 
        bgcolor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        width: '100%',
        maxWidth: '100%'
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Toolbar disableGutters sx={{ py: 1 }}>
          {/* Logo on larger screens */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', mr: 2 }}>
            <Box 
              component="img" 
              src="/images/logo.svg"
              alt="HiveInfluence Logo"
              sx={{ 
                width: 40, 
                height: 40, 
                mr: 1, 
                display: 'flex',
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              HiveInfluence
            </Typography>
          </Box>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">LOGIN</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">JOIN AS CREATOR</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">JOIN AS BRAND</Typography>
              </MenuItem>
            </Menu>
          </Box>
          
          {/* Logo on mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', flexGrow: 1 }}>
            <Box 
              component="img" 
              src="/images/logo.svg"
              alt="HiveInfluence Logo"
              sx={{ 
                width: 30, 
                height: 30, 
                mr: 1, 
                display: 'flex',
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              HiveInfluence
            </Typography>
          </Box>
          
          {/* Desktop navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ 
                  my: 2, 
                  color: 'inherit', 
                  display: 'block', 
                  mx: 2,
                  fontWeight: 600,
                  fontSize: '0.9rem',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Action buttons */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: { sm: 0.5, md: 1 } }}>
            <Button 
              variant="outlined" 
              sx={{ 
                borderRadius: '25px', 
                px: { sm: 1.5, md: 3 },
                fontSize: { sm: '0.75rem', md: '0.875rem' },
                borderColor: '#000',
                color: '#000',
                fontWeight: 600,
                '&:hover': {
                  borderColor: '#000',
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                }
              }}
            >
              LOGIN
            </Button>
            <Button 
              variant="outlined" 
              sx={{ 
                borderRadius: '25px', 
                px: { sm: 1.5, md: 3 },
                fontSize: { sm: '0.75rem', md: '0.875rem' },
                borderColor: '#000',
                color: '#000',
                fontWeight: 600,
                display: { sm: 'none', md: 'inline-flex' },
                '&:hover': {
                  borderColor: '#000',
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                }
              }}
            >
              JOIN AS CREATOR
            </Button>
            <Button 
              variant="contained" 
              sx={{ 
                borderRadius: '25px', 
                px: { sm: 1.5, md: 3 },
                fontSize: { sm: '0.75rem', md: '0.875rem' },
                bgcolor: '#FFD700',
                color: '#000',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: '#F7CA00',
                }
              }}
            >
              JOIN AS BRAND
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 