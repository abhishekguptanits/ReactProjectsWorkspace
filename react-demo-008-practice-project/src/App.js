import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUserList] = useState([]);

  const updateUsers = (username, age) => {
    const newUser = {
      id: Math.random().toString(),
      username,
      age
    }
    setUserList(prevUserList => [
      ...prevUserList,
      newUser
    ])
  }

  return (
    <div>
      <AddUser onAddUser={updateUsers}/>
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
