import React, { useState } from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import { Button } from 'react-materialize';


const EditUsers = props => {
  const [user, setUser] = useState(props.currentUser);
  console.log(props.currentUser);

  const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        console.log(user.id, user);
        props.updateUser(user.id, user);
      }}
    >
      <fieldset>
      <label>First Name</label>
        <input
          type="text"
          name="first_name"
          value={user.first_name}
          onChange={handleInputChange}
        />
        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          value={user.last_name}
          onChange={handleInputChange}
        />
        <label>Birthday</label>
        <input
          type="date"
          name="birthday"
          value={user.birthday.substr(0,10)}
          onChange={handleInputChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
        />
        <label>Gender</label>
        <select id="gender" name="gender_id" onChange={handleInputChange} defaultValue={user.gender_id}  className="browser-default">
            <option value="1">Male</option>
            <option value="2">Female</option>
        </select>
        <Button>Update User</Button>
        <Button onClick={() => props.setEditing(false)}>
          Cancel
        </Button>
      </fieldset>
    </form>
  )
}

export default EditUsers
