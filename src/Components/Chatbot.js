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
  Button,
} from '@mui/material';
//import SendIcon from '@mui/icons-material/Send';
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
    <Box className="Chatbot" sx={{ display: 'flex', flexDirection: 'column', height: '1025px', width: '611px', margin: 'none', borderLeft: '1px solid #ccc',borderRight: '1px solid #accc', }}>
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
                background: msg.sender === 'user'
                  ? 'linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)' 
                  : '#E9EFF4', 
                borderRadius: msg.sender === 'user'
                  ? '50px 50px 20px 50px' 
                  : '20px', 
                padding: '10px',
                fontsize:"15px",
                Width: msg.sender === 'user' ? '250px' : '369px', 
                minWidth: '149px',
                // height: '70px',
                // overflow:"hidden",
                wordWrap: 'break-word',
                color: msg.sender === 'user' ? '#ffff' : 'black', 
                fonstsize:"13px",
              }}
              >
                <Typography sx={{
                        color: msg.sender === 'user' ? '#ffff' : 'black',
                        fontFamily: 'Arial', 
                        fontSize: '18px',    
                        fontWeight: 400,     
                       
                      }}>
                  {msg.text}
                </Typography>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  sx={{
                    marginTop: '2px',
                    display: 'block',
                    textAlign: 'right', 
                    color: msg.sender === 'user' ? '#FFFFFF' : 'black',
                    fontsize:"8px",
 
                  }}
                >
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





      <Box sx={{ padding: 2, display: 'flex', alignItems: 'center' , border:"1px solid #ccc" }}>
        <IconButton color="primary" onClick={() => alert('File Manager feature not implemented yet')}>
          <AttachFileIcon />
        </IconButton>
        <IconButton color="primary">
          <CalendarTodayIcon />
        </IconButton>

        <TextField
          variant="outlined"
          fullWidth
          placeholder="Type a message"
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
        <Button
  onClick={handleSend}
  sx={{
    backgroundColor: 'transparent'
   
  }}
>
  <Box
    component="img"
    src="/images/Group 13.png"
    sx={{ width: 40, height: 40 }} 
  />
</Button>
      </Box>
    </Box>
  );
};

export default Chatbot;
