import React from "react";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import Box from '@mui/material/Box';

const View = () => (
  <Box sx={{ width: '90vw'}}>
    <TopBar />
    <Box sx={{ }}>
      <Dashboard />
    </Box>
  </Box>
);

export default View;
