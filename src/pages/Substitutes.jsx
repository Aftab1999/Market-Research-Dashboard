import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent
} from '@mui/material';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ZAxis,
  Cell,
  BarChart,
  Bar
} from 'recharts';
import './Substitutes.css';

// Data for Bubble Chart
const bubbleData = [
  { x: 25, y: 60, z: 80, threat: 'High' },
  { x: 35, y: 55, z: 70, threat: 'High' },
  { x: 45, y: 49, z: 60, threat: 'Medium' },
  { x: 55, y: 43, z: 50, threat: 'Medium' },
  { x: 65, y: 37, z: 40, threat: 'Low' },
  { x: 75, y: 31, z: 30, threat: 'Low' },
  { x: 85, y: 25, z: 20, threat: 'Low' },
];

// Data for Threat Level Matrix - Horizontal Bar Chart
const threatMatrixData = [
  { name: 'Metal Pipes', value: 75 },
  { name: '3D Printed', value: 65 },
  { name: 'Hybrid', value: 55 },
  { name: 'Molded', value: 45 },
  { name: 'Traditional', value: 35 },
];

const Substitutes = () => {
  return (
    <Box sx={{ padding: '24px', width: '100%' }} className="substitutes-container">
   
      <Box className="substitutes-header">
        <Typography variant="h5" className="substitutes-title">Substitutes</Typography>
        <Typography variant="subtitle2" className="substitutes-subtitle">Alternative technologies</Typography>
      </Box>

      <Grid container spacing={3} sx={{ width: '100%', margin: 0 }}>
        {/* Left Section - Bubble Chart */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Card className="substitutes-chart">
            <CardContent>
              <Typography variant="h6" className="substitutes-chart-title">Performance vs Cost</Typography>
              <Typography variant="caption" className="substitutes-chart-subtitle">Substitute Technologies</Typography>
              
              <Box className="substitutes-chart-container" height={400}>
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      type="number" 
                      dataKey="x" 
                      name="Cost"
                      domain={[20, 90]}
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                      type="number" 
                      dataKey="y" 
                      name="Performance"
                      domain={[20, 65]}
                      tick={{ fontSize: 12 }}
                    />
                    <ZAxis 
                      type="number" 
                      dataKey="z" 
                      range={[100, 400]} 
                      name="Threat Level"
                    />
                    <Tooltip 
                      cursor={{ strokeDasharray: '3 3' }}
                      formatter={(value, name) => {
                        if (name === 'x') return [`${value}`, 'Cost'];
                        if (name === 'y') return [`${value}`, 'Performance'];
                        if (name === 'z') return [`${value}`, 'Threat Level'];
                        return [value, name];
                      }}
                    />
                    <Scatter 
                      name="Technologies" 
                      data={bubbleData} 
                      fill="#8884d8"
                    >
                      {bubbleData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.threat === 'High' ? '#ff4444' : entry.threat === 'Medium' ? '#ffaa44' : '#44aa44'} 
                        />
                      ))}
                    </Scatter>
                  </ScatterChart>
                </ResponsiveContainer>
              </Box>

              {/* Threat Level Labels */}
              <Box className="threat-labels">
                <Typography variant="caption" sx={{ mr: 3 }}>
                  <span className="threat-high">● High Threat</span>
                </Typography>
                <Typography variant="caption">
                  <span className="threat-medium">● Medium Threat</span>
                </Typography>
              </Box>

           

            </CardContent>
          </Card>
        </Grid>

        {/* Right Section - Threat Level Matrix - Horizontal Bar Chart */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Card className="substitutes-chart">
            <CardContent>
              <Typography variant="h6" className="substitutes-chart-title">Threat Level Matrix</Typography>
              
              <Box className="substitutes-chart-container" height={400}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={threatMatrixData}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 80, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={false} />
                    <XAxis 
                      type="number" 
                      domain={[0, 100]}
                      ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90]}
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                      type="category" 
                      dataKey="name" 
                      width={100}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip formatter={(value) => [`${value}`, 'Threat Level']} />
                    <Bar 
                      dataKey="value" 
                      fill="#3f5a8a"
                      radius={[0, 4, 4, 0]}
                    >
                      {threatMatrixData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={`hsl(${210 - index * 20}, 70%, 45%)`} 
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </Box>

             

            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </Box>
  );
};

export default Substitutes;