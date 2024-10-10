import React, { useState } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Popover,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Picker } from 'emoji-mart';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSend = () => {
    if (input.trim() !== '') {
      const newMessage = {
        text: input,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        seen: false,
      };

      setMessages([...messages, newMessage]);
      setInput('');


      setTimeout(() => {
        setMessages((prevMessages) => {
          const updatedMessages = prevMessages.map((msg) =>
            msg.sender === 'user' && !msg.seen ? { ...msg, seen: true } : msg
          );

          return [
            ...updatedMessages,
            {
              text: `Bot: ${input}`,
              sender: 'bot',
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              seen: true,
            },
          ];
        });
      }, 1000);
    }
  };

  const handleEmojiSelect = (emoji) => {
    setInput((prev) => prev + emoji.native);
    setAnchorEl(null);
  };

  return (
    <Box className="Chatbot" sx={{ display: 'flex', flexDirection: 'column', height: '800px', width: '611px', margin: 'none', borderLeft: '1px solid #ccc', }}>
      <AppBar position="static" sx={{ backgroundColor: '#ffff', boxShadow: 'none' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography sx={{ textAlign: 'center', color: '#ABABAB' }}>Today 12:34 PM</Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ flexGrow: 1, overflowY: 'auto', padding: 2 }}>
        <List>
          {messages.map((msg, index) => (
            <ListItem
              key={index}
              sx={{

                justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                paddingBottom: '15px',
                backgroundColor: msg.reply === true ? 'transparent' : '#E9EFF4',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <ListItemText
                  primary={
                    <Box
                      sx={{
                        bgcolor: msg.sender === 'user' ? (msg.reply ? '#E9EFF4' : '#D92CC1') : '#fff',
                        borderRadius: '20px',
                        padding: '8px',
                        Width: '100px',
                        display: 'flex',
                        flexDirection: 'column',
                        color: msg.sender === 'user' && msg.reply ? 'black' : 'inherit',
                      }}
                    >
                      <Typography>{msg.text}</Typography>
                      <Typography variant="caption" color="textSecondary" sx={{ marginTop: '2px', display: 'flex', justifyContent: 'flex-end', }}>
                        {msg.timestamp}
                      </Typography>
                    </Box>
                  }
                />
                {msg.sender === 'user' && msg.seen && (
                  <DoneAllIcon sx={{ fontSize: '12px', color: '#4fc3f7', marginTop: '2px' }} />
                )}
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>



      <Box sx={{ padding: 2, display: 'flex', alignItems: 'center' }}>
        <IconButton color="primary" onClick={() => alert('File Manager feature not implemented yet')}>
          <AttachFileIcon />
        </IconButton>
        <IconButton color="primary">
          <CalendarTodayIcon />
        </IconButton>

        <TextField
          variant="outlined"
          fullWidth
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          sx={{
            bgcolor: '#F0F2F5',
            borderRadius: '20px',
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }}
        />
        <IconButton color="primary" onClick={(e) => setAnchorEl(e.currentTarget)}>
          <EmojiEmotionsIcon />
        </IconButton>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Picker onSelect={handleEmojiSelect} />
        </Popover>
        <IconButton color="primary">
          <MicIcon />
        </IconButton>
        <IconButton color="primary" onClick={handleSend}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Chatbot;
