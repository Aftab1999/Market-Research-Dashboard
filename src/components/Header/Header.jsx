import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Avatar,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
  Collapse
} from '@mui/material';
import { Menu as MenuIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#3f5a8a',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  zIndex: 1201,
  [theme.breakpoints.down('md')]: {
    '& .MuiToolbar-root': {
      minHeight: '64px',
    },
  },
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  minWidth: 120,
  [theme.breakpoints.down('lg')]: {
    minWidth: 100,
  },
  [theme.breakpoints.down('md')]: {
    minWidth: '100%',
    mb: 1,
  },
  '& .MuiInputLabel-root': {
    color: 'white',
    fontSize: '0.75rem',
    fontWeight: 500,
    [theme.breakpoints.down('md')]: {
      color: '#2c4470',
    },
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: 'white',
    height: '40px',
    fontSize: '0.8rem',
    [theme.breakpoints.down('md')]: {
      backgroundColor: 'white',
      color: '#2c4470',
      '& fieldset': {
        borderColor: '#e0e0e0',
      },
    },
    '& fieldset': {
      borderColor: 'rgba(255,255,255,0.3)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255,255,255,0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(255,255,255,0.7)',
    },
  },
  '& .MuiSelect-icon': {
    color: 'white',
    [theme.breakpoints.down('md')]: {
      color: '#2c4470',
    },
  },
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '100%',
    backgroundColor: '#f5f5f5',
    paddingTop: theme.spacing(2),
  },
}));

const Header = () => {
  const [filters, setFilters] = useState({
    region: 'Global',
    country: 'All Countries',
    dimension: 'All Dimensions',
    segment: 'All Segments',
    timeband: '2025'
  });
  
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  const handleFilterChange = (field) => (event) => {
    setFilters(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const FilterControls = () => (
    <>
      <StyledFormControl size="small">
        <InputLabel>REGION:</InputLabel>
        <Select
          value={filters.region}
          onChange={handleFilterChange('region')}
          label="REGION:"
        >
          <MenuItem value="Global">Global</MenuItem>
          <MenuItem value="North America">North America</MenuItem>
          <MenuItem value="Europe">Europe</MenuItem>
          <MenuItem value="Asia Pacific">Asia Pacific</MenuItem>
          <MenuItem value="Latin America">Latin America</MenuItem>
          <MenuItem value="Middle East & Africa">Middle East & Africa</MenuItem>
        </Select>
      </StyledFormControl>

      <StyledFormControl size="small">
        <InputLabel>COUNTRY:</InputLabel>
        <Select
          value={filters.country}
          onChange={handleFilterChange('country')}
          label="COUNTRY:"
        >
          <MenuItem value="All Countries">All Countries</MenuItem>
          <MenuItem value="United States">United States</MenuItem>
          <MenuItem value="Germany">Germany</MenuItem>
          <MenuItem value="France">France</MenuItem>
          <MenuItem value="United Kingdom">United Kingdom</MenuItem>
          <MenuItem value="China">China</MenuItem>
          <MenuItem value="Japan">Japan</MenuItem>
          <MenuItem value="India">India</MenuItem>
        </Select>
      </StyledFormControl>

      <StyledFormControl size="small">
        <InputLabel>DIMENSION:</InputLabel>
        <Select
          value={filters.dimension}
          onChange={handleFilterChange('dimension')}
          label="DIMENSION:"
        >
          <MenuItem value="All Dimensions">All Dimensions</MenuItem>
          <MenuItem value="Product Type">Product Type</MenuItem>
          <MenuItem value="Application">Application</MenuItem>
          <MenuItem value="End Use">End Use</MenuItem>
          <MenuItem value="Material">Material</MenuItem>
        </Select>
      </StyledFormControl>

      <StyledFormControl size="small">
        <InputLabel>SEGMENT:</InputLabel>
        <Select
          value={filters.segment}
          onChange={handleFilterChange('segment')}
          label="SEGMENT:"
        >
          <MenuItem value="All Segments">All Segments</MenuItem>
          <MenuItem value="Commercial Aviation">Commercial Aviation</MenuItem>
          <MenuItem value="Military Aviation">Military Aviation</MenuItem>
          <MenuItem value="General Aviation">General Aviation</MenuItem>
          <MenuItem value="Helicopters">Helicopters</MenuItem>
        </Select>
      </StyledFormControl>

      <StyledFormControl size="small">
        <InputLabel>TIMEBAND:</InputLabel>
        <Select
          value={filters.timeband}
          onChange={handleFilterChange('timeband')}
          label="TIMEBAND:"
        >
          <MenuItem value="2025">2025</MenuItem>
          <MenuItem value="2024">2024</MenuItem>
          <MenuItem value="2023">2023</MenuItem>
          <MenuItem value="2022">2022</MenuItem>
          <MenuItem value="2021">2021</MenuItem>
          <MenuItem value="2020">2020</MenuItem>
        </Select>
      </StyledFormControl>
    </>
  );

  return (
    <>
      <StyledAppBar position="fixed">
        <Box sx={{ 
          padding: { xs: '0 16px', md: '0 24px' },
        }}>
          {/* First Row - Logo and Title */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            py: { xs: 1, md: 2 },
            flexWrap: { xs: 'wrap', md: 'nowrap' }
          }}>
            <Avatar
              sx={{
                width: { xs: 36, md: 48 },
                height: { xs: 36, md: 48 },
                backgroundColor: 'white',
                color: '#3f5a8a',
                mr: 2,
                fontWeight: 'bold',
                fontSize: { xs: '0.75rem', md: '0.875rem' }
              }}
            >
              Logo
            </Avatar>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                  color: 'white',
                  lineHeight: 1.2,
                  wordBreak: 'break-word'
                }}
              >
                Aerospace & Defense Ducting Market | Global Strategic Dashboard
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: { xs: '0.7rem', md: '0.8rem' },
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                Historical (2020–2024) & Forecast (2025–2035) | 
                {/* FMI */}
                 Taxonomy & Analysis
              </Typography>
            </Box>
            
            {/* Mobile Filter Toggle */}
            {isMobile && (
              <IconButton
                color="inherit"
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                sx={{ ml: 1 }}
              >
                <ExpandMoreIcon 
                  sx={{ 
                    transform: mobileFiltersOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s'
                  }} 
                />
              </IconButton>
            )}
          </Box>

          {/* Desktop Filters */}
          {!isMobile && (
            <Box sx={{ 
              borderTop: '1px solid rgba(255,255,255,0.1)', 
              pt: 2, 
              pb: 2 
            }}>
              <Stack 
                direction="row" 
                spacing={{ md: 1, lg: 2 }} 
                sx={{ 
                  alignItems: 'center',
                  flexWrap: isTablet ? 'wrap' : 'nowrap',
                  gap: isTablet ? 1 : 0
                }}
              >
                <FilterControls />
              </Stack>
            </Box>
          )}

          {/* Mobile Filters Collapse */}
          {isMobile && (
            <Collapse in={mobileFiltersOpen}>
              <Box sx={{ 
                borderTop: '1px solid rgba(255,255,255,0.1)', 
                pt: 2, 
                pb: 2 
              }}>
                <Stack spacing={2}>
                  <FilterControls />
                </Stack>
              </Box>
            </Collapse>
          )}
        </Box>
      </StyledAppBar>
    </>
  );
};

export default Header;
