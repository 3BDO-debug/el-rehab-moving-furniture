import React from 'react';
import { useSetRecoilState } from 'recoil';
// material
import { Box, Button, Typography, useTheme } from '@mui/material';
import KingBedIcon from '@mui/icons-material/KingBed';
// atoms
// components
import { MotionContainer, TextAnimate } from 'src/components/animate';

// -----------------------------------------------------------------------------

function Hero() {
  const theme = useTheme();

  return (
    <Box id="hero">
      <MotionContainer>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ overflowX: 'hidden' }}
        >
          <Box
            sx={{
              zIndex: 1,
              objectFit: 'cover',
              objectPosition: 'center',
              width: '100vw',
              height: '100vh',
              filter: 'brightness(0.2)',
            }}
            component="video"
            autoPlay
            loop
            muted
          >
            <Box component="source" src="/videos/hero-video.mp4" />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: {
                xs: '30%',
                lg: '300px',
              },
              zIndex: 2,
              width: '100%',
            }}
          >
            {/* Title wrapper */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  color: theme.palette.common.white,
                  zIndex: 100,
                }}
                variant="h1"
              >
                احنا نقدر ننقل عفشك في اسرع وقت
              </Typography>
              <Typography
                sx={{
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  color: theme.palette.common.white,
                  mt: 2,
                  background: 'linear-gradient(45deg, #00AB55 , #F7CA18)',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                }}
                variant="h1"
              >
                و احسن جودة
              </Typography>
            </Box>
            {/* Hero actions */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, flexWrap: 'wrap' }}>
              <Button endIcon={<KingBedIcon />} sx={{ mr: 2 }} variant="contained">
                انقلي عفشي
              </Button>
              <Button variant="outlined">تواصل معانا </Button>
            </Box>
          </Box>
        </Box>
      </MotionContainer>
    </Box>
  );
}

export default Hero;
