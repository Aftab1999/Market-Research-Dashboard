import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Paper
} from '@mui/material';
import { 
  PieChart, 
  Pie, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';
import './Segmentation.css';

// Sample data for the charts
const marketShareData = [
  { name: 'Rigid Ducts', value: 42 },
  { name: 'Flexible Ducts', value: 35 },
  { name: 'Semi-Rigid', value: 23 },
];

const segmentContributionData = [
  { name: 'Composites', value2025: 42, value2035: 57 },
  { name: 'Aluminum', value2025: 25, value2035: 18 },
  { name: 'Titanium', value2025: 15, value2035: 12 },
  { name: 'Steel', value2025: 10, value2035: 8 },
  { name: 'Others', value2025: 8, value2035: 5 },
];

const gainersLosersData = [
  { name: 'Composites', change: 9 },
  { name: 'Flexible', change: 5 },
  { name: 'Steel', change: -2 },
  { name: 'Aluminum', change: -4 },
  { name: 'Rigid', change: -8 },
];

const COLORS = ['#1a3c6e', '#4a6da7', '#8ba3c9'];

const Segmentation = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const handleCardHover = (index) => {
    setHoveredCard(index);
  };
  
  const handleCardLeave = () => {
    setHoveredCard(null);
  };
  
  return (
    <Box sx={{ padding: '24px', width: '100%' }} className="segmentation-container">
      {/* Page Header */}
      <Box className="segmentation-header">
        <Typography variant="h5" className="segmentation-title">Segmentation Performance</Typography>
        <Typography variant="subtitle2" className="segmentation-subtitle">Market share and segment analysis</Typography>
      </Box>

      {/* Charts Row */}
      <Grid container spacing={3} sx={{ width: '100%', margin: 0 }}>
        {/* Market Share Pie Chart */}
        <Grid item size={{ xs: 12, md: 4 }}>
          <Card className="segmentation-chart-card">
            <CardContent>
              <Typography variant="h6" className="segmentation-chart-title">2025 vs 2035 Share</Typography>
              <Typography variant="caption" className="segmentation-chart-subtitle">By Duct Type</Typography>
              <Box className="segmentation-chart-container" height={300}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={marketShareData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      fill="#8884d8"
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {marketShareData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Market Share']} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
               
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Segment Contribution Bar Chart */}
        <Grid item size={{ xs: 12, md: 4 }}>
          <Card className="segmentation-chart-card">
            <CardContent>
              <Typography variant="h6" className="segmentation-chart-title">Segment Contribution</Typography>
              <Typography variant="caption" className="segmentation-chart-subtitle">Material Type Analysis</Typography>
              <Box className="segmentation-chart-container" height={300}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={segmentContributionData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                    <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                    <YAxis 
                      tickFormatter={(value) => `${value}`}
                      domain={[0, 60]}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value2025" name="2025" fill="#1a3c6e" barSize={20} />
                    <Bar dataKey="value2035" name="2035" fill="#4a6da7" barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Gainers & Losers Horizontal Bar Chart */}
        <Grid item size={{ xs: 12, md: 4 }}>
          <Card className="segmentation-chart-card">
            <CardContent>
              <Typography variant="h6" className="segmentation-chart-title">Gainers & Losers</Typography>
              <Typography variant="caption" className="segmentation-chart-subtitle">Market Change 2025-2035</Typography>
              <Box className="segmentation-chart-container" height={300}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={gainersLosersData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={false} />
                    <XAxis 
                      type="number" 
                      domain={[-10, 10]} 
                      tickFormatter={(value) => `${value}%`}
                    />
                    <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} />
                    <Tooltip formatter={(value) => [`${value}%`, 'Change']} />
                    <Bar dataKey="change" barSize={20}>
                      {gainersLosersData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.change >= 0 ? '#4caf50' : '#f44336'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Percentage Cards */}
      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        {/* Rigid Ducts Card */}
        <Grid item size={{ xs: 12, md: 4 }}>
          <Card 
            className={`segmentation-percentage-card ${hoveredCard === 0 ? 'segmentation-hovered' : ''}`}
            onMouseEnter={() => handleCardHover(0)}
            onMouseLeave={handleCardLeave}
            sx={{ backgroundColor: hoveredCard === 0 ? '#1a3c6e' : '#fff' }}
          >
            <CardContent className="segmentation-percentage-content">
              <Typography variant="h6" className="segmentation-percentage-title">RIGID DUCTS</Typography>
              <Typography variant="h4" className="segmentation-percentage-value">42%→38%</Typography>
              <Typography variant="caption" className="segmentation-percentage-period">2025→2035</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Flexible Ducts Card */}
        <Grid item size={{ xs: 12, md: 4 }}>
          <Card 
            className={`segmentation-percentage-card ${hoveredCard === 1 ? 'segmentation-hovered' : ''}`}
            onMouseEnter={() => handleCardHover(1)}
            onMouseLeave={handleCardLeave}
            sx={{ backgroundColor: hoveredCard === 1 ? '#1a3c6e' : '#fff' }}
          >
            <CardContent className="segmentation-percentage-content">
              <Typography variant="h6" className="segmentation-percentage-title">FLEXIBLE DUCTS</Typography>
              <Typography variant="h4" className="segmentation-percentage-value">35%→40%</Typography>
              <Typography variant="caption" className="segmentation-percentage-period">2025→2035</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Semi-Rigid Card */}
        <Grid item size={{ xs: 12, md: 4 }}>
          <Card 
            className={`segmentation-percentage-card ${hoveredCard === 2 ? 'segmentation-hovered' : ''}`}
            onMouseEnter={() => handleCardHover(2)}
            onMouseLeave={handleCardLeave}
            sx={{ backgroundColor: hoveredCard === 2 ? '#1a3c6e' : '#fff' }}
          >
            <CardContent className="segmentation-percentage-content">
              <Typography variant="h6" className="segmentation-percentage-title">SEMI-RIGID</Typography>
              <Typography variant="h4" className="segmentation-percentage-value">23%→22%</Typography>
              <Typography variant="caption" className="segmentation-percentage-period">2025→2035</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Segmentation;
