import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Tabs,
  Tab,
  styled
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { generalQuestions, brandQuestions } from './constants';
import '../../styles/FAQ.css';

// Custom styled Tab component
const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '16px',
  padding: '12px 24px',
  color: '#666',
  '&.Mui-selected': {
    color: '#e9437a',
    fontWeight: 600,
  },
  '&.Mui-focusVisible': {
    outline: 'none',
    border: 'none',
    backgroundColor: 'transparent',
  },
  '&:focus': {
    outline: 'none',
    border: 'none',
  }
}));

// Custom styled Tabs component
const StyledTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    backgroundColor: '#e9437a',
    height: '3px',
  },
}));

// Custom styled Accordion
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  '&.MuiAccordion-root': {
    borderRadius: '8px !important',
    '&:before': {
      display: 'none',
    },
    '&.Mui-expanded': {
      margin: '0 0 16px 0',
    },
    '&:focus': {
      outline: 'none',
    },
    '&.Mui-focusVisible': {
      outline: 'none',
    },
  },
  '& .MuiAccordionSummary-root': {
    '&:focus': {
      outline: 'none',
      backgroundColor: 'transparent',
    },
    '&.Mui-focusVisible': {
      outline: 'none',
      backgroundColor: 'transparent',
    },
  }
}));

const FAQ = () => {
  const [tabValue, setTabValue] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Get current questions based on selected tab
  const currentQuestions = tabValue === 0 ? generalQuestions : brandQuestions;

  return (
    <Box className="faq-section" sx={{ width: '100%', py: 8, backgroundColor: '#fafafa' }}>
      <Container maxWidth="xl">
        <Box textAlign="center" mb={5}>
          <Typography 
            variant="subtitle1" 
            component="p" 
            sx={{ 
              color: '#e9437a',
              fontWeight: 600,
              fontSize: '1rem',
              mb: 1
            }}
          >
            OUR FAQ'S
          </Typography>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 700,
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
              mb: 4
            }}
          >
            Have Any Questions?
          </Typography>
        
          {/* Tabs for category selection */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <StyledTabs 
              value={tabValue} 
              onChange={handleTabChange}
              aria-label="FAQ categories"
              centered
              TabIndicatorProps={{
                style: {
                  display: 'block', 
                  backgroundColor: '#e9437a'
                }
              }}
            >
              <StyledTab label="General" disableRipple disableFocusRipple />
              <StyledTab label="Brands" disableRipple disableFocusRipple />
            </StyledTabs>
          </Box>
        </Box>
        
        {/* Accordion questions and answers */}
        <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
          {currentQuestions.map((item) => (
            <StyledAccordion 
              key={item.id}
              expanded={expanded === `panel${item.id}`}
              onChange={handleAccordionChange(`panel${item.id}`)}
              disableGutters
              elevation={0}
              square={false}
              sx={{ 
                mb: 2, 
                boxShadow: 'none',
                border: '1px solid #eee',
                backgroundColor: expanded === `panel${item.id}` ? '#fef6fa' : 'white',
                '&:focus': {
                  outline: 'none',
                },
                '&.Mui-focusVisible': {
                  outline: 'none',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#e9437a' }} />}
                aria-controls={`panel${item.id}-content`}
                id={`panel${item.id}-header`}
                disableRipple
                sx={{ 
                  px: 3, 
                  py: 2,
                  '&.Mui-expanded': {
                    minHeight: '56px',
                  },
                  '&:focus': {
                    outline: 'none',
                    backgroundColor: 'transparent',
                  },
                  '&.Mui-focusVisible': {
                    outline: 'none',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography 
                    variant="body2" 
                    component="span"
                    sx={{ 
                      color: '#999', 
                      fontWeight: 500,
                      mr: 2,
                      fontSize: '1rem'
                    }}
                  >
                    {item.id}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    component="h3"
                    sx={{ 
                      fontWeight: 600,
                      fontSize: '1.1rem'
                    }}
                  >
                    {item.question}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, py: 2, pl: 6 }}>
                <Typography variant="body1" color="text.secondary">
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </StyledAccordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ; 