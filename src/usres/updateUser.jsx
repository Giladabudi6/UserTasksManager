/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles.css";

function UpdateUser({ userData, usersData, setUsers, setUpdateUserWindow }) {
  const [name, setName] = useState(userData.name || ""); // Stores updated name
  const [email, setEmail] = useState(userData.email || ""); // Stores updated email
  const [street, setStreet] = useState(userData.address.street || ""); // Stores updated street address
  const [city, setCity] = useState(userData.address.city || ""); // Stores updated city
  const [zipcode, setZipcode] = useState(userData.address.zipcode || ""); // Stores updated zipcode

  const update = (name, email, street, city, zipcode) => {
    // Updates the user's information and closes the update window
    const users = [...usersData];
    const updateUserDtails = {
      ...userData,
      name: name,
      email: email,
      address: { street: street, city: city, zipcode: zipcode },
    };
    // Updates the user details and closes the modal.
    const index = users.findIndex((user) => user.id === userData.id);
    users[index] = updateUserDtails;
    setUsers(users);
    setUpdateUserWindow(false);
  };

  return (
    <>
      <div className="right-align">
        <strong>Id: {userData.id}</strong>
        <br />
        <strong>Name:</strong>{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} // Updates the name state on input change
        />
        <br />
        <strong>Email:</strong>{" "}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Updates the email state on input change
        />
        <br />
        <strong>Street:</strong>{" "}
        <input
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)} // Updates the street state on input change
        />
        <br />
        <strong>City:</strong>{" "}
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)} // Updates the city state on input change
        />
        <br />
        <strong>Zipcode:</strong>{" "}
        <input
          type="text"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)} // Updates the zipcode state on input change
        />
        <br />
        <div className="row">
          <button
            className="green-button"
            onClick={() => update(name, email, street, city, zipcode)} // Calls the update function on click
          >
            Update
          </button>
          <button
            className="green-button"
            onClick={() => setUpdateUserWindow(false)} // Closes the update user modal without saving changes
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default UpdateUser;
