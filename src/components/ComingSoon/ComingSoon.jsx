import React from 'react';
import { Box, Typography } from '@mui/material';
import { Construction } from '@mui/icons-material';

const ComingSoon = ({ title, subtitle }) => {
  return (
    <Box sx={{ padding: '24px' }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '60vh',
        textAlign: 'center'
      }}>
        <Construction sx={{ 
          fontSize: 80, 
          color: '#ccc', 
          mb: 3 
        }} />
        
        <Typography 
          variant="h2" 
          sx={{ 
            fontWeight: 300, 
            color: '#666',
            mb: 2,
            fontSize: { xs: '2rem', md: '3rem' }
          }}
        >
          Coming Soon...
        </Typography>
        
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 500, 
            color: '#2c4470',
            mb: 2
          }}
        >
          {title}
        </Typography>
        
        <Typography 
          variant="h6" 
          color="text.secondary" 
          sx={{ 
            fontWeight: 400, 
            maxWidth: '600px',
            lineHeight: 1.6
          }}
        >
          {subtitle || `${title} dashboard is currently under development. Advanced analytics and insights will be available soon.`}
        </Typography>
        
        <Box sx={{ 
          mt: 4, 
          p: 2, 
          bgcolor: '#f8f9fa', 
          borderRadius: 2,
          border: '1px solid #e0e0e0'
        }}>
          <Typography variant="body2" color="text.secondary">
            This section will include interactive charts, data visualizations, and detailed analysis tools.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ComingSoon;
