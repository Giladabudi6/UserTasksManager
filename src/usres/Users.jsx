/* eslint-disable react/prop-types */
import User from "./User"; 
import AddUser from "./addUser"; 
import '../styles.css'; 
import { useState } from "react"; 

function Users({ usersData, setUsers, todosDetails, postsDetails }) {
  const [search, setSearch] = useState(""); // State to hold the search query
  const [addUserWindow, setAddUserWindow] = useState(false); // State to toggle Add User window

  // Function to check if user matches search criteria
  const searchUser = (user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase());

  return (
    <>
      <div className="rounded-box">
        <div className="inline-box">
          <strong>Search</strong>
          <input type="text" onChange={(e) => setSearch(e.target.value)} /> {/* Search field */}
          <button className="green-button" onClick={() => setAddUserWindow(true)}>Add</button> {/* Add user button */}
        </div>

        {/* Show AddUser component if addUserWindow is true */}
        {addUserWindow && <AddUser usersData={usersData} setUsers={setUsers} 
        setAddUserWindow={setAddUserWindow} addUserWindow={addUserWindow}/>}

        {/* Filter and display users based on the search query */}
        {usersData
          .filter((user) => searchUser(user)) 
          .map((user) => (
            <User key={user.id} usersData={usersData} userData={user} setUsers={setUsers} 
            todosDetails={todosDetails} postsDetails={postsDetails}/> // Display user info
          ))}
      </div>
    </>
  );
}

export default Users;
