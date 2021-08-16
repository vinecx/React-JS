import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header'
import { Users } from './components/Users'
import { DisplayBoard } from './components/DisplayBoard'
import CreateUser from './components/CreateUser'
import { getAllUsers, createUser, deleteAllUsers, deleteUsers } from './services/UserService'

function App() {

  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  const [numberOfUsers, setNumberOfUsers] = useState("Loading")


  const userCreate = (e) => {

      createUser(user).then(response => {
        if(response.ok){
          fetchAllUsers();
        }
      });
  }

  const fetchAllUsers = () => {
    getAllUsers().then(users => {
        console.log(users)
        setUsers(users);
        setNumberOfUsers(users.length)
      });
  }

  const deleteAll = () => {
    deleteAllUsers().then(response => {
      if(response.ok){
        fetchAllUsers();
      }
    });
  }

  const deleteUser = (e) => {
    deleteUsers(e).then(response => {
      if(response.ok){
        fetchAllUsers();
      }
    })
  }

  useEffect(() => {
    fetchAllUsers()
  }, [])

  const onChangeForm = (e) => {
      if (e.target.name === 'firstname') {
          user.firstName = e.target.value;
      } else if (e.target.name === 'lastname') {
          user.lastName = e.target.value;
      } else if (e.target.name === 'email') {
          user.email = e.target.value;
      }

      setUser(user)
  }
  
    
    return (
        <div>
          <Header/>


          <div className="container">
            <div className="row">
              <div className="col-md-8">
                  <CreateUser 
                    user={user}
                    onChangeForm={onChangeForm}
                    createUser={userCreate}
                    >
                  </CreateUser>
              </div>
              <div className="col-md-4 mt-4">
                  <DisplayBoard
                    numberOfUsers={numberOfUsers}
                    getAllUsers={fetchAllUsers}
                    deleteAll={deleteAll}
                  >
                  </DisplayBoard>
              </div>
            </div>
          </div>

          <div className="container mt-5">
            <Users users={users} deleteUser={deleteUser}></Users>
          </div>
        </div>
    );
}

export default App;
