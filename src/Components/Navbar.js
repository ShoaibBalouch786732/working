import React from 'react';
import { Box, IconButton, AppBar, Toolbar, Typography, Avatar } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import CallIcon from '@mui/icons-material/Call';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'; // Question mark icon
import SettingsIcon from '@mui/icons-material/Settings'; // Settings icon

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: 'none', height: '100px', border: 'none' }} className="Navbar">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>


        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '424px',
            padding: '8px',
            justifyContent: 'flex-end',
          }}
        >
          <IconButton color="primary">
            <MessageIcon />
          </IconButton>
          <IconButton color="primary">
            <CallIcon />
          </IconButton>
        </Box>


        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '645px',
            height: '100px',
            padding: '8px',
            justifyContent: 'space-between',
            borderLeft: '1px solid #ccc',
            borderBottom: '1px solid #ccc',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              src="/images/image 1.png"

              sx={{ width: 55, height: 55, marginRight: 2 }}
            />
            <Box>
              <Typography variant="body2" color="text.secondary">
                <span className='color-black' style={{ display: 'block', fontWeight: 'bold' }}>Mishal Irfan</span>
                <span style={{ display: 'block',color: '#ABABAB' }}>last seen at 5:56 Pm</span>
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex' }}>
            <IconButton color="primary">
              <CallIcon />
            </IconButton>
            <IconButton color="primary">
              <MoreVertIcon />
            </IconButton>
          </Box>
        </Box>



        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '300px',
            height: '100px',
            padding: '8px',
            justifyContent: 'flex-end',
            borderLeft: '1px solid #ccc',
            borderBottom: '1px solid #ccc',
          }}
        >
          <IconButton color="primary">
            <HelpOutlineIcon />
          </IconButton>
          <IconButton color="primary">
            <SettingsIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
