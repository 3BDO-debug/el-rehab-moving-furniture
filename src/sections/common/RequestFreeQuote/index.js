import React from 'react';
// material
import { Box, Container, Grid, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
// components
import RequestFreeQuoteForm from './RequestFreeQuoteForm';
import { MotionViewport, TextAnimate } from 'src/components/animate';

// --------------------------------------------------------------------------------

function RequestFreeQuote() {
  return (
    <Box id="contact-us">
      <MotionViewport>
        <Box
          sx={{
            background:
              'linear-gradient(to left, rgba(22, 28, 36, 0) 0%, rgba(22, 28, 36, 1) 50%),url(/images/free-quote.jpg)',
          }}
        >
          <Container sx={{ paddingTop: 10, paddingBottom: 10 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      background: 'linear-gradient(45deg, #F7CA18, #00AB55)',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      WebkitBackgroundClip: 'text',
                    }}
                    variant="h2"
                    color="primary"
                  >
                    اسالنا عن الاسعار
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: 'white',
                      marginTop: 10,
                      justifyContent: {
                        xs: 'center',
                        md: 'flex-start',
                      },
                    }}
                  >
                    <MailOutlineIcon sx={{ marginRight: 2 }} color="inherit" />
                    <Typography>elrehab@gmail.com</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: 'white',
                      marginTop: 2,
                      justifyContent: {
                        xs: 'center',
                        md: 'flex-start',
                      },
                    }}
                  >
                    <StayCurrentPortraitIcon sx={{ marginRight: 2 }} color="inherit" />
                    <Typography>0855 401 111 ( 20 + ) </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <RequestFreeQuoteForm />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </MotionViewport>
    </Box>
  );
}

export default RequestFreeQuote;
