import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DashboardLayout from './components/Layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import MarketOverview from './pages/MarketOverview';
import Segmentation from './pages/Segmentation';
import RegionalAnalysis from './pages/RegionalAnalysis';
import ManufacturingTRL from './pages/ManufacturingTRL';
import CompetitiveLandscape from './pages/CompetitiveLandscape';
import MaturityIndex from './pages/MaturityIndex';
import Substitutes from './pages/Substitutes';
import AdjacentMarket from './pages/AdjacentMarkets';
import ThreatImpact from './pages/ThreatImpact';




const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f5a8a',
    },
    secondary: {
      main: '#2c4470',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          borderRadius: '8px',
        },
      },
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/market-overview" element={<MarketOverview />} />
            <Route path="/segmentation" element={<Segmentation />} />
            <Route path="/regional-analysis" element={<RegionalAnalysis />} />
            <Route path="/manufacturing-trl" element={<ManufacturingTRL />} />
            <Route path="/competitive-landscape" element={<CompetitiveLandscape />} />
            <Route path="/maturity-index" element={<MaturityIndex />} />
            <Route path="/substitutes" element={<Substitutes />} />
            <Route path="/adjacent-markets" element={<AdjacentMarket />} />
            <Route path="/threat-impact" element={<ThreatImpact />} />
          </Routes>
        </DashboardLayout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
