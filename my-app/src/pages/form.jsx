// src/MyForm.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Alert } from '@mui/material';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? '' : 'Name is required';
    tempErrors.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email) ? '' : 'Email is not valid';
    tempErrors.subject = formData.subject ? '' : 'Subject is required';
    tempErrors.message = formData.message ? '' : 'Message is required';
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log(formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  };

  const inputStyles = {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#a3be8c',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiInputBase-input': {
      color: 'white',
    },
  };

  const buttonStyles = {
    backgroundColor: '#a3be8c',
    '&:hover': {
      backgroundColor: '#8fae79',
    },
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          margin: "10px",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" sx={{ color: 'white' }}>
          Contact Us
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            autoFocus
            sx={inputStyles}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            sx={inputStyles}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="subject"
            label="Subject"
            name="subject"
            autoComplete="subject"
            value={formData.subject}
            onChange={handleChange}
            error={!!errors.subject}
            helperText={errors.subject}
            sx={inputStyles}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="message"
            label="Message"
            name="message"
            autoComplete="message"
            value={formData.message}
            onChange={handleChange}
            error={!!errors.message}
            helperText={errors.message}
            multiline
            rows={4}
            sx={inputStyles}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ ...buttonStyles, mt: 3, mb: 2 }}
          >
            Submit
          </Button>
          {submitted && <Alert severity="success">Your message has been sent!</Alert>}
        </Box>
      </Box>
    </Container>
  );
};

export default MyForm;
