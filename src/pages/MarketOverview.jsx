import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Paper
} from '@mui/material';
import { 
  TrendingUp, 
  Assessment, 
  Timeline, 
  PieChart as PieChartIcon,
  BarChart as BarChartIcon,
  ShowChart,
  Info
} from '@mui/icons-material';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import './MarketOverview.css';

// Sample data for the charts
const marketValueData = [
  { year: '2020', value: 22000 },
  { year: '2021', value: 23500 },
  { year: '2022', value: 25000 },
  { year: '2023', value: 27000 },
  { year: '2024', value: 29000 },
  { year: '2025', value: 31000 },
  { year: '2026', value: 33500 },
  { year: '2027', value: 36000 },
  { year: '2028', value: 39000 },
  { year: '2029', value: 42000 },
  { year: '2030', value: 45500 },
  { year: '2031', value: 49000 },
  { year: '2032', value: 53000 },
  { year: '2033', value: 57000 },
  { year: '2034', value: 61500 },
  { year: '2035', value: 66000 },
];

const yearOverYearData = [
  { year: '2020', growth: 5.2 },
  { year: '2021', growth: 5.5 },
  { year: '2022', growth: 5.3 },
  { year: '2023', growth: 2.4 },
  { year: '2024', growth: 7.1 },
  { year: '2025', growth: 6.8 },
  { year: '2026', growth: 7.2 },
  { year: '2027', growth: 7.5 },
  { year: '2028', growth: 7.6 },
  { year: '2029', growth: 7.4 },
  { year: '2030', growth: 7.7 },
  { year: '2031', growth: 7.5 },
  { year: '2032', growth: 7.6 },
  { year: '2033', growth: 7.5 },
  { year: '2034', growth: 7.6 },
  { year: '2035', growth: 9.8 },
];

const MarketOverview = () => {
  return (
    <Box sx={{ padding: '24px', width: '100%' }} className="market-overview-container">
      {/* Page Header */}
      <Box className="page-header">
        <Typography variant="h5" className="page-title">Market Overview & Growth</Typography>
        <Typography variant="subtitle2" className="page-subtitle">Historical trends and forecast analysis</Typography>
      </Box>

      {/* Charts Grid */}
      <Grid container spacing={3} sx={{ width: '100%', margin: 0 }}>
        {/* Market Value Chart */}
        <Grid item size={{ xs: 12, md: 7 }} sx={{ paddingLeft: { xs: 0, md: '12px' } }}>
          <Card className="chart-card">
            <CardContent>
              <Typography variant="h6" className="chart-title">Total Market Value (USD Million)</Typography>
              <Typography variant="caption" className="chart-subtitle">Historical vs Forecast Trend</Typography>
              <Box className="chart-container" height={300}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={marketValueData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                    <YAxis 
                      tickFormatter={(value) => `$${value}M`}
                      domain={[20000, 70000]}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip 
                      formatter={(value) => [`$${value}M`, 'Market Value']}
                      labelFormatter={(label) => `Year: ${label}`}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#3f5a8a" 
                      strokeWidth={2} 
                      dot={{ r: 3 }} 
                      activeDot={{ r: 5 }}
                    />
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3f5a8a" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#3f5a8a" stopOpacity={0.05}/>
                      </linearGradient>
                    </defs>
                    <Legend />
                  </LineChart>
                </ResponsiveContainer>
              
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Year-over-Year Growth Chart */}
        <Grid item size={{ xs: 12, md: 5 }} sx={{ paddingRight: { xs: 0, md: '12px' } }}>
          <Card className="chart-card">
            <CardContent>
              <Typography variant="h6" className="chart-title">Year-over-Year Growth (%)</Typography>
              <Typography variant="caption" className="chart-subtitle">Annual Growth Rate Analysis</Typography>
              <Box className="chart-container" height={300}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={yearOverYearData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} />
                    <YAxis 
                      tickFormatter={(value) => `${value}%`}
                      domain={[0, 12]}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Growth Rate']}
                      labelFormatter={(label) => `Year: ${label}`}
                    />
                    <Bar 
                      dataKey="growth" 
                      fill="#4caf50" 
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
             
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Key Insight Box */}
      <Paper className="key-insight" elevation={0}>
        <Info className="insight-icon" />
        <Typography variant="body1" className="insight-text">
          <span className="insight-label">Key Insight:</span> The aerospace ducting market shows robust growth driven by fleet modernization and lightweight material adoption.
        </Typography>
      </Paper>
    </Box>
  );
};

export default MarketOverview;
