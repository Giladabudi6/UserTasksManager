/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles.css";
import { v4 as uuidv4 } from "uuid";

function AddUser({ usersData, setUsers, setAddUserWindow }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const add = (name, email) => {
    setUsers([
      ...usersData,
      {
        id: uuidv4(), // Generates a unique ID for the new user
        name: name,
        email: email,
        address: [{ street: "", city: "", zipcode: "" }], // Initializes an empty address for the new user
      },
    ]);
    setAddUserWindow(false); // Closes the add user modal
  };

  return (
    <>
      <div className="right-align">
        <strong>Add New User</strong> <br />
        <strong>Name:</strong>{" "}
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <strong>Email:</strong>{" "}
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <div className="row">
          <button
            className="green-button"
            onClick={() => add(name, email)} // Adds the new user
          >
            Add
          </button>

          <button
            className="green-button"
            onClick={() => setAddUserWindow(false)} // Cancels adding a new user
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default AddUser;
