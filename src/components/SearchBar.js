import React from 'react';
// material
import { IconButton, InputBase, Paper, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// ------------------------------------------------------------------------------------------------------------------------

function SearchBar() {
  const theme = useTheme();

  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 750,
        '&:hover': {
          transform: 'scale(1.1)',
        },
        transition: theme.transitions.create(['transform'], {
          easing: theme.transitions.easing.easeInOut,
          duration: '0.6s',
        }),
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Products"
        inputProps={{ 'aria-label': 'search products' }}
      />
      <IconButton
        type="button"
        sx={{
          p: '10px',
        }}
        aria-label="search"
        color="primary"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
