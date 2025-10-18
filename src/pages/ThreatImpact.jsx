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
  LineChart,
  Line,
  ZAxis
} from 'recharts';
import './ThreatImpact.css';

// Data for Risk Assessment Matrix - with size property
const riskData = [
  { x: 3.3, y: 4.6, risk: 'Critical', name: 'Risk A', size: 120 },
  { x: 3.5, y: 4.4, risk: 'Critical', name: 'Risk B', size: 110 },
  { x: 3.7, y: 4.2, risk: 'High', name: 'Risk C', size: 100 },
  { x: 3.9, y: 4.0, risk: 'High', name: 'Risk D', size: 90 },
  { x: 4.1, y: 3.8, risk: 'Medium', name: 'Risk E', size: 80 },
];

// Data for Risk Evolution Timeline
const timelineData = [
  { quarter: 'Q1 2025', supplyChain: 85, materialCost: 78 },
  { quarter: 'Q2 2025', supplyChain: 78, materialCost: 72 },
  { quarter: 'Q3 2025', supplyChain: 72, materialCost: 65 },
  { quarter: 'Q4 2025', supplyChain: 65, materialCost: 58 },
  { quarter: 'Q1 2026', supplyChain: 58, materialCost: 52 },
  { quarter: 'Q2 2026', supplyChain: 52, materialCost: 48 },
];

const ThreatImpact = () => {
  return (
    <Box sx={{ padding: '24px', width: '100%' }} className="threat-impact-container">
   
      <Box className="threat-impact-header">
        <Typography variant="h5" className="threat-impact-title">Threat Impact</Typography>
        <Typography variant="subtitle2" className="threat-impact-subtitle">Risk assessment</Typography>
      </Box>

      <Grid container spacing={3} sx={{ width: '100%', margin: 0 }}>
        {/* Left Section - Risk Assessment Matrix */}
        <Grid item size={{ xs: 12, md: 8 }}>
          <Card className="threat-impact-chart">
            <CardContent>
              <Typography variant="h6" className="threat-chart-title">Risk Assessment Matrix</Typography>
              <Typography variant="caption" className="threat-chart-subtitle">Likelihood vs Impact</Typography>
              
              <Box className="threat-chart-container" height={400}>
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      type="number" 
                      dataKey="x" 
                      name="Likelihood"
                      domain={[3.2, 4.2]}
                      ticks={[3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2]}
                      tick={{ fontSize: 10 }}
                    />
                    <YAxis 
                      type="number" 
                      dataKey="y" 
                      name="Impact"
                      domain={[3.2, 4.8]}
                      ticks={[3.2, 3.4, 3.6, 3.8, 4.0, 4.2, 4.4, 4.6]}
                      tick={{ fontSize: 10 }}
                    />
                    {/* ZAxis for bubble size control */}
                    <ZAxis 
                      type="number" 
                      dataKey="size" 
                      range={[80, 150]} 
                    />
                    <Tooltip 
                      cursor={{ strokeDasharray: '3 3' }}
                      formatter={(value, name) => {
                        if (name === 'x') return [`${value}`, 'Likelihood'];
                        if (name === 'y') return [`${value}`, 'Impact'];
                        return [value, name];
                      }}
                    />
                    <Scatter 
                      name="Risks" 
                      data={riskData} 
                      fill="#8884d8"
                    >
                      {riskData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={
                            entry.risk === 'Critical' ? '#ff4444' : 
                            entry.risk === 'High' ? '#ffaa44' : '#44aa44'
                          } 
                        />
                      ))}
                    </Scatter>
                  </ScatterChart>
                </ResponsiveContainer>
              </Box>

              {/* Risk Level Labels */}
              <Box className="risk-labels">
                <Typography variant="caption" sx={{ mr: 3 }}>
                  <span className="risk-critical">● Critical</span>
                </Typography>
                <Typography variant="caption">
                  <span className="risk-high">● High</span>
                </Typography>
              </Box>

             

            </CardContent>
          </Card>
        </Grid>

        {/* Right Section - Risk Evolution */}
        <Grid item size={{ xs: 12, md: 4 }}>
          <Card className="threat-impact-chart">
            <CardContent>
              <Typography variant="h6" className="threat-chart-title">Risk Evolution</Typography>
              <Typography variant="caption" className="threat-chart-subtitle">Timeline & Mitigation</Typography>
              
              <Box className="risk-evolution-container">
                {/* Timeline Chart */}
                <Box className="timeline-chart">
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={timelineData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis 
                        dataKey="quarter" 
                        tick={{ fontSize: 10 }}
                      />
                      <YAxis 
                        domain={[0, 100]}
                        tick={{ fontSize: 10 }}
                      />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="supplyChain" 
                        stroke="#ff4444" 
                        strokeWidth={2}
                        dot={{ r: 3 }}
                        name="Supply Chain"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="materialCost" 
                        stroke="#3f5a8a" 
                        strokeWidth={2}
                        dot={{ r: 3 }}
                        name="Material Cost"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Box>
              </Box>


            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </Box>
  );
};

export default ThreatImpact;