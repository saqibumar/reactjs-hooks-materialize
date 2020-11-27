import React, { useState, useEffect } from 'react'
import UsersList from './UsersList'
import AddUsers from './AddUsers'
import EditUsers from './EditUsers'

const Container = () => {
  var usersData = []; // [{}]
  const config = require('../config.json');
  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)

  useEffect(() => {
      getUsersList();
  }, []);

  const getUsersList = () => {
    fetch(config.apiUrl + "users", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
    .then((data) => {
        console.log(data);
        setUsers(data)
    })
    .catch(e => {
        console.log(e);
    });

    //   setUsers(usersData);
  }

  const addUser = user => {
    fetch(config.apiUrl + "users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(response => response.json())
    .then((data) => {
        // console.log(data);
        // setUsers(data);
        //setUsers([ ...users, data ]);
        getUsersList();
    })
    .catch(e => {
        console.log(e);
    });
  }

  const initialFormState = {
    first_name: '', 
    last_name: '',
    birthday: '', 
    password: '', 
    gender_id: 1,
    gender: {
      gender_id: 1,
      name: "Male"
    }
  }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, first_name: user.first_name, last_name: user.last_name,
        birthday: user.birthday, password: user.password, gender_id: user.gender_id });
  }

  const updateUser = (id, updatedUser) => {
      console.log(JSON.stringify(updatedUser));
    setEditing(false);
    // setUsers(users.map(user => (user.id === id ? updatedUser : user)));
    fetch(config.apiUrl + "users/" + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
    })
    .then((data) => {
        console.log(data);
        if (data.status === 204) {
            alert(data.statusText + '. Nothing to update');
        }
        else getUsersList();
    })
    .catch(e => {
        console.log(e);
    });
  }

  const deleteUser = id => {
    console.log(id);
    fetch(config.apiUrl + "users/" + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((data) => {
        setUsers(users.filter(user => user.id !== id));
        console.log(data);
        getUsersList();
    })
    .catch(e => {
        console.log(e);
    });
  }

  return (
    <div className="container">
        <div className="row">
        <div className="col-12">
          <h2>Users</h2>
        <hr/>
        </div>
        <div className="col-12">
          <UsersList users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
        </div>
        <hr />
      <div className="">
        <div className="">
          {editing ? (
            <div className="row">
                <div className="col-12">
                    <hr/>
                    <h2>Edit User</h2>
                <hr/>
                </div>
                <div className="col-12">
                  <EditUsers
                        editing={editing}
                        setEditing={setEditing}
                        currentUser={currentUser}
                        updateUser={updateUser}
                    />
                </div>
            </div>
          ) : (
            <div className="row">
                <div className="col-12">
                    <h2>Add User</h2>
                </div>
              <div className="col-12">
                <AddUsers addUser={addUser} />
              </div>
            </div>
          )}
        </div>
        
      </div>
    </div>
  )
}

export default Container
