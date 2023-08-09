"use client";
import { useEffect } from "react";
import { usePost } from "@/store";
import Link from "next/link";
import { shallow } from "zustand/shallow";

export const Posts = () => {
 const [posts, loading, getAllPosts] = usePost(
  (state) => [state.posts, state.loading, state.getAllPosts],
  shallow
 );

 useEffect(() => {
  getAllPosts();
 }, [getAllPosts]);

 return loading ? (
  <h3>Loading...</h3>
 ) : (
  <ul>
   {posts.map((posts: any) => (
    <li key={posts.id}>
     <Link href={`/blog/${posts.id}`}>{posts.title}</Link>
    </li>
   ))}
  </ul>
 );
};
