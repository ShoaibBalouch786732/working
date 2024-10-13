import React from 'react';
import { Box, Typography, Avatar, Divider, Button, IconButton, InputBase } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';



const Contact = () => {

  const contacts = [
    { name: 'Alice', number: '234345455' },
    { name: 'Alice', number: '234345455' },
    { name: 'Bob', number: '234345456' },
    { name: 'Bob', number: '234345456' },
    { name: 'Charlie', number: '234345457' },
    { name: 'Charlie', number: '234345457' },
    { name: 'Della', number: '234345455' },
    // { name: 'Euro', number: '234345456' },
    // { name: 'Farlie', number: '234345457' },
    // Add more contacts as needed
  ];

  const letters = Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 65));

  return (
    <Box
      sx={{
        width: "300px",
        height: '100%',
        backgroundColor: '#ffff',
        // padding: 2,
        display: 'flex',
        flexDirection: 'column',
        borderLeft: '1px solid #ccc',
      }}
    >

      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2, padding: 2,}}>
        <IconButton color="primary">
          <ContactsIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Contacts
        </Typography>
        <IconButton color="primary">
          <AddIcon /> 
        </IconButton>
      </Box>

      <div style={{ padding: '10px' }}>
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#ffff',
      padding: '0.5rem',
      borderRadius: '50px',
      border: '1px solid #ccc',
     
    }}
  >
    <SearchIcon />
    <InputBase
      placeholder="Search chat"
      sx={{ ml: 1, flex: 1 }}
    />
  </Box>
</div>

      <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1,  padding: 2, }}>

        <Box sx={{ flexGrow: 1, padding: '6px' }}>
          {contacts.reduce((acc, contact, index) => {
            const firstLetter = contact.name.charAt(0).toUpperCase();


            if (!acc.includes(firstLetter)) {
              acc.push(firstLetter);
            }

            return acc;
          }, []).map((letter, letterIndex) => (
            <Box key={letterIndex} sx={{ marginBottom: 2 }}>
              <Typography variant="body1" sx={{ padding: '8px 8px 8px 16px', color: '#ABABAB'}}>
                {letter}
              </Typography>
              {contacts.filter(contact => contact.name.charAt(0).toUpperCase() === letter).map((contact, contactIndex) => (
                <Box key={contactIndex} sx={{ display: 'flex', alignItems: 'center', }}>
                  <Avatar alt={contact.name} src="/path/to/avatar.jpg"
                    sx={{
                      bgcolor: 'white',
                      color: 'black',
                      fontWeight: 'bold',
                      border: '1px solid #CA32C6 ',


                      borderImageSlice: 1,
                      borderRadius: '50%',
                      width: "39px",
                      height: "38px",

                    }}>
                    {contact.name.charAt(0).toUpperCase()}
                  </Avatar>
                  <Box sx={{ marginLeft: 1 }}>
                    <Typography variant="body1">{contact.name}</Typography>
                    <Typography variant="body2" color="textSecondary">{contact.number}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          ))}
        </Box>

        {/* Vertical A-Z Letters */}
        <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: 2 }}>
          {letters.map((letter) => (
            <Typography key={letter} variant="body2" sx={{ color: 'blue', marginBottom: 1, fontSize: '8px' }}>
              {letter}
            </Typography>
          ))}
        </Box>
      </Box>


      <Divider sx={{ marginY: 2 }} />


      <Button

        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          color: 'black',
          borderTop: '1px solid black',
          borderBottom: '1px solid black',
          borderLeft: 'none',
          borderRight: 'none',
          borderRadius: '0px',
          height: '70px',
          width: '100%',
          padding: '0px',
          paddingLeft: '20px',
          fontWeight: 'bold',

        }}
        endIcon={
          <Box
          sx={{
            backgroundColor: 'white',
            color: 'brown',
            borderRadius: '50%',
            padding: '5px',
          }}
        >
          <img
            src="/images/vector.png"
            alt="Dropdown"
            style={{ width: '20px', height: '20px' }} // Adjust size as needed
          />
        </Box>
        }
      >
        Recent
      </Button>

      <Button

        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          color: 'black',
          borderTop: '1px solid black',
          borderBottom: '1px solid black',
          borderLeft: 'none',
          borderRight: 'none',
          borderRadius: '0px',
          height: '70px',
          width: '100%',
          padding: '0px',
          paddingLeft: '20px',
          fontWeight: 'bold',
        }}
        endIcon={
          <Box
          sx={{
            backgroundColor: 'white',
            color: 'brown',
            borderRadius: '50%',
            padding: '5px',
          }}
        >
          <img
            src="/images/vector.png"
            alt="Dropdown"
            style={{ width: '20px', height: '20px' }} 
          />
        </Box>
        }
      >
        Favourites
      </Button>
    </Box>

  );
};

export default Contact;
