import React, { useState } from 'react';
import {TextField, Button } from '@mui/material';
import './formulario.css';

export const Formulario = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    username: '',
    email: '',
    avatar: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div >
          <TextField
            autoComplete="fname"
            name="fname"
            variant="outlined"
            required
            fullWidth
            id="fname"
            label="Nombre"
            value={formData.fname}
            onChange={handleChange}
            autoFocus
            size="small"
          />
        </div>
        <div>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="lname"
            label="Apellido"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            size="small"
          />
        </div>
        <div>
          <TextField
            variant="filled"
            required
            fullWidth
            id="username"
            label="Usuario"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email@gmail.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            size="small"
          />
        </div>
        <div >
          <TextField
            variant="standard"
            required
            fullWidth
            id="avatar"
            label="Avatar (URL)"
            name="avatar"
            value={formData.avatar}
            onChange={handleChange}
          />
        </div>
      </div>
      <Button type="submit" fullWidth variant="contained" color="success">
        Crear Usuario
      </Button>
    </form>
  );
};




