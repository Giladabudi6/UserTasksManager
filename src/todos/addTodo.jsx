/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "../styles.css";

function AddTodo({ userData, todosDetails, setAddTodoWindow }) {
  const [title, setTitle] = useState("");

  // Function to add a new todo
  const add = (title) => {
    todosDetails.setTodos([
      ...todosDetails.todos,
      {
        id: uuidv4(), // Generate a unique id for the new todo
        userId: userData.id,
        title: title,
        completed: false, // New todos are initially not completed
      },
    ]);
    setAddTodoWindow(false); // Close the "Add Todo" window after adding the todo
  };

  return (
    <>
      <div className="right-align-todos center-content">
        <strong>Title:</strong>{" "}
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <br />
        <div className="row">
          <button className="green-button" onClick={() => add(title)} // Adds a new todo with the provided details
            > 
            Add
          </button>

          <button
            className="green-button"
            onClick={() => setAddTodoWindow(false)} // Cancels and closes the modal
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
