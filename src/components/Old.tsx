"use client";

import { Post } from "@/types/post";
import { useEffect, useState } from "react";

export default function Old() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  if (!posts.length) return <p>Loading...</p>;

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
