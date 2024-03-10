import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { UserDelete } from './UserDelete';

export const UserList = () => {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://www.melivecode.com/api/users")
      .then(res => res.json())
      .then(
        (result) => {
          setUsers(result);
        }
      )
  }, [])

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  }

  const handleEliminar = (id) => {
    UserDelete(id, setUsers);
  }

  return (
    <Box>
        <List>
          {users.map((user) => (
            <ListItem key={user.id}>
              <ListItemAvatar>
                <Avatar src={user.avatar} />
              </ListItemAvatar>
              <ListItemText primary={user.username}/>
              <ListItemSecondaryAction>
                <Button color="primary" onClick={() => handleUpdate(user.id)}>
                  Editar
                </Button>
                <Button color="error" onClick={() => handleEliminar(user.id)}>
                  Eliminar
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
    </Box>
  );
}
