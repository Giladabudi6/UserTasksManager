/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "../styles.css";
import OtherData from "./otherData";
import UpdateUser from "./updateUser";
import Todos from "../todos/todos";
import Posts from "../posts/posts";

function User({ userData, usersData, setUsers, todosDetails, postsDetails }) {
  const [showOtherData, setShowOtherData] = useState(false); // Toggles the display of "Other Data"
  const [showTodosPostsData, setShowTodosPostsData] = useState(false); // Toggles the display of todos and posts
  const [updateUserWindow, setUpdateUserWindow] = useState(false); // Toggles the update user modal
  const [todosAreCompleted, setTodosAreCompleted] = useState(false); // Tracks if all todos for the user are completed

  useEffect(() => {
    // Checks if all todos for the user are marked as completed
    const userTodos = todosDetails.todos.filter(
      (todo) => todo.userId === userData.id
    );
    const allCompleted = userTodos.every((todo) => todo.completed);
    setTodosAreCompleted(allCompleted);
  }, [todosDetails.todos, userData.id]);

  const deleteUser = () => {
    // Deletes the current user by filtering them out of the users list
    const users = usersData.filter((user) => user.id !== userData.id);
    setUsers(users);
  };

  return (
    <>
      <div
        className={"user-box"}
        style={
          todosAreCompleted
            ? { border: "3px solid green", padding: "10px" } // Highlights users with completed todos in green
            : { border: "3px solid red", padding: "10px" } // Highlights users with incomplete todos in red
        }
      >
        <button
          style={{ backgroundColor: "#fdfeeb" }}
          onClick={() => setShowTodosPostsData(!showTodosPostsData)} // Toggles todos and posts display
        >
          Id:
        </button>{" "}
        <strong>{userData.id}</strong> <br />
        <strong>Name: </strong>
        {userData.name}
        <br />
        <strong>Email:</strong> {userData.email}
        <br />
        <div className="row">
          <button
            className="gray-button"
            onMouseOver={() => setShowOtherData(true)} // Displays "Other Data" on hover
            onClick={() => setShowOtherData(false)} // Hides "Other Data" on click
          >
            Other Data
          </button>

          {showOtherData && <OtherData key={userData.id} userData={userData} />}
        </div>
        {updateUserWindow && (
          <UpdateUser
            userData={userData} // Passes user data to the update modal
            usersData={usersData}
            setUsers={setUsers}
            setUpdateUserWindow={setUpdateUserWindow}
          />
        )}
        {showTodosPostsData && (
          <Todos
            userData={userData} // Displays todos for the user
            todosDetails={todosDetails}
            showTodosPostsData={showTodosPostsData}
            setShowTodosPostsData={setShowTodosPostsData}
            setTodosAreComplited={setTodosAreCompleted}
          />
        )}
        {showTodosPostsData && (
          <Posts userData={userData} postsDetails={postsDetails} /> // Displays posts for the user
        )}
        <button
          className="green-button"
          onClick={() => setUpdateUserWindow(true)} // Opens the update user modal
        >
          Update
        </button>
        <button className="green-button" onClick={deleteUser}> 
          Delete
        </button>
      </div>
    </>
  );
}

export default User;
