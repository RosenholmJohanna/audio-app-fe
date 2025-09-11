import React from "react";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import Box from '@mui/material/Box';

const View = () => (
  <Box >
    <TopBar />
    <Box sx={{ width: '90vw' }}>
      <Dashboard />
    </Box>
  </Box>
);

export default View;
