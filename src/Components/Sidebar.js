import React, { useState } from 'react';
import { Box, Button, InputBase, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Card, CardContent, Typography, Avatar, Badge } from '@mui/material';


const Sidebar = () => {


  const [selectedNumber, setSelectedNumber] = useState('');

  const handleSelect = (eventKey) => {
    setSelectedNumber(eventKey);
  };
  // Chat list array
  // const chatList = [
  //   {
  //     name: "John Doe",
  //     message: "Hey! I wanted to discuss the project with you.",
  //     time: "10:30 AM",
  //     avatar: "JD",
  //     badge: 2,
  //   },
  //   {
  //     name: "Jane Smith",
  //     message: "Sure, let's schedule a meeting. FGHFH ",
  //     avatar: "JM",
  //     time: "11:00 AM", 
  //     badge: 3,
  //   },
  //   {
  //     name: "Jane Smith",
  //     message: "Sure, let's schedule a meeting. FGHFH ",
  //     avatar: "JM",
  //     time: "11:00 AM", 
  //     badge: 3,
  //   },
  // Add more chat objects here
  //];

  return (


    <Box
      sx={{
        width: "424px",
        height: '100%',
        backgroundColor: '#f0f0f0',
        padding: 2,
        boxShadow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >



      <DropdownButton
        id="dropdown-basic-button "
        title={`All Numbers      ${selectedNumber}`}
        variant="primary"
        className="py-4"
        style={{ borderRadius: '30px', width: '50px' }}
      >

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
          <Dropdown.Item
            key={number}
            eventKey={number}
            onSelect={handleSelect}
          >
            {number}
          </Dropdown.Item>
        ))}
      </DropdownButton>

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
          variant="contained"
          color="secondary"
          sx={{ flexBasis: '25%', mr: 1, borderRadius: '20px' }}
        >
          All
        </Button>


        <Button
          variant="outlined"
          sx={{
            flexBasis: '35%',
            borderRadius: '20px',
            borderColor: 'primary.main',
            ml: 1,
            mr: 1,
          }}
        >
          Scheduled
        </Button>


        <Button
          variant="outlined"
          sx={{
            flexBasis: '35%',
            borderRadius: '20px',
            borderColor: 'primary.main',
            ml: 1,
          }}
        >
          Broadcast
        </Button>
      </Box>
      <Divider />


      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
          py: "6px",
        }}
      >
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: 2,
            Width: '352px',
            height: '70px',
            borderRadius: '10px',
          }}
        >

          <Avatar
            sx={{
              width: 40, height: 40, mr: 2, bgcolor: '#D92CC1',
              color: 'white',
              fontWeight: 'bold'
            }}
            alt="Jane Smith"
          >
            JM
          </Avatar>


          <CardContent sx={{ flexGrow: 1, padding: 0 }}>

            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              pt: 4
            }}>
              <Typography variant="subtitle2" component="div" sx={{ fontWeight: 'bold' }}>
                Jane Smith
              </Typography>
              <Typography variant="caption" sx={{ color: 'gray' }}>
                11:00 AM
              </Typography>
            </Box>


            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Sure, let's schedule a meeting. FGHFH
              </Typography>
              <Badge
                badgeContent={3}
                color="primary"
                sx={{ marginLeft: 2, width: '20px', heigth: "20px" }}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
          py: "6px",
        }}
      >
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: 2,
            Width: '352px',
            height: '70px',
            borderRadius: '10px',
          }}
        >
          {/* Left Side Avatar */}
          <Avatar
            sx={{
              width: 40, height: 40, mr: 2, bgcolor: '#D92CC1', // Set background color
              color: 'white', // Set text color to white
              fontWeight: 'bold'
            }} // Avatar with margin to the right
            alt="Jane Smith"
          >
            JM
          </Avatar>

          {/* Right Side Content */}
          <CardContent sx={{ flexGrow: 1, padding: 0 }}> {/* Remove padding for tight fit */}
            {/* Name and Time */}
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              pt: 4 // Adds padding at the top
            }}>
              <Typography variant="subtitle2" component="div" sx={{ fontWeight: 'bold' }}>
                Jane Smith
              </Typography>
              <Typography variant="caption" sx={{ color: 'gray' }}>
                11:00 AM
              </Typography>
            </Box>

            {/* Message and Badge */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Sure, let's schedule a meeting. FGHFH
              </Typography>
              <Badge
                badgeContent={3}
                color="primary"
                sx={{ marginLeft: 2, width: '20px', heigth: "20px" }}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
          py: "6px",
        }}
      >
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: 2,
            Width: '352px',
            height: '70px',
            borderRadius: '10px',
          }}
        >

          <Avatar
            sx={{
              width: 40, height: 40, mr: 2, bgcolor: '#D92CC1',
              color: 'white',
              fontWeight: 'bold'
            }}
            alt="Jane Smith"
          >
            JM
          </Avatar>


          <CardContent sx={{ flexGrow: 1, padding: 0 }}>

            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              pt: 4
            }}>
              <Typography variant="subtitle2" component="div" sx={{ fontWeight: 'bold' }}>
                Jane Smith
              </Typography>
              <Typography variant="caption" sx={{ color: 'gray' }}>
                11:00 AM
              </Typography>
            </Box>


            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Sure, let's schedule a meeting. FGHFH
              </Typography>
              <Badge
                badgeContent={3}
                color="primary"
                sx={{ marginLeft: 2, width: '20px', heigth: "20px" }}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
          py: "6px",
        }}
      >
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: 2,
            Width: '352px',
            height: '70px',
            borderRadius: '10px',
          }}
        >

          <Avatar
            sx={{
              width: 40, height: 40, mr: 2, bgcolor: '#D92CC1',
              color: 'white',
              fontWeight: 'bold'
            }}
            alt="Jane Smith"
          >
            JM
          </Avatar>


          <CardContent sx={{ flexGrow: 1, padding: 0 }}>

            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              pt: 4
            }}>
              <Typography variant="subtitle2" component="div" sx={{ fontWeight: 'bold' }}>
                Jane Smith
              </Typography>
              <Typography variant="caption" sx={{ color: 'gray' }}>
                11:00 AM
              </Typography>
            </Box>


            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Sure, let's schedule a meeting. FGHFH
              </Typography>
              <Badge
                badgeContent={3}
                color="primary"
                sx={{ marginLeft: 2, width: '20px', heigth: "20px" }}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
          py: "6px",
        }}
      >
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: 2,
            Width: '352px',
            height: '70px',
            borderRadius: '10px',
          }}
        >

          <Avatar
            sx={{
              width: 40, height: 40, mr: 2, bgcolor: '#D92CC1',
              color: 'white',
              fontWeight: 'bold'
            }}
            alt="Jane Smith"
          >
            JM
          </Avatar>


          <CardContent sx={{ flexGrow: 1, padding: 0 }}>

            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              pt: 4
            }}>
              <Typography variant="subtitle2" component="div" sx={{ fontWeight: 'bold' }}>
                Jane Smith
              </Typography>
              <Typography variant="caption" sx={{ color: 'gray' }}>
                11:00 AM
              </Typography>
            </Box>


            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Sure, let's schedule a meeting. FGHFH
              </Typography>
              <Badge
                badgeContent={3}
                color="primary"
                sx={{ marginLeft: 2, width: '20px', heigth: "20px" }}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>


      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
        }}
      >
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: 2,
            Width: '352px',
            height: '70px',
            borderRadius: '10px',
          }}
        >

          <Avatar
            sx={{
              width: 40, height: 40, mr: 2, bgcolor: '#D92CC1',
              color: 'white',
              fontWeight: 'bold'
            }}
            alt="Jane Smith"
          >
            JM
          </Avatar>


          <CardContent sx={{ flexGrow: 1, padding: 0 }}>

            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              pt: 4
            }}>
              <Typography variant="subtitle2" component="div" sx={{ fontWeight: 'bold' }}>
                Jane Smith
              </Typography>
              <Typography variant="caption" sx={{ color: 'gray' }}>
                11:00 AM
              </Typography>
            </Box>


            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Sure, let's schedule a meeting. FGHFH
              </Typography>
              <Badge
                badgeContent={3}
                color="primary"
                sx={{ marginLeft: 2, width: '20px', heigth: "20px" }}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
          py: "6px",
        }}
      >
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: 2,
            Width: '352px',
            height: '70px',
            borderRadius: '10px',
          }}
        >

          <Avatar
            sx={{
              width: 40, height: 40, mr: 2, bgcolor: '#D92CC1',
              color: 'white',
              fontWeight: 'bold'
            }}
            alt="Jane Smith"
          >
            JM
          </Avatar>


          <CardContent sx={{ flexGrow: 1, padding: 0 }}>

            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              pt: 4
            }}>
              <Typography variant="subtitle2" component="div" sx={{ fontWeight: 'bold' }}>
                Jane Smith
              </Typography>
              <Typography variant="caption" sx={{ color: 'gray' }}>
                11:00 AM
              </Typography>
            </Box>


            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Sure, let's schedule a meeting. FGHFH
              </Typography>
              <Badge
                badgeContent={3}
                color="primary"
                sx={{ marginLeft: 2, width: '20px', heigth: "20px" }}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Sidebar;
