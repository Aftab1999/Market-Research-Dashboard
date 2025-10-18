import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid
} from '@mui/material';
import { TrendingUp, Dashboard as DashboardIcon } from '@mui/icons-material';

const Dashboard = () => {
  return (
    <Box sx={{ padding: { xs: '16px', md: '24px' } }}>
      {/* Page Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 600, color: '#2c4470' }}>
          Dashboard
        </Typography>
      </Box>

      {/* Key Metrics Cards Grid */}
      <Grid container spacing={3}>
        {/* 2025 Market Card */}
        <Grid item size={{ xs: 12, md: 3 }}>
          <Card sx={{ 
            bgcolor: '#2c4470', 
            color: 'white',
            boxShadow: 3,
            height: '180px',
            position: 'relative',
            '&:hover': {
              boxShadow: 6,
              transform: 'translateY(-2px)',
              transition: 'all 0.3s ease-in-out'
            }
          }}>
            <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="caption" sx={{ 
                color: 'rgba(255,255,255,0.8)', 
                fontSize: '0.75rem', 
                fontWeight: 600,
                mb: 2
              }}>
                2025 MARKET
              </Typography>
              <Typography variant="h3" sx={{ 
                color: 'white', 
                fontWeight: 700, 
                mb: 'auto',
                fontSize: '2.5rem'
              }}>
                $2,847M
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <TrendingUp sx={{ fontSize: 16, color: '#4caf50', mr: 0.5 }} />
                <Typography variant="body2" sx={{ color: '#4caf50', fontWeight: 600 }}>
                  ↑ 7.3% YoY
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* 2035 Forecast Card */}
        <Grid item size={{ xs: 12, md: 3 }}>
          <Card sx={{ 
            bgcolor: '#2c4470', 
            color: 'white',
            boxShadow: 3,
            height: '180px',
            '&:hover': {
              boxShadow: 6,
              transform: 'translateY(-2px)',
              transition: 'all 0.3s ease-in-out'
            }
          }}>
            <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="caption" sx={{ 
                color: 'rgba(255,255,255,0.8)', 
                fontSize: '0.75rem', 
                fontWeight: 600,
                mb: 2
              }}>
                2035 FORECAST
              </Typography>
              <Typography variant="h3" sx={{ 
                color: 'white', 
                fontWeight: 700, 
                mb: 'auto',
                fontSize: '2.5rem'
              }}>
                $5,892M
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <TrendingUp sx={{ fontSize: 16, color: '#2196f3', mr: 0.5 }} />
                <Typography variant="body2" sx={{ color: '#2196f3', fontWeight: 600 }}>
                  ↑ 107% vs 2025
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* CAGR Card */}
        <Grid  item size={{ xs: 12, md: 3 }}>
          <Card sx={{ 
            bgcolor: '#2c4470', 
            color: 'white',
            boxShadow: 3,
            height: '180px',
            '&:hover': {
              boxShadow: 6,
              transform: 'translateY(-2px)',
              transition: 'all 0.3s ease-in-out'
            }
          }}>
            <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="caption" sx={{ 
                color: 'rgba(255,255,255,0.8)', 
                fontSize: '0.75rem', 
                fontWeight: 600,
                mb: 2
              }}>
                CAGR 2025-35
              </Typography>
              <Typography variant="h3" sx={{ 
                color: 'white', 
                fontWeight: 700, 
                mb: 'auto',
                fontSize: '2.5rem'
              }}>
                7.5%
              </Typography>
              <Typography variant="body2" sx={{ 
                color: 'rgba(255,255,255,0.8)', 
                fontWeight: 500,
                mt: 1
              }}>
                Steady Growth
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Opportunity Card */}
        <Grid item size={{ xs: 12, md: 3 }}>
          <Card sx={{ 
            bgcolor: '#2c4470', 
            color: 'white',
            boxShadow: 3,
            height: '180px',
            '&:hover': {
              boxShadow: 6,
              transform: 'translateY(-2px)',
              transition: 'all 0.3s ease-in-out'
            }
          }}>
            <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="caption" sx={{ 
                color: 'rgba(255,255,255,0.8)', 
                fontSize: '0.75rem', 
                fontWeight: 600,
                mb: 2
              }}>
                OPPORTUNITY
              </Typography>
              <Typography variant="h3" sx={{ 
                color: 'white', 
                fontWeight: 700, 
                mb: 'auto',
                fontSize: '2.5rem'
              }}>
                $3,045M
              </Typography>
              <Typography variant="body2" sx={{ 
                color: '#ff9800', 
                fontWeight: 500,
                mt: 1
              }}>
                Incremental
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Additional Dashboard Info */}

      {/* <Box sx={{ mt: 4 }}>
        <Card sx={{ bgcolor: 'white', boxShadow: 1, p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: '#2c4470', mb: 2 }}>
            Dashboard Overview
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
            This comprehensive dashboard provides key performance indicators and market insights for the Aerospace & Defense Ducting Market. 
            The metrics shown above represent critical data points for strategic decision-making and market analysis covering the forecast period 
            from 2025 to 2035.
          </Typography>
        </Card>
      </Box> */}

    </Box>
  );
};

export default Dashboard;
