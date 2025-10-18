import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid
} from '@mui/material';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ZAxis
} from 'recharts';
import './AdjacentMarkets.css';

// Data for Market Opportunity Matrix - exact values from image
const opportunityData = [
  { x: 45, y: 18, priority: 'High', name: 'High: Space Systems', size: 300 },
  { x: 50, y: 16, priority: 'High', name: 'High: UAV/Drones', size: 250 },
  { x: 55, y: 14, priority: 'Medium', name: 'Medium: Merger', size: 200 },
  { x: 60, y: 12, priority: 'Medium', name: 'Medium: Edition', size: 150 },
  { x: 65, y: 10, priority: 'Low', name: 'Low: Automation', size: 100 },
];

const AdjacentMarkets = () => {
  return (
    <Box sx={{ padding: '24px', width: '100%' }} className="adjacent-markets-container">
   
      <Box className="adjacent-markets-header">
        <Typography variant="h5" className="adjacent-markets-title">Adjacent Markets</Typography>
        <Typography variant="subtitle2" className="adjacent-markets-subtitle">Market opportunities</Typography>
      </Box>

      <Grid container spacing={3} sx={{ width: '100%', margin: 0 }}>
        {/* Left Section - Market Opportunity Matrix */}
        <Grid item size={{ xs: 12, md: 8 }}>
          <Card className="adjacent-markets-chart">
            <CardContent>
              <Typography variant="h6" className="adjacent-chart-title">Market Opportunity Matrix</Typography>
              <Typography variant="caption" className="adjacent-chart-subtitle">Total vs. Income Rate</Typography>
              
              <Box className="adjacent-chart-container" height={450}>
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart
                    margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      type="number" 
                      dataKey="x" 
                      name="Income Rate"
                      domain={[40, 90]}
                      ticks={[45, 50, 55, 60, 65, 70, 75, 80, 85]}
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                      type="number" 
                      dataKey="y" 
                      name="Total"
                      domain={[8, 20]}
                      ticks={[10, 12, 14, 16, 18]}
                      tick={{ fontSize: 12 }}
                    />
                    <ZAxis 
                      type="number" 
                      dataKey="size" 
                      range={[200, 500]} 
                    />
                    <Tooltip 
                      cursor={{ strokeDasharray: '3 3' }}
                      formatter={(value, name) => {
                        if (name === 'x') return [`${value}`, 'Income Rate'];
                        if (name === 'y') return [`${value}`, 'Total'];
                        return [value, name];
                      }}
                      labelFormatter={(label, payload) => {
                        if (payload && payload[0]) {
                          return `Market: ${payload[0].payload.name}`;
                        }
                        return '';
                      }}
                    />
                    <Scatter 
                      name="Markets" 
                      data={opportunityData} 
                      fill="#8884d8"
                    >
                      {opportunityData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={
                            entry.priority === 'High' ? '#ff4444' : 
                            entry.priority === 'Medium' ? '#ffaa44' : '#44aa44'
                          } 
                        />
                      ))}
                    </Scatter>
                  </ScatterChart>
                </ResponsiveContainer>
              </Box>

              {/* Priority Labels */}
              <Box className="priority-labels">
                <Typography variant="caption" sx={{ mr: 3 }}>
                  <span className="priority-high">● High Priority</span>
                </Typography>
                <Typography variant="caption">
                  <span className="priority-medium">● Medium</span>
                </Typography>
              </Box>

              <Typography variant="caption" className="adjacent-watermark">
                All names and data are for reference only
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Section - Priority Analysis */}
        <Grid item size={{ xs: 12, md: 4 }}>
          <Card className="adjacent-markets-chart">
            <CardContent>
              <Typography variant="h6" className="adjacent-chart-title">Priority Analysis</Typography>
              
              <Box className="analysis-list">
                <Box className="analysis-item high-priority">
                  <Typography variant="body2" className="analysis-name">High: Space Systems</Typography>
                </Box>
                <Box className="analysis-item high-priority">
                  <Typography variant="body2" className="analysis-name">High: UAV/Drones</Typography>
                </Box>
                <Box className="analysis-item medium-priority">
                  <Typography variant="body2" className="analysis-name">Medium: Merger</Typography>
                </Box>
                <Box className="analysis-item low-priority">
                  <Typography variant="body2" className="analysis-name">Low: Automation</Typography>
                </Box>
              </Box>

              <Typography variant="caption" className="adjacent-watermark">
                All names and data are for reference only
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </Box>
  );
};

export default AdjacentMarkets;