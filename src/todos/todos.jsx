/* eslint-disable react/prop-types */
import AddTodo from "./addTodo";
import "../styles.css";
import Todo from "./todo";
import { useState } from "react";

function Todos({ userData, todosDetails }) {
  const [addTodoWindow, setAddTodoWindow] = useState(false); 

  return (
    <>
      <div className="right-align-todos">
        <strong>Todos: User {userData.id + " "} </strong>

        <button className="green-button" onClick={() => setAddTodoWindow(true)}>
          Add
        </button>

        {addTodoWindow && (
          <AddTodo
            userData={userData}
            todosDetails={todosDetails}
            setAddTodoWindow={setAddTodoWindow} // Passes function to close the "Add Todo" window
          />
        )}

        {todosDetails.todos
          .filter((todo) => todo.userId === userData.id) // Filters todos by user ID
          .map((todo) => (
            <Todo key={todo.id} todosDetails={todosDetails} todoData={todo} /> // Maps each filtered todo to a Todo component
          ))}
      </div>
    </>
  );
}

export default Todos;
