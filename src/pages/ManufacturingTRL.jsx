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
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';
import './ManufacturingTRL.css';

// Sample data for manufacturing process share
const processData = [
  { name: 'Fiamont Whiting', value: 35 },
  { name: 'Hard Lay-up', value: 25 },
  { name: 'Rush Transfer', value: 20 },
  { name: 'Aricobee', value: 15 },
  { name: 'Oilers', value: 5 },
];

// Colors for pie chart
const COLORS = ['#3f5a8a', '#4caf50', '#ff9800', '#e91e63', '#9c27b0'];

// Sample data for Radar Chart (Technology Readiness)
const radarData = [
  { subject: 'TBL Level', A: 85, B: 75, fullMark: 100 },
  { subject: 'Composition', A: 70, B: 80, fullMark: 100 },
  { subject: 'Go Analytics', A: 90, B: 65, fullMark: 100 },
  { subject: 'Andrew Mly', A: 60, B: 85, fullMark: 100 },
  { subject: 'Nana Matosha', A: 75, B: 70, fullMark: 100 },
  { subject: 'Smart Services', A: 80, B: 90, fullMark: 100 },
];

const ManufacturingTRL = () => {
  return (
    <Box sx={{ padding: '24px', width: '100%' }} className="mfg-trl-container">
   
      <Box className="mfg-trl-header">
        <Typography variant="h5" className="mfg-trl-title">Manufacturing Process & TRL</Typography>
        <Typography variant="subtitle2" className="mfg-trl-subtitle">Technology readiness levels</Typography>
      </Box>

      <Grid container spacing={3} sx={{ width: '100%', margin: 0 }}>
        {/* Manufacturing Process Share - Pie Chart */}
        <Grid item size={{ xs: 12, md: 6 }} sx={{ paddingLeft: { xs: 0, md: '12px' } }}>
          <Card className="mfg-trl-chart">
            <CardContent>
              <Typography variant="h6" className="mfg-chart-title">Process Share</Typography>
              <Typography variant="caption" className="mfg-chart-subtitle">Manufacturing Methods</Typography>
              <Box className="mfg-chart-container" height={400}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={processData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {processData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Share']} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
               
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Technology Readiness - Radar Chart */}
        <Grid item size={{ xs: 12, md: 6 }} sx={{ paddingRight: { xs: 0, md: '12px' } }}>
          <Card className="mfg-trl-chart">
            <CardContent>
              <Typography variant="h6" className="mfg-chart-title">Technology Readiness</Typography>
              <Typography variant="caption" className="mfg-chart-subtitle">Arlington Marble</Typography>
              <Box className="mfg-chart-container" height={400}>
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar
                      name="Current"
                      dataKey="A"
                      stroke="#3f5a8a"
                      fill="#3f5a8a"
                      fillOpacity={0.6}
                    />
                    <Radar
                      name="Target"
                      dataKey="B"
                      stroke="#4caf50"
                      fill="#4caf50"
                      fillOpacity={0.6}
                    />
                    <Legend />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
             
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* <Paper className="mfg-key-insight" elevation={0}>
        <Info className="mfg-insight-icon" />
        <Typography variant="body1" className="mfg-insight-text">
          <span className="mfg-insight-label">Key Insight:</span> Fiamont Whiting leads in manufacturing process share while technology readiness shows strong performance in Go Analytics and Smart Services.
        </Typography>
      </Paper> */}
      
    </Box>
  );
};

export default ManufacturingTRL;