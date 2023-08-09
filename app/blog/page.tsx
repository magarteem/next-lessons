"use client";
import React, { useEffect, useState } from "react";
import { Metadata } from "next";
import { getAllPosts } from "@/services/getPosts";
import { Posts } from "@/components/Posts";
import { PostSearch } from "@/components/PostSearch";

export const metadata: Metadata = {
 title: "Blog |  Next",
};

export default function Blog() {
 const [posts, setPosts] = useState<any[]>([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  getAllPosts()
   .then(setPosts)
   .finally(() => setLoading(false));
 }, []);

 return (
  <>
   <h1>Blog page</h1>

   <PostSearch onSearch={setPosts} />
   {loading ? <h3>Loading...</h3> : <Posts posts={posts} />}
  </>
 );
}
