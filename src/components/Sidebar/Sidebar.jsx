import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import {
  Dashboard as DashboardIcon,
  BarChart as BarChartIcon,
  DonutSmall as DonutSmallIcon,
  Public as PublicIcon,
  Settings as SettingsIcon,
  Timeline as TimelineIcon,
  Category as CategoryIcon,
  SwapHoriz as SwapHorizIcon,
    AccountTree as AccountTreeIcon,  
  Warning as WarningIcon 
} from '@mui/icons-material';

const SIDEBAR_WIDTH = 280;
const MOBILE_HEADER_HEIGHT = 64;
const DESKTOP_HEADER_HEIGHT = 140;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: SIDEBAR_WIDTH,
  flexShrink: 0,
  [theme.breakpoints.up('md')]: {
    width: SIDEBAR_WIDTH,
    '& .MuiDrawer-paper': {
      width: SIDEBAR_WIDTH,
      backgroundColor: '#2c4470',
      color: 'white',
      border: 'none',
      boxSizing: 'border-box',
      marginTop: DESKTOP_HEADER_HEIGHT,
      height: `calc(100vh - ${DESKTOP_HEADER_HEIGHT}px)`,
      position: 'fixed',
    },
  },
  [theme.breakpoints.down('md')]: {
    '& .MuiDrawer-paper': {
      width: 260,
      backgroundColor: '#2c4470',
      color: 'white',
      border: 'none',
      boxSizing: 'border-box',
    },
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: 0,
  marginBottom: '4px',
}));

const StyledListItemButton = styled(ListItemButton)(({ theme, active }) => ({
  padding: '12px 20px',
  borderRadius: '0 25px 25px 0',
  marginRight: '16px',
  backgroundColor: active ? '#1e3a5f' : 'transparent',
  '&:hover': {
    backgroundColor: active ? '#1e3a5f' : 'rgba(255,255,255,0.08)',
  },
  '& .MuiListItemIcon-root': {
    color: active ? '#64b5f6' : 'rgba(255,255,255,0.7)',
    minWidth: '40px',
  },
  '& .MuiListItemText-primary': {
    fontSize: '0.95rem',
    fontWeight: active ? 600 : 400,
    color: active ? 'white' : 'rgba(255,255,255,0.9)',
  },
}));

const MobileMenuButton = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: MOBILE_HEADER_HEIGHT + 10,
  left: 16,
  zIndex: 1300,
  backgroundColor: '#2c4470',
  borderRadius: '50%',
  width: 48,
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const menuItems = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
    active: true
  },
  {
    id: 'market-overview',
    title: 'Market Overview',
    icon: <BarChartIcon />,
    active: false
  },
  {
    id: 'segmentation',
    title: 'Segmentation',
    icon: <DonutSmallIcon />,
    active: false
  },
  {
    id: 'regional-analysis',
    title: 'Regional Analysis',
    icon: <PublicIcon />,
    active: false
  },
  {
    id: 'manufacturing-trl',
    title: 'Manufacturing & TRL',
    icon: <SettingsIcon />,
    active: false
  },
  {
    id: 'competitive-landscape',
    title: 'Competitive Landscape',
    icon: <TimelineIcon />,
    active: false
  },
  {
    id: 'maturity-index',
    title: 'Maturity Index',
    icon: <CategoryIcon />,
    active: false
  },
  {
    id: 'substitutes',
    title: 'Substitutes',
    icon: <SwapHorizIcon />,
    active: false
  },

  {
    id: 'adjacent-markets',
    title: 'Adjacent Markets',
    icon: <AccountTreeIcon />,
    active: false
  },
  {
    id: 'threat-impact',
    title: 'Threat Impact',
    icon: <WarningIcon />,
    active: false
  }

];

const Sidebar = ({ mobileOpen, onMobileClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [internalMobileOpen, setInternalMobileOpen] = useState(false);

  // Use external prop or internal state
  const isDrawerOpen = mobileOpen !== undefined ? mobileOpen : internalMobileOpen;
  const handleDrawerClose = onMobileClose || (() => setInternalMobileOpen(false));

  const handleItemClick = (itemId) => {
    navigate(`/${itemId}`);
    if (isMobile) {
      handleDrawerClose();
    }
  };

  const isActive = (itemId) => {
    return location.pathname === `/${itemId}`;
  };

  const drawerContent = (
    <Box sx={{ padding: '16px 0', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Mobile Header */}
      {isMobile && (
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          p: 2,
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          <Typography variant="h6" sx={{ color: 'white' }}>
            Menu
          </Typography>
          <IconButton onClick={handleDrawerClose} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
      )}
      
      <List sx={{ flex: 1 }}>
        {menuItems.map((item) => (
          <StyledListItem key={item.id}>
            <StyledListItemButton
              active={isActive(item.id)}
              onClick={() => handleItemClick(item.id)}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </StyledListItemButton>
          </StyledListItem>
        ))}
      </List>

      {/* Footer */}

      {/* <Box
        sx={{
          p: 2,
          mt: 'auto',
          color: 'rgba(255,255,255,0.6)',
        }}
      >
        <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>
          © 2025 Future Market Insights | FMI Taxonomy & Methodology
        </Typography>
      </Box> */}

    </Box>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <MobileMenuButton
          component={IconButton}
          onClick={() => setInternalMobileOpen(true)}
        >
          <MenuIcon sx={{ color: 'white' }} />
        </MobileMenuButton>
      )}

      {/* Desktop Drawer */}
      {!isMobile && (
        <StyledDrawer variant="permanent">
          {drawerContent}
        </StyledDrawer>
      )}

      {/* Mobile Drawer */}
      {isMobile && (
        <StyledDrawer
          variant="temporary"
          open={isDrawerOpen}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
        >
          {drawerContent}
        </StyledDrawer>
      )}
    </>
  );
};

export default Sidebar;
