import Post from "./Post";

interface postType {
  id: number;
  user: number;
  title: string;
  body: string;
}

interface postsProps {
  posts: Array<postType>;
  deletePost: Function;
  updatePost: Function;
}

const Posts = ({ posts, deletePost, updatePost }: postsProps) => {
  return (
    <div className="flex flex-col w-full p-2 bg-gray-50 border border-gray-800 rounded-lg transition-all ">
      {posts.map((post: postType) => (
        <Post
          post={post}
          key={post.id}
          deletePost={deletePost}
          updatePost={updatePost}
        />
      ))}
    </div>
  );
};

export default Posts;
