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
    <Box sx={{ display: 'flex' }}>
   
      {/* drawer + sidenav */}
      <Drawer
        variant="permanent"
        sx={{
          width: 220,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 220,
            boxSizing: 'border-box',
            bgcolor: '#0c1018',
            color: '#515360',
            borderRight: '1px solid #2c3140',
          },
        }}
       // PaperProps={{ elevation: 6 }}
      >
        <Divider sx={{ bgcolor: '#424755'}} />
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
        <Box sx={{ display: 'flex', gap: 3, mb: 6, backgroundColor: '#162b2c42', p:2, borderRadius:2 }}>

         {/* box 1-4 */}
          <Paper sx={{ flex: 1, p: 3, borderRadius: 3, background: 'linear-gradient(135deg, #7702757f 10%, #054249 90%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 120 }}>
            <Typography variant="subtitle2" color="#fff" fontWeight={500} mb={1}>Current dB</Typography>
            <Typography variant="h3" color="#fff" fontWeight={700}>{currentDb}</Typography>
          </Paper>

          
          <Paper sx={{ flex: 1, p: 3, borderRadius: 3, backgroundColor: '#151b22', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 120 }}>
            <Typography variant="subtitle2" color="#b2bec3" fontWeight={500} mb={1}>Box 2</Typography>
            <Typography variant="h5" color="#fff" fontWeight={700}>-</Typography>
          </Paper>

          <Paper sx={{ flex: 1, p: 3, borderRadius: 3, backgroundColor: '#151b22', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 120 }}>
            <Typography variant="subtitle2" color="#b2bec3" fontWeight={500} mb={1}>Box 3</Typography>
            <Typography variant="h5" color="#fff" fontWeight={500}>-</Typography>
          </Paper>

          <Paper sx={{ flex: 1, p: 3, borderRadius: 3, backgroundColor: '#151b22', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 120 }}>
            <Typography variant="subtitle2" color="#b2bec3" fontWeight={500} mb={1}>Box 4</Typography>
            <Typography variant="h5" color="#fff" fontWeight={500}>-</Typography>
          </Paper>
        </Box>


        {/* Chart full width */}
        <Box sx={{ backgroundColor: '#2c162c77', p: 3, borderRadius: 2, minHeight: 400, display: 'flex', justifyItems: 'center', justifyContent: 'space-between', alignItems: 'center', gap: 3 }}>
          <Paper elevation={4} sx={{ borderRadius: 3, backgroundColor: '#151b22', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 350, p: 4, width: '70%' }}>
            <Typography variant="h5" fontWeight={500} color="#fafafa" mb={5} align="center">
              Audio Analytics
            </Typography>
            <Box sx={{  minWidth: 500, maxWidth: 1200, height: 260 }}>
              <Line data={data} options={options} />
            </Box>
          </Paper>

           <Paper elevation={4} sx={{  borderRadius: 3, backgroundColor:'#151b22',  display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center', minHeight: 350, width: '35%', p:4 }}>
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
