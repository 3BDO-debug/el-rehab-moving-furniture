import { Box, Button, Card, Grid, Typography } from '@mui/material';
import React from 'react';
// components
import SectionWrapper from 'src/components/SectionWrapper';

// --------------------------------------------------------------------------------------------------------

function AboutUs() {
  return (
    <Box component="div" id="about-us">
      <SectionWrapper>
        <Grid container columnSpacing={8}>
          <Grid item xs={12}>
            <Typography variant="overline">من نحن</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2"> اعرف اكتر عننا !</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3} marginTop={1}>
              <Grid item xs={12}>
                شركة الرحاب تختلف عن باقي شركات نقل العفش الأخري فهي تمتلك الكثير من الأجهزة و الأدوات الحديثة التي تسهل
                خطوات الفك و التركيب و تنزيل العفش من الأدوار العالية و كذلك رفعه ، أيضا لدينا أسطول من السيارات
                المتخصصة في نقل الأثاث الي أبعد الأماكن بمختلف الأحجام و الأشكال المغلقة و المفتوحة لنقل العفش في كافة
                فصول السنة بالإضافة الي أننا نمتلك مجموعة كبيرة من العمال المدربيين علي أعلي المستويات فهم ذو خبرة عالية
                في مجال نقل الأثاث لذلك كن معنا مطمئن تماما فنحن نعلم كثيرا مدي الخوف و القلق الذي يساور سيدة المنزل علي
                عفش المنزل حين ينتقلون الي مكان جديد و ذلك لأن العفش يحتاج الي عناية
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined">اعرف اكتر</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <Box component="img" src="/images/about-us.jpg" />
            </Card>
          </Grid>
        </Grid>
      </SectionWrapper>
    </Box>
  );
}

export default AboutUs;
