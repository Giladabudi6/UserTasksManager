/* eslint-disable react/prop-types */
import "../styles.css";

function Todo({ todoData, todosDetails }) {
  
  const markCompleted = () => {
    const todos = [...todosDetails.todos];  // Copy todos array and mark the selected todo as completed
    const todoIndex = todosDetails.todos.findIndex(
      (todo) => todo.id === todoData.id
    );
    todos[todoIndex].completed = true;
    todosDetails.setTodos(todos);  // Update the state with modified todos
  };


  return (
    <>
      <div className="todo_post-box">
        <strong>Title:</strong> {todoData.title}
        <br />
        <strong>Completed:</strong> {todoData.completed ? "Yes" : "No"}
        <br />
        {!todoData.completed && (
          <button className="green-button" onClick={() => markCompleted()}>
            Mark Completed  {/* Button to mark todo as completed */}
          </button>
        )}
      </div>
    </>
  );
}

export default Todo;
