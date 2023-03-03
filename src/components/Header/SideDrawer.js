import React from 'react';
import { useRouter } from 'next/router';
import { Link as ScrollLink, animateScroll } from 'react-scroll';
// material
import { Box, Button, Drawer, List, ListItemButton, ListItemText, Stack, styled } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import KingBedIcon from '@mui/icons-material/KingBed';
// theme
import palette from 'src/theme/palette';
// atoms
import Logo from '../Logo';
import Label from '../Label';

// ------------------------------------------------------------------------------------------

const DrawerLinkText = styled(ScrollLink)(({ theme }) => ({
  ...theme.typography.subtitle1,
}));

// ------------------------------------------------------------------------------------------

function SideDrawer({ isTriggered, closeHandler, headerLinks }) {
  const { pathname, push } = useRouter();

  return (
    <>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: palette.dark.background.default,
          },
        }}
        open={isTriggered}
        onClose={closeHandler}
        elevation={14}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {/* Logo wrapper */}
          <Box
            onClick={() => {
              push('/');
              closeHandler();
            }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              ml: 1,
            }}
          >
            <Logo />
            <Box onClick={() => window.open('https://www.basedontech.com', '__blank')}>
              <Label
                color="primary"
                sx={{
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
              >
                Powered by B.O.T
              </Label>
            </Box>
          </Box>

          {/* Nav links  */}
          <List sx={{ marginTop: 2 }}>
            {headerLinks.map((headerLink, index) => (
              <ListItemButton key={index}>
                <ListItemText>
                  <DrawerLinkText
                    onClick={() => {
                      closeHandler();
                    }}
                    to={headerLink.href}
                    spy={true}
                    smooth={true}
                    duration={500}
                    variant={pathname === headerLink.href ? 'gradientText' : 'inherit'}
                    sx={{ color: 'common.white', textTransform: 'capitalize' }}
                  >
                    {headerLink.title}
                  </DrawerLinkText>
                </ListItemText>
              </ListItemButton>
            ))}
          </List>
          {/* Action button */}
          <Stack paddingRight={2} marginTop={5} paddingLeft={2} alignItems="center" justifyContent="center">
            <Button sx={{ marginBottom: 2 }} fullWidth variant="contained" endIcon={<KingBedIcon />}>
              انقلي عفشي
            </Button>
            <Button
              endIcon={<WhatsAppIcon />}
              onClick={() => window.open('https://wa.me/201116691020')}
              fullWidth
              variant="outlined"
            >
              تواصل معانا
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}

export default SideDrawer;
