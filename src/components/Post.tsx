import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import classNames from "classnames";
import UpdatePost from "./UpdatePost";

interface postType {
  id: number;
  user: number;
  title: string;
  body: string;
}

interface postProp {
  post: postType;
  deletePost: Function;
  updatePost: Function;
}

const Post = ({ post, deletePost, updatePost }: postProp) => {
  const [showUpdatePost, setShowUpdatePost] = useState(false);

  return (
    <div
      className={classNames(
        "flex m-1 p-2 w-full  justify-between items-center  shadow-md"
      )}
    >
      {!showUpdatePost ? (
        <>
          <div className="w-full overflow-auto">
            <h3 className="text-lg"> {post.title}</h3>
            <p className="">{post.body}</p>
          </div>
          <div className="flex">
            <div className="w-9 h-9 m-2 border-black border-1 rounded-full shadow-md">
              <FiTrash2
                className="text-red-600 w-8 h-8 cursor-pointer"
                onClick={() => deletePost(post.id)}
              />
            </div>
            <div className="w-9 h-9 m-2 border-black border-1 rounded-full shadow-md">
              <FiEdit
                className="text-blue-600 w-8 h-8 cursor-pointer"
                onClick={() => setShowUpdatePost(true)}
              />
            </div>
          </div>
        </>
      ) : (
        showUpdatePost && (
          <UpdatePost
            onUpdate={updatePost}
            originalData={post}
            onCancel={() => {
              setShowUpdatePost(false);
            }}
            setShowUpdatePost={setShowUpdatePost}
          />
        )
      )}
    </div>
  );
};

export default Post;
