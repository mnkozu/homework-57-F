import React, {useState} from 'react';
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";
import Toolbar from "./components/Toolbar/Toolbar";
import {User} from "./types";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (newUser: User) => {
    setUsers(prev => [...prev, newUser]);
  };

  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col">
            <UserForm onSubmit={addUser}/>
          </div>
          <div className="col">
            <Users/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
