import { Route,Routes,BrowserRouter } from 'react-router-dom';
import {UserList} from './Components/UseList.jsx'
import {UserCreate} from './Components/UserCreate.jsx'
import {UserUpdate} from './Components/UserUpdate.jsx'
import {UserDelete} from './Components/UserDelete.jsx'
import {NavBar} from './Components/NavBar.jsx'



export default function ButtonAppBar() {
    return (
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<UserList />}></Route>
          <Route path="/create" element={<UserCreate />}></Route>
          <Route path="/update/:id" element={<UserUpdate />}></Route>
          <Route path="/delete/:id" element={<UserDelete />}></Route>
        </Routes>
      </BrowserRouter>

);
}