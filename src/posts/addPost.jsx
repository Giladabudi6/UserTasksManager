/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "../styles.css";

function AddPost({ userData, postsDetails, setAddPostWindow }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  
  // Function to add a new todo
  const add = (title, body) => {
    postsDetails.setPosts([
      ...postsDetails.posts,
      {
        id: uuidv4(), // Generates a unique ID for the new post
        userId: userData.id, // Associates the post with the current user
        title: title,
        body: body,
      },
    ]);
    setAddPostWindow(false); // Closes the "Add Post" modal
  };

  return (
    <>
      <div className="right-align-posts center-content">
        <strong>Title:</strong>{" "}
        <input 
          type="text" 
          onChange={(e) => setTitle(e.target.value)} // Captures the post title input
        />
        <br />
        <strong>Body:</strong>{" "}
        <input 
          type="text" 
          onChange={(e) => setBody(e.target.value)} // Captures the post body input
        />
        <br />
        <div className="row">
          <button 
            className="green-button" 
            onClick={() => add(title, body)} // Adds a new post with the provided details
          >
            Add
          </button>

          <button 
            className="green-button" 
            onClick={() => setAddPostWindow(false)} // Cancels and closes the modal
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default AddPost;
