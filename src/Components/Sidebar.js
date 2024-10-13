import React, { useState } from 'react';
import { Box, Button, InputBase, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Card, CardContent, Typography, Avatar, Badge } from '@mui/material';
import {  FormControl, InputLabel, Select, MenuItem, IconButton } from '@mui/material';
//import {  Menu, MenuItem, IconButton } from '@mui/material';
//import ArrowImage from '../images/Arrow.png';
//import './styles.css'; 
const Sidebar = () => {


  
  
  const cardData = [
    { name: "Zunaira Butt", avatar: "ZB", time: "11:00 AM", message: "Incoming", type: "call" },
    { name: "Asad Najam", avatar: "AN", time: "11:00 AM", message: "Are You available for meeting?", type: "message", badge: 3 },
    { name: "Kamran Masood", avatar: "KM", time: "11:00 AM", message: "Outcoming", type: "call" },
    { name: "Kim Williamson", avatar: "KW", time: "11:00 AM", message: "Missed", type: "call" },
    { name: "Hezelwood", avatar: "H", time: "11:00 AM", message: "Are You available for meeting?", type: "message", badge: 3 },
    { name: "Brown", avatar: "B", time: "11:00 AM", message: "Are You available for meeting?", type: "message", badge: 3 },
  ];
  const [selectedNumber, setSelectedNumber] = useState('');

  const handleChange = (event) => {
    setSelectedNumber(event.target.value);
  };



  return (


    <Box
      sx={{
        width: "424px",
        height: '1024px',
        backgroundColor: '#f0f0f0',
        padding: 2,
        boxShadow: 1,
        display: 'flex',
        flexDirection: 'column',
       
      }}
    >

<Box sx={{ width: '168px', height:"35px",py:"10px",mb: 7, mt: 2  }}>
      <FormControl fullWidth>
        <InputLabel id="dropdown-label" sx={{            color: '#fff',
}}>All Number</InputLabel>
        <Select
          labelId="dropdown-label"
          id="dropdown"
          value={selectedNumber}
          onChange={handleChange}
          IconComponent={() => (
            <IconButton>
<img src="/images/Arrow.png" alt="Dropdown Icon" style={{ width: '24px', height: '24px' }} />
</IconButton>
          )}
          sx={{
            background: 'linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)',
            color: '#fff',
            borderRadius: '30px',
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
            <MenuItem key={number} value={number}>
              {number}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box> 
            

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#ffff',
          padding: '0.5rem',
          borderRadius: '50px',
          width: '400px',

        }}
      >
        <SearchIcon />
        <InputBase
          placeholder="Search chat"
          sx={{ ml: 1, flex: 1 }}
        />
      </Box>


      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, py: 3 }}>

        <Button
          
          sx={{ flexBasis: '25%', mr: 1, borderRadius: '20px',            background: 'linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)',
            color: '#fff',

          }}
        >
          All
        </Button>


        <Button
          variant="outlined"
          sx={{
            flexBasis: '35%',
           
            border: '1px solid  #4F70F6', 
           
            borderRadius: '20px',
            ml: 1,
            mr: 1,
            color:"#8B8B8B",
          }}
        >
          Scheduled
        </Button>


        <Button
          variant="outlined"
          sx={{
            flexBasis: '35%',
            border: '1px solid #C535C8', 
           
            color:"#8B8B8B",

            borderRadius: '20px',
           
            ml: 1,
          }}
        >
          Broadcast
        </Button>
      </Box>
      <Divider />

     
      <div>
      {cardData.map((item, index) => (
        <Box className="box-container" key={index}>
          <Card className="card-container">
            <Avatar className="avatar-style" alt={item.name}>
              {item.avatar}
            </Avatar>
            <CardContent className="card-content-style">
              <Box className="card-content-header">
                <Typography variant="subtitle2" component="div" className="card-content-title" sx={{fontWeight:"bold",}}>
                  {item.name}
                </Typography>
                <Typography variant="caption" className="card-content-time">
                  {item.time}
                </Typography>
              </Box>
              <Box className="card-content-body">
                <Typography variant="body2" color="text.secondary" className="card-body-text">
                  {item.type === "call" ? (
                    <img src="/images/phone-call.png" alt="Call Type" className="card-body-icon" />
                  ) : null}
                  {item.message}
                </Typography>
                {item.type === "message" && item.badge ? (
                  <Badge badgeContent={item.badge} className="badge-style" classes={{ badge: 'badge-badge' }} />
                ) : (
                  <img src="/images/call.png" alt="Call Icon" className="call-icon" />
                )}
              </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </div>

    </Box>
  );
};

export default Sidebar;
