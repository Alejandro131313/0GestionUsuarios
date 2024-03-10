export const UserDelete = (id, setUsers) => {
  fetch(`https://www.melivecode.com/api/users/delete`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: id }),
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    } 
  })
  .then(result => {
    alert(result.message);
    if (result.status === 'ok') {
      // Actualizar la lista de usuarios después de eliminarlo
      setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
    }
  });
};
