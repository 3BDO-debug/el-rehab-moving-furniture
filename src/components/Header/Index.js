import React, { useState } from 'react';
import Router, { useRouter } from 'next/router';
import { m } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
// material
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Avatar, Box, Button, Container, IconButton, Link, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
import useSettings from 'src/hooks/useSettings';
// utils
import cssStyles from '../../utils/cssStyles';
import Logo from '../Logo';
import SideDrawer from './SideDrawer';
import Iconify from '../Iconify';

// ----------------------------------------------------------------------

const HEADER = {
  MOBILE_HEIGHT: 80,
  MAIN_DESKTOP_HEIGHT: 150,
};

// ----------------------------------------------------------------------

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('md')]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));

const HeaderLink = styled(ScrollLink)(({ theme }) => ({
  marginRight: theme.spacing(3),
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

// ----------------------------------------------------------------------
function Header() {
  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);
  const theme = useTheme();
  const { pathname, push } = useRouter();
  const [hoveredLink, setHoveredLink] = useState(null);
  const { themeMode, onChangeMode, onChangeDirection } = useSettings();
  const [drawerIsTriggered, triggerDrawer] = useState(false);

  const headerLinks = [
    { title: 'الرئيسية', href: 'hero' },
    { title: 'من نحن', href: 'about-us' },
    { title: 'خدماتنا', href: 'services' },
    { title: 'تواصل معانا', href: 'contact-us' },
  ];

  const detailsPageFinder = () => {
    const currentPathSplitted = pathname.split('/');
    let isDetailsPage = false;

    if (currentPathSplitted[1] === 'blog-details') {
      isDetailsPage = true;
    } else if (currentPathSplitted[1] === 'project-details') {
      isDetailsPage = true;
    }

    return isDetailsPage;
  };

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      {/* Announcement wrapper */}
      {/*  <Announcement /> */}
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            ...cssStyles(theme).bgBlur(),
            height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 },
          }),
        }}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box
            onClick={() => push('/')}
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Box sx={{ width: 200 }}>
              <Logo />
            </Box>
            {/* <Box onClick={() => window.open('https://www.basedontech.com', '__blank')}>
              <Label
                color="primary"
                sx={{
                  cursor: 'pointer',
                  display: {
                    xs: 'none',
                    md: 'flex',
                  },
                }}
              >
                Powered by B.O.T
              </Label>
            </Box> */}
          </Box>
          {/*           <Box width={100} component="img" src={"/logo-svg-final.svg"} />
           */}
          {/* Header links */}
          <Box
            display="flex"
            alignItem="center"
            justifyContent="center"
            sx={{
              display: {
                xs: 'none',
                sm: 'none',
                md: 'none',
                lg: 'flex',
              },
            }}
          >
            {headerLinks.map((headerLink, index) => (
              <Box key={index}>
                {pathname === headerLink.href || hoveredLink === index ? (
                  <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
                    <HeaderLink
                      onMouseEnter={() => setHoveredLink(index)}
                      onMouseLeave={() => setHoveredLink(null)}
                      component={m.a}
                      animate={{
                        opacity: ['0', '1'],
                      }}
                      transition={{ duration: 0.4, type: 'tween' }}
                      variant="subtitle2"
                      sx={{
                        display: 'inline-block',
                        WebkitBackgroundClip: 'text',
                        textTransform: 'capitalize',
                      }}
                      to={headerLink.href}
                      spy={true}
                      smooth={true}
                      duration={500}
                      key={index}
                      underline="none"
                      textTransform="capitalize"
                    >
                      {headerLink.title}
                    </HeaderLink>
                    <Box
                      component={m.div}
                      animate={{
                        opacity: ['0', '1'],
                        width: ['0%', '60%'],
                      }}
                      transition={{ duration: 0.4, type: 'tween' }}
                      sx={{
                        background: theme.palette.primary.main,
                        height: '2.3px',
                        width: '60%',
                        borderRadius: '9px',
                      }}
                    />
                  </Box>
                ) : (
                  <Box display="flex" flexDirection="column">
                    <HeaderLink
                      onMouseEnter={() => setHoveredLink(index)}
                      onMouseLeave={() => setHoveredLink(null)}
                      component={m.a}
                      animate={{
                        opacity: ['0', '0.5', '1'],
                      }}
                      transition={{ duration: 0.4, type: 'tween' }}
                      variant="subtitle2"
                      sx={{
                        color: isOffset || detailsPageFinder() ? 'text.primary' : 'common.white',
                      }}
                      to={headerLink.href}
                      spy={true}
                      smooth={true}
                      duration={500}
                      href={headerLink.href}
                      key={index}
                      underline="none"
                      textTransform="capitalize"
                    >
                      {headerLink.title}
                    </HeaderLink>
                    <Box
                      sx={{
                        backgroundColor: 'transparent',
                        height: '2px',
                        width: '100%',
                        borderRadius: '9px',
                      }}
                    />
                  </Box>
                )}
              </Box>
            ))}
          </Box>
          {/* Action buttons */}
          <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'none',
                md: 'none',
                lg: 'flex',
                alignItems: 'center',
              },
            }}
          >
            <Button
              onClick={() => window.open('https://wa.link/ctlkl3')}
              endIcon={<WhatsAppIcon />}
              variant="contained"
            >
              تواصل معانا
            </Button>
            {/* Dark / Light mode */}
            <IconButton sx={{ ml: 2 }} onClick={() => onChangeMode(themeMode === 'dark' ? 'light' : 'dark')}>
              {themeMode === 'light' ? (
                <DarkModeIcon sx={{ color: theme.palette.grey[600] }} />
              ) : (
                <LightModeIcon sx={{ color: '#FFF9A6' }} />
              )}
            </IconButton>
          </Box>
          {/* Drawer trigger */}
          <Box
            sx={{
              display: {
                xs: 'flex',
                sm: 'flex',
                md: 'flex',
                lg: 'none',
              },
              mr: {
                xs: -1,
                lg: 0,
              },
            }}
          >
            {/* Whatsapp */}
            <IconButton onClick={() => window.open('https://wa.me/201116691020')}>
              <Box component="img" src="/icons/whatsapp.png" width={25} />
            </IconButton>
            {/* Dark / Light mode */}
            <IconButton sx={{ ml: 0 }} onClick={() => onChangeMode(themeMode === 'dark' ? 'light' : 'dark')}>
              {themeMode === 'light' ? (
                <DarkModeIcon sx={{ color: theme.palette.grey[600] }} />
              ) : (
                <LightModeIcon sx={{ color: '#FFF9A6' }} />
              )}
            </IconButton>
            <IconButton onClick={() => triggerDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Container>
      </ToolbarStyle>
      {isOffset && <ToolbarShadowStyle />}
      {/* Drawer */}
      <SideDrawer isTriggered={drawerIsTriggered} closeHandler={() => triggerDrawer(false)} headerLinks={headerLinks} />
    </AppBar>
  );
}

export default Header;
