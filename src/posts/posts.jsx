/* eslint-disable react/prop-types */
import AddPost from "./addPost";
import Post from "./post";
import "../styles.css";
import { useState } from "react";

function Posts({ userData, postsDetails }) {
  const [addPostWindow, setAddPostWindow] = useState(false);

  return (
    <>
      <div className="right-align-posts">
        <strong>Posts: User {userData.id + " "} </strong>

        <button 
          className="green-button" 
          onClick={() => setAddPostWindow(true)} // Opens the "Add Post" modal
        >
          Add
        </button>

        {addPostWindow && (
          <AddPost
            userData={userData}
            postsDetails={postsDetails}
            setAddPostWindow={setAddPostWindow} // Callback to close the modal
            addPostWindow={addPostWindow}
          />
        )}

        {postsDetails.posts
          .filter((post) => post.userId === userData.id) // Displays posts for the current user only
          .map((post) => (
            <Post 
              key={post.id} 
              postsDetails={postsDetails} 
              postData={post} 
            />
          ))}
      </div>
    </>
  );
}

export default Posts;
