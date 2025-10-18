import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Paper
} from '@mui/material';
import { Info } from '@mui/icons-material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  ZAxis
} from 'recharts';
import './RegionalAnalysis.css';

// Sample data for regional market distribution
const regionalData = [
  { region: 'North America', value: 1200, cagr: 6.5 },
  { region: 'Europe', value: 1000, cagr: 5.8 },
  { region: 'East Asia', value: 800, cagr: 8.2 },
  { region: 'South Asia', value: 600, cagr: 9.1 },
  { region: 'Middle East', value: 400, cagr: 7.3 },
  { region: 'Latin America', value: 200, cagr: 6.7 },
];

// Sample data for country heatmap (bubble chart)
const countryData = [
  { country: 'USA', x: 1200, y: 65, z: 85, growth: 'High' },
  { country: 'Germany', x: 800, y: 58, z: 70, growth: 'Medium' },
  { country: 'China', x: 950, y: 82, z: 90, growth: 'High' },
  { country: 'Japan', x: 700, y: 45, z: 60, growth: 'Medium' },
  { country: 'India', x: 600, y: 91, z: 95, growth: 'High' },
  { country: 'Brazil', x: 300, y: 67, z: 55, growth: 'Medium' },
  { country: 'UAE', x: 400, y: 73, z: 65, growth: 'Medium' },
  { country: 'UK', x: 750, y: 52, z: 68, growth: 'Medium' },
  { country: 'South Korea', x: 550, y: 78, z: 75, growth: 'High' },
  { country: 'Mexico', x: 250, y: 62, z: 50, growth: 'Medium' },
];

const RegionalAnalysis = () => {
  return (
    <Box sx={{ padding: '24px', width: '100%' }} className="re-analysis-container">
   
      <Box className="re-analysis-header">
        <Typography variant="h5" className="re-analysis-title">Regional & Country Analysis</Typography>
        <Typography variant="subtitle2" className="re-analysis-subtitle">Geographic market distribution</Typography>
      </Box>

      <Grid container spacing={3} sx={{ width: '100%', margin: 0 }}>
        {/* Regional Market Distribution Chart */}
        <Grid item size={{ xs: 12, md: 6 }} sx={{ paddingLeft: { xs: 0, md: '12px' } }}>
          <Card className="re-analysis-chart">
            <CardContent>
              <Typography variant="h6" className="re-chart-title">Regional Market Distribution</Typography>
              <Typography variant="caption" className="re-chart-subtitle">Value & CAGR Analysis</Typography>
              <Box className="re-chart-container" height={400}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={regionalData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="region" 
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                      tickFormatter={(value) => `$${value}`}
                      domain={[0, 1400]}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip 
                      formatter={(value, name) => {
                        if (name === 'value') return [`$${value}`, '2025 Value'];
                        return [`${value}%`, 'CAGR'];
                      }}
                    />
                    <Legend />
                    <Bar 
                      dataKey="value" 
                      fill="#3f5a8a" 
                      radius={[4, 4, 0, 0]}
                      name="2025 Value"
                    />
                    <Bar 
                      dataKey="cagr" 
                      fill="#4caf50" 
                      radius={[4, 4, 0, 0]}
                      name="CAGR (%)"
                    />
                  </BarChart>
                </ResponsiveContainer>
              
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Country Heatmap - Bubble Chart */}
        <Grid item size={{ xs: 12, md: 6 }} sx={{ paddingRight: { xs: 0, md: '12px' } }}>
          <Card className="re-analysis-chart">
            <CardContent>
              <Typography variant="h6" className="re-chart-title">Country Heatmap</Typography>
              <Typography variant="caption" className="re-chart-subtitle">Green's intensity indicates growth potential</Typography>
              <Box className="re-chart-container" height={400}>
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart
                    margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      type="number" 
                      dataKey="x" 
                      name="Market Value"
                      tickFormatter={(value) => `$${value}`}
                      domain={[0, 1400]}
                    />
                    <YAxis 
                      type="number" 
                      dataKey="y" 
                      name="Growth Rate"
                      tickFormatter={(value) => `${value}%`}
                      domain={[0, 100]}
                    />
                    <ZAxis 
                      type="number" 
                      dataKey="z" 
                      range={[50, 400]} 
                      name="Intensity"
                    />
                    <Tooltip 
                      cursor={{ strokeDasharray: '3 3' }}
                      formatter={(value, name) => {
                        if (name === 'x') return [`$${value}`, 'Market Value'];
                        if (name === 'y') return [`${value}%`, 'Growth Rate'];
                        if (name === 'z') return [`${value}`, 'Intensity'];
                        return [value, name];
                      }}
                      labelFormatter={(label, payload) => {
                        if (payload && payload[0]) {
                          return `Country: ${payload[0].payload.country}`;
                        }
                        return '';
                      }}
                    />
                    <Legend />
                    <Scatter 
                      name="Countries" 
                      data={countryData} 
                      fill="#4caf50"
                      fillOpacity={0.6}
                    />
                  </ScatterChart>
                </ResponsiveContainer>
               
              </Box>
              <Box className="growth-legend" sx={{ mt: 2 }}>
                <Typography variant="caption" sx={{ mr: 2 }}>
                  <span style={{ color: '#2e7d32', fontWeight: 'bold' }}>● High Growth</span>
                </Typography>
                <Typography variant="caption">
                  <span style={{ color: '#8bc34a', fontWeight: 'bold' }}>● Medium Growth</span>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
      </Grid>

      {/* <Paper className="re-key-insight" elevation={0}>
        <Info className="re-insight-icon" />
        <Typography variant="body1" className="re-insight-text">
          <span className="re-insight-label">Key Insight:</span> Emerging markets in South Asia and East Asia show highest growth potential with CAGR exceeding 8%.
        </Typography>
      </Paper> */}
      
    </Box>
  );
};

export default RegionalAnalysis;