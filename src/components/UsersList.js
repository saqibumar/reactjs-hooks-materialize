import React from 'react'

const UsersList = props => (
  <table style={{width:'100%'}} className="striped">
    <thead>
      <tr>
        <th>Id</th>
        <th>first_name</th>
        <th>last_name</th>
        <th>birthday</th>
        <th>password</th>
        <th>gender</th>
      </tr>
    </thead>
    <tbody>
      {props.users && props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.birthday}</td>
            <td>{user.password}</td>
            <td>{user.gender.name}</td>
            <td>
              <button
                className="button muted-button"
                onClick={() => {
                  props.editRow(user)
                }}
              >
                Edit
              </button>
              <button
                className="button muted-button"
                onClick={() => props.deleteUser(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UsersList
