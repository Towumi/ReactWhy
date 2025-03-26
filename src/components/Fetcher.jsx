import axios from "axios";
import React, { useState } from "react";
import Post from "./Post";
import InstagramEmbed from "react-instagram-embed";


const users = [
  {
    id: 1,
    username: "Wyatt",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Wyatt",
    isVerified: false,
  },
  {
    id: 2,
    username: "Aidan",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Aidan",
    isVerified: false,
  },
  {
    id: 3,
    username: "Vivian",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Vivian",
    isVerified: true,
  },
  {
    id: 4,
    username: "Adrian",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Adrian",
    isVerified: false,
  },
  {
    id: 1,
    username: "Emery",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Emery",
    isVerified: true,
  },
];

const Fetcher = () => {
  const [posts, setPosts] = useState([]);

  const fetchDogImage = async () => {
    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      if (response.data.status === "success") {
        setPosts((currentPosts) => [
          ...currentPosts,
          {
            imageUrl: response.data.message,
            user: users[Math.floor(Math.random() * users.length)],
          },
        ]);
      }
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  return (
    <div className="max-w-[500px] mx-auto p-5">
      {posts.map((post, index) => (
        <Post
          key={index}
          imageUrl={post.imageUrl}
          user={post.user}
          users={users}
        />
      ))}
      <button
        onClick={fetchDogImage}
        className="w-80 py-3 bg-blue-500 text-white border-none rounded cursor-pointer font-semibold mt-5"
      >
        Load More
      </button>
    </div>
  );
};
export default Fetcher;
