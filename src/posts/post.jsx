/* eslint-disable react/prop-types */
import "../styles.css";

function Post({ postData }) {
  return (
    <>
      <div className="todo_post-box">
        <strong>Title:</strong> {postData.title} {/* Displays the post title */}
        <br />
        <strong>Body:</strong> {postData.body} {/* Displays the post content */}
        <br />
      </div>
    </>
  );
}

export default Post;
