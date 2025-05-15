import React from 'react';
import { TableRow, TableCell, Typography, Box } from '@mui/material';

const SectionHeader = ({ title, plans }) => {
  return (
    <TableRow>
      <TableCell 
        className="header-cell feature-cell"
        sx={{ 
          fontWeight: 600, 
          backgroundColor: '#f9f9f9',
          minWidth: '350px',
          border: 'none',
          padding: '24px 20px',
          textAlign: 'left'
        }}
      >
        {title}
      </TableCell>
      {plans.map((plan) => (
        <TableCell 
          key={`${plan.name}-${title}`}
          className="header-cell"
          align="center"
          sx={{ 
            fontWeight: 600,
            backgroundColor: '#f9f9f9',
            border: 'none',
            padding: '24px',
            minWidth: '175px',
            width: 'auto'
          }}
        >
          <Typography variant="subtitle1" fontWeight={600} align="center">
            {plan.name}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', mt: 0.5 }}>
            <Typography 
              component="span"
              sx={{ 
                fontWeight: 700, 
                fontSize: '1.25rem',
              }}
            >
              ${plan.price}
            </Typography>
            <Typography 
              component="span" 
              variant="caption" 
              color="text.secondary" 
              sx={{ 
                fontWeight: 400,
                ml: 0.5
              }}
            >
              /per month
            </Typography>
          </Box>
        </TableCell>
      ))}
    </TableRow>
  );
};

export default SectionHeader; 