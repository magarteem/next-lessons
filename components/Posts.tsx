import Link from "next/link";
import React from "react";

type Props = {
 posts: any[];
};

export const Posts = ({ posts }: Props) => {
 return (
  <ul>
   {posts.map((posts: any) => (
    <li key={posts.id}>
     <Link href={`/blog/${posts.id}`}>{posts.title}</Link>
    </li>
   ))}
  </ul>
 );
};
