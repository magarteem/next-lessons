import { Metadata } from "next";
import React from "react";

async function getData(id: string) {
 const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
  next: {
   revalidate: 60,
  },
 });
 return response.json();
}

type Props = {
 params: {
  id: string;
 };
};

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
 const post = await getData(id);

 return {
  title: post.title,
 };
}

export default async function Post({ params: { id } }: Props) {
 const post = await getData(id);

 return (
  <>
   <h1>Post === {id}</h1>;<h2>{post.title}</h2>;<p>{post.body}</p>
  </>
 );
}
