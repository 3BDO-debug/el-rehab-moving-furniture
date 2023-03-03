import React, { useState } from 'react';
// material
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Label from './Label';

// ---------------------------------------------------------------------------------------------------------

function ProductCard() {
  const theme = useTheme();

  const [hovered, setHovered] = useState(false);

  return (
    <Box
      sx={{ cursor: 'pointer', flexGrow: 1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(!hovered)}
    >
      <Card sx={{ display: 'flex', flexDirection: 'column' }}>
        <Label sx={{ width: '50px', position: 'relative', top: '20px', zIndex: 10, left: 200 }} color="info">
          New
        </Label>

        <CardMedia
          component="img"
          image="https://images.unsplash.com/photo-1571873735645-1ae72b963024?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          sx={{
            transform: hovered ? 'scale(1.1)' : 'scale(1)',
            transition: theme.transitions.create(['transform'], {
              easing: theme.transitions.easing.easeInOut,
              duration: '0.9s',
            }),
            zIndex: 1,
            mt: -3,
          }}
        />

        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h4">Champ Product 1</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                It is a long established fact that a reader will be distracted by the readable content of a page
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions sx={{ px: 2 }}>
          <Typography sx={{ width: '100%' }} variant="h6">
            250 L.E
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
            <IconButton sx={{ color: '#ED1C24' }}>
              <FavoriteIcon />
            </IconButton>
            <IconButton>
              <AddShoppingCartIcon />
            </IconButton>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
}

export default ProductCard;
