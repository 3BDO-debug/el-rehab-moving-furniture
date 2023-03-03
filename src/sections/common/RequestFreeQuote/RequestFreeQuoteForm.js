import React from 'react';
import { m } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSetRecoilState } from 'recoil';
// material
import { Grid, styled, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// atoms
import alertAtom from 'src/recoil/atoms/alertAtom';
// components
import { varSlide } from 'src/components/animate';

// -----------------------------------------------------------------------------------------

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    color: 'white',
  },
}));

// -----------------------------------------------------------------------------------------

function RequestFreeQuoteForm() {
  const setAlert = useSetRecoilState(alertAtom);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string()
        .required('Full name is required')
        .max(40, 'Full name is too long')
        .min(3, 'Full name is too short'),
      phoneNumber: Yup.string()
        .required('Phone number is required')
        .max(15, 'Phone number is too long')
        .min(7, 'Phone number is too short'),
      email: Yup.string().email('Email is not valid').required('Email is required'),
      message: Yup.string().required('Please fill this field with any extra notes if any'),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      setSubmitting(false);
      resetForm();
    },
  });

  const { values, setFieldValue, touched, dirty, errors, isSubmitting, handleSubmit } = formik;

  return (
    <Grid
      container
      spacing={3}
      sx={{
        justifyContent: {
          xs: 'center',
          md: 'flex-start',
        },
      }}
    >
      <Grid item xs={12}>
        <m.div variants={varSlide().inRight}>
          <CustomTextField
            variant="filled"
            label="Full name"
            value={values.fullName}
            onChange={(event) => setFieldValue('fullName', event.target.value)}
            error={touched.fullName && Boolean(errors.fullName)}
            helperText={touched.fullName && errors.fullName}
            fullWidth
            type="text"
          />
        </m.div>
      </Grid>

      <Grid item xs={12}>
        <m.div variants={varSlide().inRight}>
          <CustomTextField
            variant="filled"
            label="Phone number"
            value={values.phoneNumber}
            onChange={(event) => setFieldValue('phoneNumber', event.target.value)}
            error={touched.phoneNumber && Boolean(errors.phoneNumber)}
            helperText={touched.phoneNumber && errors.phoneNumber}
            fullWidth
            type="tel"
          />
        </m.div>
      </Grid>
      <Grid item xs={12}>
        <m.div variants={varSlide().inRight}>
          <CustomTextField
            variant="filled"
            label="Email"
            value={values.email}
            onChange={(event) => setFieldValue('email', event.target.value)}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            fullWidth
            type="email"
          />
        </m.div>
      </Grid>

      <Grid item xs={12}>
        <m.div variants={varSlide().inRight}>
          <CustomTextField
            variant="filled"
            multiline
            rows={5}
            label="Extras"
            value={values.message}
            onChange={(event) => setFieldValue('message', event.target.value)}
            error={touched.extras && Boolean(errors.extras)}
            helperText={touched.extras && errors.extras}
            fullWidth
            type="text"
          />
        </m.div>
      </Grid>
      <Grid item xs={12}>
        <m.div variants={varSlide().inUp}>
          <LoadingButton loading={isSubmitting} onClick={handleSubmit} variant="contained" size="large">
            اطلب عرض سعر
          </LoadingButton>
        </m.div>
      </Grid>
    </Grid>
  );
}

export default RequestFreeQuoteForm;
