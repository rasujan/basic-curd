import React, { useEffect, useState } from "react";
import AddPost from "../components/AddPost";
import Header from "../components/Header";
import Posts from "../components/Posts";
import axios from "../utils/BaseAPI";

interface postType {
  id: number;
  user: number;
  title: string;
  body: string;
}

const Main = () => {
  const [showAddPost, setShowAddPost] = useState(false);

  const [posts, setPosts] = useState([]);
  const [call, setCall] = useState(false);

  useEffect(() => {
    getPosts();
  }, [call]);

  const toggleAddPost = () => {
    setShowAddPost(!showAddPost);
  };

  // CURD Request
  // Add Post - Method Post
  const addPost = async (post: postType) => {
    console.log("post", post);
    await axios
      .post("/posts", post)
      .then((res) => {
        alert("Posted Added.");
        toggleAddPost();
      })
      .catch((err) => {
        alert(err.response.data);
        toggleAddPost();
      });
    setCall(!call);
  };

  // Get All Post - Method Get
  const getPosts = async () => {
    await axios
      .get("/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Delete Post - Method - Delete
  const deletePost = async (id: number) => {
    await axios
      .delete(`/posts/${id}`)
      .then((res) => alert("Post Deleted"))
      .catch();
    setCall(!call);
  };

  // Update Post - Method - PUT
  const updatePost = async (post: postType) => {
    await axios
      .put(`/posts/${post.id}`, post)
      .then((res: any) => alert("Post Updated"))
      .catch();
    setCall(!call);
  };

  return (
    <div className="container mx-auto max-w-screen-sm">
      <div className="">
        <div className="flex flex-col justify-center">
          <Header
            toggleAddPost={toggleAddPost}
            showAddPostState={showAddPost}
          />
          {showAddPost && <AddPost onAdd={addPost} />}
          {posts.length !== -1 ? (
            <Posts
              posts={posts}
              deletePost={deletePost}
              updatePost={updatePost}
            />
          ) : (
            <h1> No POsts Found. </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
