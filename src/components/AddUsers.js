import React, { useState } from 'react'
// import 'materialize-css/dist/css/materialize.min.css';
// import { Button } from 'react-materialize';

const AddUsers = props => {
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
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    console.log(name, value);
  }

  return (
    <form 
      onSubmit={event => {
        event.preventDefault()
        if (!user.first_name || !user.last_name) {
          console.log("Name fields are required.");
          return;
        }
        // addUser(user);
        props.addUser(user);
        // setUser(initialFormState);
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
          value={user.birthday}
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
        <select id="gender" name="gender_id" onChange={handleInputChange} className="browser-default">
				<option value="1">Male</option>
				<option value="2">Female</option>
			  </select>
        <button>Add User</button>
      </fieldset>
    </form>
  )
}

export default AddUsers
