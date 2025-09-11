import React from "react";
import './chartjs-setup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Line } from 'react-chartjs-2';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InterpreterModeSharp from "@mui/icons-material/InterpreterModeSharp";
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';
import  LogoutIcon from "@mui/icons-material/Logout";
import Divider from '@mui/material/Divider';

const mockDecibelData = Array.from({ length: 10 }, (_, i) => 60 + Math.round(Math.sin(i / 1) * 10 + Math.random() * 5));

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      min: 50,
      max: 80,
      title: {
        display: true,
        text: 'dB',
      },
      grid: {
        color: '#ffffffc8',
        borderDash: [3, 7],
        lineWidth: 0.1,
      },
    },
   
  },
};

const data = {
  labels: mockDecibelData.map((_, i) => `t${i}`),
  datasets: [
    { 
      label: 'Decibel Level',
      data: mockDecibelData,
      fill: true,
      borderColor: 'rgba(140, 31, 167, 0.638)',
      backgroundColor: '#0579cb',
      tension: 0.4,
      pointRadius: 3,
    },
  ],
};

const Dashboard = () => {
  const currentDb = 60;
  return (
  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, minHeight: '85vh', backgroundColor: '#0c1018', pt: 8 }}>
   
      {/* drawer + sidenav */}
      <Drawer
        variant="permanent"
        sx={{
          width: 220,
          flexShrink: 0,
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            width: 220,
            boxSizing: 'border-box',
            bgcolor: '#0c1018',
            color: '#515360',
            borderRight: '1px solid #2c3140',
          },
        }}
      >
        <Divider />
        <List sx={{ mt: 7 }}>
          <ListItem button selected>
            <ListItemIcon sx={{ color: '#4e2a45' }}><BarChartIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button selected>
            <ListItemIcon sx={{ color: '#4e2a45' }}><InterpreterModeSharp /></ListItemIcon>
            <ListItemText primary="Interprenter" />
          </ListItem>
          <ListItem button selected>
            <ListItemIcon sx={{ color: '#4e2a45'}}><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem sx={{ mt: 3 }} button selected>
            <ListItemIcon sx={{ color: '#fafafa' }} ><LogoutIcon /></ListItemIcon>
            <ListItemText primary="Log out" />
             </ListItem>
        </List>
      </Drawer>

      {/* main content */}
  <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 0, m: 0 }}>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 3,
          mb: 5,
          backgroundColor: '#0d323441',
          p: { xs: 2, sm: 3 },
          borderRadius: 2
        }}>

         {/* box 1-4 */}
          <Paper sx={{ flex: 1, p: { xs: 2, sm: 3 }, borderRadius: 3, background: 'linear-gradient(135deg, #7702757f 10%, #054249 90%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 110, minWidth: 0 }}>
            <Typography variant="subtitle2" color="#fff" fontWeight={500} mb={1}>Current dB</Typography>
            <Typography variant="h3" color="#fff" fontWeight={700}>{currentDb}</Typography>
          </Paper>

          
          <Paper sx={{ flex: 1, p: { xs: 2, sm: 3 }, borderRadius: 3, backgroundColor: '#151b22', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 110, minWidth: 0 }}>
            <Typography variant="subtitle2" color="#b2bec3" fontWeight={500} mb={1}>Box 2</Typography>
            <Typography variant="h5" color="#fff" fontWeight={700}>-</Typography>
          </Paper>

          <Paper sx={{ flex: 1, p: { xs: 2, sm: 3 }, borderRadius: 3, backgroundColor: '#151b22', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 110, minWidth: 0 }}>
            <Typography variant="subtitle2" color="#b2bec3" fontWeight={500} mb={1}>Box 3</Typography>
            <Typography variant="h5" color="#fff" fontWeight={500}>-</Typography>
          </Paper>

          <Paper sx={{ flex: 1, p: { xs: 2, sm: 3 }, borderRadius: 3, backgroundColor: '#151b22', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 110, minWidth: 0 }}>
            <Typography variant="subtitle2" color="#b2bec3" fontWeight={500} mb={1}>Box 4</Typography>
            <Typography variant="h5" color="#fff" fontWeight={500}>-</Typography>
          </Paper>
        </Box>


        {/* Chart full width */}
        <Box sx={{
          backgroundColor: '#2c162c77',
          p: { xs: 1.5, sm: 3 },
          borderRadius: 2,
          minHeight: 400,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyItems: 'center',
          justifyContent: 'space-between',
          alignItems: 'stretch',
          gap: 3
        }}>
          <Paper elevation={4} sx={{
            borderRadius: 3,
            backgroundColor: '#151b22',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 250,
            p: { xs: 0, sm: 4 },
             width: { xs: '100%', md: '100%' },
            mb: { xs: 2, md: 0 }
          }}>
            <Typography variant="h5" fontWeight={500} color="#fafafa" mb={3} align="center">
              Audio Analytics
            </Typography>
            <Box sx={{ minWidth: { xs: 0, sm: 300, md: 500 }, maxWidth: 1200, height: { xs: 180, sm: 220, md: 260 }, width: '100%' }}>
              <Line data={data} options={options} />
            </Box>
          </Paper>

          <Paper elevation={4} sx={{
            borderRadius: 3,
            backgroundColor: '#151b22',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            justifyContent: 'center',
            minHeight: 150,
             width: {  md: '35%' },
            p: { xs: 0, sm: 4 }
          }}>
            <Typography variant="h5" fontWeight={500} color="#ffffff" mb={2} align="center">
              Calendar
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
