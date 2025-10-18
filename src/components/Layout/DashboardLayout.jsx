import React, { useState } from 'react';
import { Box, CssBaseline, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const SIDEBAR_WIDTH = 280;
const DESKTOP_HEADER_HEIGHT = 140;
const MOBILE_HEADER_HEIGHT = 64;

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: 0,
  backgroundColor: '#f5f5f5',
  minHeight: '100vh',
  width: '100%',
  [theme.breakpoints.up('md')]: {
    // marginLeft: SIDEBAR_WIDTH,
    marginTop: DESKTOP_HEADER_HEIGHT,
    minHeight: `calc(100vh - ${DESKTOP_HEADER_HEIGHT}px)`,
    width: `calc(100% - ${SIDEBAR_WIDTH}px)`, // Add this line to make content take remaining width
  },
  [theme.breakpoints.down('md')]: {
    marginTop: MOBILE_HEADER_HEIGHT,
    minHeight: `calc(100vh - ${MOBILE_HEADER_HEIGHT}px)`,
    width: '100%', // Full width on mobile
  },
}));

const DashboardLayout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      {/* Fixed Header */}
      <Header />
      
      {/* Fixed Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <MainContent>
        {children}
      </MainContent>
    </Box>
  );
};

export default DashboardLayout;
