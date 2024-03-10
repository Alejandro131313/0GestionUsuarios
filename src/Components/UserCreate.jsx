import React  from 'react';
import { Container, Typography, Grid, TextField, Button } from '@mui/material';
import { Formulario } from './formulario';

export const UserCreate = () => {


  const handleSubmit = (formData) => {
    fetch("https://www.melivecode.com/api/users/create", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result.message);
        if (result.status === "ok") {
          window.location.href = "/";
        }
      });
  };
  


  return (
    <Container maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Crear nuevo Usuario
        </Typography>
        <Formulario onSubmit={handleSubmit} />
      </div>
    </Container>
  );
};