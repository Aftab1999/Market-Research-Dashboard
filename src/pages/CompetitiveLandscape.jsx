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
  LineChart,
  Line
} from 'recharts';
import './CompetitiveLandscape.css';

// Sample data for Top 10 Market Share
const marketShareData = [
  { company: 'Senior', 2023: 45, 2035: 52 },
  { company: 'Eston', 2023: 38, 2035: 42 },
  { company: 'Through', 2023: 32, 2035: 35 },
  { company: 'PPW', 2023: 28, 2035: 32 },
  { company: 'Americas', 2023: 25, 2035: 28 },
  { company: 'Others', 2023: 42, 2035: 35 },
];

// Sample data for Innovation vs Market Scatter
const innovationData = [
  { company: 'Ledens', innovation: 88, market: 82 },
  { company: 'Chairways', innovation: 84, market: 78 },
  { company: 'Senior', innovation: 82, market: 85 },
  { company: 'Eston', innovation: 80, market: 80 },
  { company: 'Through', innovation: 78, market: 75 },
  { company: 'PPW', innovation: 74, market: 72 },
  { company: 'Americas', innovation: 70, market: 68 },
];

// Sample data for Company Metrics Line Chart
const companyMetricsData = [
  { year: '2005', Senior: 200, Edna: 180 },
  { year: '2010', Senior: 280, Edna: 220 },
  { year: '2015', Senior: 350, Edna: 300 },
  { year: '2020', Senior: 450, Edna: 380 },
  { year: '2025', Senior: 550, Edna: 450 },
  { year: '2030', Senior: 650, Edna: 520 },
  { year: '2035', Senior: 750, Edna: 600 },
];

const CompetitiveLandscape = () => {
  return (
    <Box sx={{ padding: '24px', width: '100%' }} className="comp-landscape-container">
   
      <Box className="comp-landscape-header">
        <Typography variant="h5" className="comp-landscape-title">Competitive Landscape</Typography>
        <Typography variant="subtitle2" className="comp-landscape-subtitle">Market share and positioning</Typography>
      </Box>

      <Grid container spacing={3} sx={{ width: '100%', margin: 0 }}>
        {/* Top 10 Market Share - Horizontal Bar Chart */}
        <Grid item size={{ xs: 12, md: 4 }} sx={{ paddingLeft: { xs: 0, md: '12px' } }}>
          <Card className="comp-landscape-chart">
            <CardContent>
              <Typography variant="h6" className="comp-chart-title">Top 10 Market Share</Typography>
              <Typography variant="caption" className="comp-chart-subtitle">2023 vs 2035</Typography>
              <Box className="comp-chart-container" height={400}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={marketShareData}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 60, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis type="number" domain={[0, 60]} />
                    <YAxis 
                      type="category" 
                      dataKey="company" 
                      width={80}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Market Share']}
                    />
                    <Legend />
                    <Bar 
                      dataKey="2023" 
                      fill="#3f5a8a" 
                      radius={[0, 4, 4, 0]}
                      name="2023"
                    />
                    <Bar 
                      dataKey="2035" 
                      fill="#4caf50" 
                      radius={[0, 4, 4, 0]}
                      name="2035"
                    />
                  </BarChart>
                </ResponsiveContainer>
            
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Innovation vs Market - Scatter Chart */}
        <Grid item size={{ xs: 12, md: 4 }} sx={{ paddingRight: { xs: 0, md: '12px' } }}>
          <Card className="comp-landscape-chart">
            <CardContent>
              <Typography variant="h6" className="comp-chart-title">Investment of the Company</Typography>
              <Typography variant="caption" className="comp-chart-subtitle">Innovation vs Market Competitive Positioning</Typography>
              <Box className="comp-chart-container" height={400}>
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart
                    margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      type="number" 
                      dataKey="innovation" 
                      name="Innovation"
                      domain={[60, 90]}
                    />
                    <YAxis 
                      type="number" 
                      dataKey="market" 
                      name="Market"
                      domain={[60, 90]}
                    />
                    <Tooltip 
                      cursor={{ strokeDasharray: '3 3' }}
                      formatter={(value, name) => {
                        if (name === 'innovation') return [`${value}`, 'Innovation Score'];
                        if (name === 'market') return [`${value}`, 'Market Score'];
                        return [value, name];
                      }}
                      labelFormatter={(label, payload) => {
                        if (payload && payload[0]) {
                          return `Company: ${payload[0].payload.company}`;
                        }
                        return '';
                      }}
                    />
                    <Legend />
                    <Scatter 
                      name="Companies" 
                      data={innovationData} 
                      fill="#3f5a8a"
                      fillOpacity={0.6}
                    />
                  </ScatterChart>
                </ResponsiveContainer>
               
              </Box>
            </CardContent>
          </Card>
        </Grid>

         {/* Company Metrics Line Chart */}

        <Grid item size={{ xs: 12, md: 4 }}>
          <Card className="comp-landscape-chart">
            <CardContent>
              <Typography variant="h6" className="comp-chart-title">Company Metrics</Typography>
              <Typography variant="caption" className="comp-chart-subtitle">Key Performance</Typography>
              <Box className="comp-chart-container" height={400}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={companyMetricsData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="year" />
                    <YAxis domain={[0, 800]} />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="Senior" 
                      stroke="#3f5a8a" 
                      strokeWidth={2}
                      dot={{ r: 3 }}
                      activeDot={{ r: 5 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="Edna" 
                      stroke="#4caf50" 
                      strokeWidth={2}
                      dot={{ r: 3 }}
                      activeDot={{ r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              
              </Box>
            </CardContent>
          </Card>
        </Grid>

      </Grid>

     
      <Grid container spacing={3} sx={{ mt: 0, width: '100%', margin: 0 }}>

      

      </Grid>

      {/* <Paper className="comp-key-insight" elevation={0}>
        <Info className="comp-insight-icon" />
        <Typography variant="body1" className="comp-insight-text">
          <span className="comp-insight-label">Key Insight:</span> Senior maintains market leadership with strong growth projection, while innovation investments show positive correlation with market positioning.
        </Typography>
      </Paper> */}
      
    </Box>
  );
};

export default CompetitiveLandscape;