import { Link as ScrollLink } from 'react-scroll';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Link, Divider, Container, Typography, Stack, Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
// hooks
import useLocales from 'src/hooks/useLocales';
import Logo from './Logo';

// ----------------------------------------------------------------------

const RootStyle = styled(Container)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function Footer() {
  const LINKS = [
    {
      headline: 'El-Rehab',
      children: [
        { name: 'الرئيسية', href: 'hero' },
        { name: 'من نحن', href: 'about-us' },
        { name: 'خدماتنا', href: 'services' },
        { name: 'تواصل معانا', href: 'contact-us' },
      ],
    },
    {
      headline: 'Contact',
      children: [
        { name: 'elrehabmovingofficial@gmail.com', href: 'https://wa.link/ctlkl3' },
        { name: '+20 111 401 0855', href: 'https://wa.link/ctlkl3' },
      ],
    },
  ];

  return (
    <RootStyle>
      <Divider />
      <Container sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              width={120}
              height={120}
            >
              <Logo />
            </Box>
          </Grid>
          <Grid item xs={8} md={6}>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
              شركة الرحاب تختلف عن باقي شركات نقل العفش الأخري فهي تمتلك الكثير من الأجهزة و الأدوات الحديثة التي تسهل
              خطوات الفك و التركيب و تنزيل العفش من الأدوار العالية و كذلك رفعه ، أيضا لدينا أسطول من السيارات المتخصصة
              في نقل الأثاث الي أبعد الأماكن بمختلف الأحجام و الأشكال المغلقة و المفتوحة لنقل العفش في كافة فصول السنة
              بالإضافة الي أننا نمتلك مجموعة كبيرة من العمال المدربيين علي أعلي المستويات فهم ذو خبرة عالية في مجال نقل
              الأثاث لذلك كن معنا مطمئن تماما فنحن نعلم كثيرا مدي الخوف و القلق الذي يساور سيدة المنزل علي عفش المنزل
              حين ينتقلون الي مكان جديد و ذلك لأن العفش يحتاج الي عناية
            </Typography>

            <Stack
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              <Box marginRight={1}>
                <IconButton onClick={() => window.open('https://www.facebook.com/informa180/')}>
                  <Box component="img" src="/icons/facebook.png" width={30} />
                </IconButton>
              </Box>

              <Box marginRight={1}>
                <IconButton onClick={() => window.open('https://www.instagram.com/informa180/')}>
                  <Box component="img" src="/icons/instagram.png" width={30} />
                </IconButton>
              </Box>
              <Box marginRight={1}>
                <IconButton
                  onClick={() =>
                    window.open(
                      'https://api.whatsapp.com/send?phone=201090028014&text=Hello%20Informa%2C%20I%20want%20to%20get%20in%20shape.%20'
                    )
                  }
                >
                  <Box component="img" src="/icons/whatsapp.png" width={30} />
                </IconButton>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
              {LINKS.map((list) => (
                <Stack key={list.headline} spacing={2}>
                  <Typography component="p" variant="overline">
                    {list.headline}
                  </Typography>
                  {list.children.map((link) => (
                    <ScrollLink key={link.name} to={link.href} spy={true} smooth={true} duration={500}>
                      <Link color="inherit" variant="body2" sx={{ display: 'block', cursor: 'pointer' }}>
                        {link.name}
                      </Link>
                    </ScrollLink>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          component="p"
          variant="body2"
          sx={{
            mt: 10,
            pb: 5,
            fontSize: 13,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          © 2023. <strong>El-Rehab</strong> All rights reserved <br /> Developed with all Love by
          <strong>
            <a href="https://www.basedontech.com" target="__blank" style={{ marginLeft: '5px', color: '#E38F25' }}>
              Based On Tech
            </a>
          </strong>
        </Typography>
      </Container>
    </RootStyle>
  );
}
