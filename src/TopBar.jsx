import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import StarIcon from '@mui/icons-material/Star';

const TopBar = () => {
  const [dark, setDark] = React.useState(true);
  const handleThemeToggle = () => setDark((d) => !d);
  
  const subscription = 'Pro';

  return (
    <Box sx={{
      width: '99vw',
      height: 45,
      bgcolor: dark ? '#0c1018' : '#0c101836',
      color: dark ? '#7d3c85' : '#151b22',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      px: 1.3,
      boxShadow: 2,
      zIndex: 1201,
      position: 'fixed',
      top: 0,
      left: 0,
      borderBottom: dark ? '1px solid #4e2a45' : '1px solid #fbfaf7',
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <HeadphonesIcon sx={{ fontSize: 26, color: dark ? '#f6f5f79d' : '#3189e877' }} />
        <Typography variant="h6" fontWeight={500} color={dark ? '#f6f5f79d' : '#3189e877'} sx={{ letterSpacing: 1 }}>
          dB App
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, bgcolor: dark ? '#392435d7' : '#275ef48d', px: 2, py: 0.5, borderRadius: 2 }}>
          <StarIcon sx={{ color: '#bcbcbc', fontSize: 16 }} />
          <Typography variant="primary" fontWeight={500} color={dark ? '#b7b6b7' : '#dee2e7'}>
            {subscription} user
          </Typography>
        </Box>
        <IconButton onClick={handleThemeToggle} sx={{ color: dark ? '#a298a3' : '#5b7a9e',  }}>
          {dark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
