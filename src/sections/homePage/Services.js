import React from 'react';
import { m } from 'framer-motion';
// material
import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
// components
import SectionWrapper from 'src/components/SectionWrapper';
import GradientIconButton from 'src/components/GradientIconButton';
import { MotionViewport, TextAnimate, varFade } from 'src/components/animate';

// -------------------------------------------------------------------------------------------------------------------

const ServiceCard = ({ title, description, imagePath, elevation }) => {
  return (
    <Paper elevation={elevation} square={false}>
      <Box padding="64px 20px 64px 20px">
        <Stack sx={{ flex: 1, textAlign: 'center' }} justifyContent="center" alignItems="center">
          <Box sx={{ width: '100px', height: 'auto' }} component="img" src={imagePath} />
          <Typography variant="subtitle2" color="text.primary" sx={{ marginTop: 6 }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 2, width: '80%' }}>
            {description}
          </Typography>
          <Box marginTop="40px">
            <GradientIconButton
              icon={<ArrowRightAltIcon sx={{ transform: 'rotate(180deg)' }} />}
              startColor="#007b3d"
              endColor="#2ecc71"
            />
          </Box>
        </Stack>
      </Box>
    </Paper>
  );
};

// -------------------------------------------------------------------------------------------------------------------

function Services() {
  return (
    <Box id="services" sx={{ paddingBottom: 10 }}>
      <MotionViewport>
        <SectionWrapper>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="overline" color="text.secondary">
                خدماتنا
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h2">الخدامات الي بنقدمها</Typography>
            </Grid>
            <Grid item xs={12} marginTop={6}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <m.div variants={varFade().inLeft}>
                    <ServiceCard
                      title="نقل الموبيليات"
                      description="نقل الموبيليات والبضائع لجميع الجهات"
                      imagePath="/icons/furniture-moving.png"
                      elevation={2}
                    />
                  </m.div>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <m.div variants={varFade().inUp}>
                    <ServiceCard
                      title="نقل البضانئع"
                      description="نقل داخلي للبضائع وجميع المحافظات"
                      imagePath="/icons/goods-transport.png"
                      elevation={8}
                    />
                  </m.div>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <m.div variants={varFade().inDown}>
                    <ServiceCard
                      title="تغليف الاثاث"
                      description="متخصصون في تغليف ونقل الأثاث"
                      imagePath="/icons/packaging.png"
                      elevation={24}
                    />
                  </m.div>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <m.div variants={varFade().inRight}>
                    <ServiceCard
                      title="رفع بالاوناش"
                      description="اوناش هيدروليك لرفع الاثاث"
                      imagePath="/icons/hoist.png"
                      elevation={2}
                    />
                  </m.div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </SectionWrapper>
      </MotionViewport>
    </Box>
  );
}

export default Services;
