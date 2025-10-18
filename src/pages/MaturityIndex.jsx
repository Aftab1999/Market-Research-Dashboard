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
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';
import './MaturityIndex.css';

// Sample data for Radar Chart (Technology Maturity)
const maturityData = [
  { subject: 'Tech Biosciences', current: 75, target: 90 },
  { subject: 'Supply Chain', current: 65, target: 85 },
  { subject: 'Market Adoption', current: 60, target: 80 },
  { subject: 'Wright Advantage', current: 80, target: 95 },
  { subject: 'Cost Position', current: 70, target: 88 },
];

const MaturityIndex = () => {
  return (
    <Box sx={{ padding: '24px', width: '100%' }} className="maturity-index-container">
   
      <Box className="maturity-index-header">
        <Typography variant="h5" className="maturity-index-title">Maturity Index</Typography>
        <Typography variant="subtitle2" className="maturity-index-subtitle">Technology maturity assessment</Typography>
      </Box>

      <Grid container spacing={3} sx={{ width: '100%', margin: 0 }}>
        {/* Technology Maturity - Radar Chart */}
        <Grid item size={{ xs: 12, md: 8 }} sx={{ paddingLeft: { xs: 0, md: '12px' } }}>
          <Card className="maturity-index-chart">
            <CardContent>
              <Typography variant="h6" className="maturity-chart-title">Technology Maturity</Typography>
              <Typography variant="caption" className="maturity-chart-subtitle">Multi-dimensional Analysis</Typography>
              <Box className="maturity-chart-container" height={500}>
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={maturityData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar
                      name="Current"
                      dataKey="current"
                      stroke="#3f5a8a"
                      fill="#3f5a8a"
                      fillOpacity={0.6}
                    />
                    <Radar
                      name="2035 Target"
                      dataKey="target"
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

        {/* Procurement Implications */}
        <Grid item size={{ xs: 12, md: 4 }} sx={{ paddingRight: { xs: 0, md: '12px' } }}>
          <Card className="maturity-implications-card">
            <CardContent>
              <Typography variant="h6" className="implications-title">Procurement Implications</Typography>
              
              <Box className="implication-item high-maturity">
                <Typography variant="subtitle2" className="implication-category">High Maturity:</Typography>
                <Typography variant="body2" className="implication-text">
                  Composite ducting systems show 85% tech readiness.
                </Typography>
              </Box>

              <Box className="implication-item medium-maturity">
                <Typography variant="subtitle2" className="implication-category">Medium Maturity:</Typography>
                <Typography variant="body2" className="implication-text">
                  Maturity is a market for the Group and data only.
                </Typography>
              </Box>

              <Box className="implication-item emerging-tech">
                <Typography variant="subtitle2" className="implication-category">Emerging Tech:</Typography>
                <Typography variant="body2" className="implication-text">
                  Smart ducting at 25% maturity, high growth potential
                </Typography>
              </Box>

              <Box className="disclaimer">
                <Typography variant="caption" className="disclaimer-text">
                  All natures are unique to our customers and are not unique to our competitors.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* <Paper className="maturity-key-insight" elevation={0}>
        <Info className="maturity-insight-icon" />
        <Typography variant="body1" className="maturity-insight-text">
          <span className="maturity-insight-label">Key Insight:</span> Wright Advantage shows strongest current performance while Tech Biosciences has the highest growth potential towards 2035 targets.
        </Typography>
      </Paper> */}
      
    </Box>
  );
};

export default MaturityIndex;