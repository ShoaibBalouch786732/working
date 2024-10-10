import React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Avatar } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ChatbotNavbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: 'none', height: '100px' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            alt="Chatbot Avatar"
            src="https://via.placeholder.com/50"
            sx={{ width: 50, height: 50, marginRight: 2 }}
          />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Chatbot Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Online
            </Typography>
          </Box>
        </Box>


        <Box>
          <IconButton color="primary" sx={{ marginRight: 1 }}>
            <CallIcon />
          </IconButton>
          <IconButton color="primary">
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default ChatbotNavbar;
