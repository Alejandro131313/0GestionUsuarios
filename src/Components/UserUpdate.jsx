import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import './UserUpdateInfo.css';




export const UserUpdate = () => {
  const [lname, setLname] = useState('');
  const [fname, setFname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {

        const response = await fetch(`https://www.melivecode.com/api/users/${id}`);
        const data = await response.json();
        const { fname, lname, username, email, avatar } = data.user;
        setFname(fname);
        setLname(lname);
        setUsername(username);
        setEmail(email);
        setAvatar(avatar);
 
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      id,
      fname,
      lname,
      username,
      email,
      avatar,
    };


      const response = await fetch("https://www.melivecode.com/api/users/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      alert(result.message);
      if (result.status === "ok") {
        window.location.href = "/";
      }
  
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <TextField
            autoComplete="fname"
            name="fname"
            variant="outlined"
            required
            fullWidth
            id="fname"
            label="Nombre"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
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
            value={lname}
            onChange={(e) => setLname(e.target.value)}
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="small"
          />
        </div>
        <div>
          <TextField
            variant="standard"
            required
            fullWidth
            id="avatar"
            label="Avatar (URL)"
            name="avatar"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div>
      </div>
      <Button type="submit" fullWidth variant="contained" color="success">
        Actualizar datos Usuario
      </Button>
    </form>
  );
};
