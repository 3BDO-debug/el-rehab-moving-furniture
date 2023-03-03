// material
import { Box } from '@mui/material';
import RequestFreeQuote from 'src/sections/common/RequestFreeQuote';
import AboutUs from 'src/sections/homePage/AboutUs';
//
import Hero from 'src/sections/homePage/Hero';
import Services from 'src/sections/homePage/Services';

// ---------------------------------------------------------------------------------------------

export default function HomePage() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Hero />
      <AboutUs />
      <Services />
      <RequestFreeQuote />
    </Box>
  );
}
