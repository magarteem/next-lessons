"use client";
import { getAllPosts } from "@/services/getPosts";
import Link from "next/link";
import useSWR from "swr";
//import { shallow } from "zustand/shallow";

export const Posts = () => {
 const { data: posts, isLoading } = useSWR("posts", getAllPosts);
 // const [posts, loading, getAllPosts] = usePost(
 //  (state) => [state.posts, state.loading, state.getAllPosts],
 //  shallow
 // );

 // useEffect(() => {
 //  getAllPosts();
 // }, [getAllPosts]);

 return isLoading ? (
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
