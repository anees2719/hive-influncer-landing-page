import React from 'react';
import { Box, Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import SectionHeader from './SectionHeader';
import '../../styles/FeaturesTable.css';

const FeaturesTable = () => {
  // Table data for pricing plans
  const plans = [
    { name: 'Free', price: 0 },
    { name: 'Basic', price: 49 },
    { name: 'Professional', price: 120 },
    { name: 'Enterprise', price: 249 }
  ];
  
  return (
    <Box className="features-table-section" sx={{ width: '100%', py: 4, overflowX: 'hidden', overflowY: 'visible' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 2, md: 4 } }}>
        <Box textAlign="center" mb={0}>
          <Typography 
            variant="h4" 
            component="h4" 
            sx={{ 
              fontWeight: 700,
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
              display: 'inline-block',
              position: 'relative',
              paddingBottom: '20px'
            }}
          >
            Let Us Break It Down For You
          </Typography>
        </Box>
        
        <Box sx={{ width: '100%', mx: 'auto' }}>
          <TableContainer component={Paper} elevation={0} className="comparison-table" sx={{ 
            overflowX: 'auto',
            overflowY: 'visible',
            boxShadow: 'none',
            borderRadius: '8px',
            border: 'none',
            width: '100%'
          }}>
            <Table aria-label="features comparison table" sx={{ minWidth: '100%' }}>
              <TableBody>
                {/* SECTION 1: General */}
                <SectionHeader title="General" plans={plans} />

                {/* Monthly Discovery Credits */}
                <TableRow className="odd-row">
                  <TableCell component="th" scope="row" className="feature-cell"
                    sx={{ fontWeight: 500, border: 'none', padding: '20px 10px 20px 20px' }}>
                    Monthly Discovery Credits
                  </TableCell>
                  {plans.map((plan, idx) => (
                    <TableCell key={`${plan.name}-credits`} align="center" className="value-cell"
                      sx={{ color: '#e9437a', fontWeight: 600, border: 'none', padding: '20px 24px' }}>
                      {idx === 0 ? 5 : idx === 1 ? 250 : idx === 2 ? 600 : 1300}
                    </TableCell>
                  ))}
                </TableRow>

                {/* Number of Boards */}
                <TableRow className="even-row">
                  <TableCell component="th" scope="row" className="feature-cell"
                    sx={{ fontWeight: 500, border: 'none', padding: '20px 10px 20px 20px' }}>
                    Number of Boards
                  </TableCell>
                  {plans.map((plan, idx) => (
                    <TableCell key={`${plan.name}-boards`} align="center" className="value-cell"
                      sx={{ color: '#e9437a', fontWeight: 600, border: 'none', padding: '20px 24px' }}>
                      {idx === 0 ? 1 : idx === 1 ? 1 : idx === 2 ? 5 : 20}
                    </TableCell>
                  ))}
                </TableRow>

                {/* Number of Influencers per Board */}
                <TableRow className="odd-row">
                  <TableCell component="th" scope="row" className="feature-cell"
                    sx={{ fontWeight: 500, border: 'none', padding: '20px 10px 20px 20px' }}>
                    Number of Influencers per Board
                  </TableCell>
                  {plans.map((plan, idx) => (
                    <TableCell key={`${plan.name}-influencers`} align="center" className="value-cell"
                      sx={{ color: '#e9437a', fontWeight: 600, border: 'none', padding: '20px 24px' }}>
                      {idx === 0 ? 10 : idx === 1 ? 10 : idx === 2 ? 75 : 300}
                    </TableCell>
                  ))}
                </TableRow>

                {/* Access to Influencers Email */}
                <TableRow className="even-row">
                  <TableCell component="th" scope="row" className="feature-cell"
                    sx={{ fontWeight: 500, border: 'none', padding: '20px 10px 20px 20px' }}>
                    Access to Influencers Email
                  </TableCell>
                  {plans.map((plan, idx) => (
                    <TableCell key={`${plan.name}-email`} align="center" className="value-cell"
                      sx={{ border: 'none', padding: '20px 24px' }}>
                      {idx === 0 ? (
                        <CloseIcon sx={{ color: '#999', fontSize: '1.25rem' }} />
                      ) : (
                        <CheckIcon sx={{ color: '#e9437a', fontSize: '1.25rem' }} />
                      )}
                    </TableCell>
                  ))}
                </TableRow>

                {/* SECTION 2: Creator Search - Influencer */}
                <SectionHeader title="Creator Search - Influencer" plans={plans} />

                {/* Influencer features */}
                {['Followers Count', 'Influencer Gender', 'Influencer Location', 
                  'Content Categories (Topics)', 'Account Type Categorization', 
                  'Influencer Age Range', 'Profile Bio Keywords', 'Brand Partnerships', 
                  'Engagement Rate Analysis', 'Contact Information', 'Growth Rate Tracking', 
                  'Keyword Search', 'Interest Tags', 'Primary Language', 'Last Posted Date', 
                  'Reel Plays Count', 'Hashtag Usage', 'User Mentions'].map((feature, index) => (
                  <TableRow key={`influencer-${feature}`} className={index % 2 === 0 ? 'odd-row' : 'even-row'}>
                    <TableCell component="th" scope="row" className="feature-cell"
                      sx={{ fontWeight: 500, border: 'none', padding: '20px 10px 20px 20px' }}>
                      {feature}
                    </TableCell>
                    {plans.map((plan) => (
                      <TableCell key={`${plan.name}-${feature}`} align="center" className="value-cell"
                        sx={{ border: 'none', padding: '20px 24px' }}>
                        <CheckIcon sx={{ color: '#e9437a', fontSize: '1.25rem' }} />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}

                {/* SECTION 3: Creator Search - Audience */}
                <SectionHeader title="Creator Search - Audience" plans={plans} />

                {/* Audience features */}
                {['Fake Follower Detection', 'Audience Gender Breakdown', 'Audience Age Breakdown',
                  'Primary Language of Audience', 'Audience Interests', 'Audience Location'].map((feature, index) => (
                  <TableRow key={`audience-${feature}`} className={index % 2 === 0 ? 'odd-row' : 'even-row'}>
                    <TableCell component="th" scope="row" className="feature-cell"
                      sx={{ fontWeight: 500, border: 'none', padding: '20px 10px 20px 20px' }}>
                      {feature}
                    </TableCell>
                    {plans.map((plan) => (
                      <TableCell key={`${plan.name}-${feature}`} align="center" className="value-cell"
                        sx={{ border: 'none', padding: '20px 24px' }}>
                        <CheckIcon sx={{ color: '#e9437a', fontSize: '1.25rem' }} />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}

                {/* SECTION 4: Influence Analytics */}
                <SectionHeader title="Influence Analytics" plans={plans} />

                {/* Influence Analytics features */}
                {['Audience Authenticity Analysis', 'Follower Growth Tracking', 'Audience Location by Country',
                  'Audience Location by City', 'Age Distribution Analysis', 'Gender Distribution Analysis',
                  'Engagement Rate Insights', 'Content Performance Tracking', 'Reach Metrics',
                  'Impressions Metrics', 'Account Comparison Analytics', 'Historical Performance Data'].map((feature, index) => (
                  <TableRow key={`analytics-${feature}`} className={index % 2 === 0 ? 'odd-row' : 'even-row'}>
                    <TableCell component="th" scope="row" className="feature-cell"
                      sx={{ fontWeight: 500, border: 'none', padding: '20px 10px 20px 20px' }}>
                      {feature}
                    </TableCell>
                    {plans.map((plan, idx) => (
                      <TableCell key={`${plan.name}-${feature}`} align="center" className="value-cell"
                        sx={{ border: 'none', padding: '20px 24px' }}>
                        {idx === 0 && (feature === 'Account Comparison Analytics' || feature === 'Historical Performance Data') ? (
                          <CloseIcon sx={{ color: '#999', fontSize: '1.25rem' }} />
                        ) : (
                          <CheckIcon sx={{ color: '#e9437a', fontSize: '1.25rem' }} />
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}

                {/* SECTION 5: Management of Influencers */}
                <SectionHeader title="Management of Influencers" plans={plans} />

                {/* Management of Influencers features */}
                {['Kanban Board', 'Bulk Select Tool Kanban Board', 'Add Tags to Influencers', 'Internal Notes on Influencers'].map((feature, index) => (
                  <TableRow key={`management-${feature}`} className={index % 2 === 0 ? 'odd-row' : 'even-row'}>
                    <TableCell component="th" scope="row" className="feature-cell"
                      sx={{ fontWeight: 500, border: 'none', padding: '20px 10px 20px 20px' }}>
                      {feature}
                    </TableCell>
                    {plans.map((plan) => (
                      <TableCell key={`${plan.name}-${feature}`} align="center" className="value-cell"
                        sx={{ border: 'none', padding: '20px 24px' }}>
                        <CheckIcon sx={{ color: '#e9437a', fontSize: '1.25rem' }} />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}

                {/* SECTION 6: Support */}
                <SectionHeader title="Support" plans={plans} />

                {/* Support features */}
                {['Email Support', 'Live Chat & Priority Support', 'Dedicated Customer Success Manager'].map((feature, index) => (
                  <TableRow key={`support-${feature}`} className={index % 2 === 0 ? 'odd-row' : 'even-row'}>
                    <TableCell component="th" scope="row" className="feature-cell"
                      sx={{ fontWeight: 500, border: 'none', padding: '20px 10px 20px 20px' }}>
                      {feature}
                    </TableCell>
                    {plans.map((plan) => (
                      <TableCell key={`${plan.name}-${feature}`} align="center" className="value-cell"
                        sx={{ border: 'none', padding: '20px 24px' }}>
                        <CheckIcon sx={{ color: '#e9437a', fontSize: '1.25rem' }} />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}

              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturesTable; 