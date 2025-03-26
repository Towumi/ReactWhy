import React, { useState } from "react";
import { Verified, VerifiedIcon } from "lucide-react";
import InstagramEmbed from "react-instagram-embed";
import { Heart } from "lucide-react";

const Post = ({ imageUrl, user, users }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = (e) => {
  e.preventDefault();
  if (newComment.trim() !=='') {
    setComments([
      {
        text: newComment,
        timestamp: new Date().toLocaleDateString(),
        user: users[Math.floor(Math.random() * users.length)], //Random user comments
      },
      ...comments,
    ]);
    setNewComment('');
  }
};

  return (
    <div className="bg-white border border-gray-200 rounded-sm mb-6">
      <div className="flex justify-between items-center p-3.5">
        <div className="flex items-centre gap-2.5">
          <img
            src={user.avatar}
            alt={user.username}
            className="w-8 h-8 rounded-full"
          />
          <div className="flex items-center gap-1">
            <span className="font-semibold">{user.username}</span>
            {user.isVerified && (
              <span>
                <Verified size={15} />
              </span>
            )}
          </div>
        </div>
        <div>...</div>
      </div>
      <div className="w-full">
        <img src={imageUrl} alt="" className="w-full h-auto blocki " />
      </div>
      <div className="flex gap-4 p-4">
        <button
          className="text-2xl bg-transparent border-none cursor-pointer p-0"
          onClick={() => setIsLiked(!isLiked)}
        >
          {isLiked?  (<Heart fill="red" color="red"/>): <Heart color="gray"/>}
        </button>
      </div>
      <div className="px-4 font-semibold text-sm">
        {isLiked ? "1 like" : "0 likes"}
      </div>
      <div className="p-4">
        {comments.map((comment, index) => (
          <div key={index} className="mb-2 text-sm">
            <div className="flex items-center gap-1">
              <img
                src={comment.user.avatar}
                alt={comment.user.username}
                className="w-5 h-5 rounded-full"
              />{" "}
              <span className="font-semibold mr-0.5">
                {comment.user.username}
              </span>
              {comment.user.isVerified && (
                <span className="text-blue-500 text-xs">
                  <Verified size={15} />
                </span>
              )}
            </div>
            <div className="ml-7">
              <span>{comment.text}</span>
              <span className="text-gray-500 text-xs ml-1.5">
                {comment.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>
      <form
        onSubmit={handleAddComment}
        className="flex border-t border-gray-200 p-4"
      >
        <input
          type="text"
          placeholder="Add a comment ..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="flex-1 border-none outline-none text-sm"
        />
        <button
          type="submit"
          className="border-none bg-transparent text-blue-500 font-semibold cursor-pointer disabled:text-blue-300"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Post;
