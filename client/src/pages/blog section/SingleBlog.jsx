import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import SingleBlogCard from "./SingleBlogCard";

const SingleBlog = () => {
  const { blogid } = useParams();
  console.log(blogid);

  const fetchPost = async () => {
    const response = await fetch(
      `http://localhost:3000/api/post/getsinglepost/${blogid}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["SinglePost", blogid],
    queryFn: fetchPost,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
     <SingleBlogCard image={data?.post?.image} blogid={data?.post?.id} content={ data?.post?.content} title={data?.post?.title} author={data?.post?.author || "anonymous" } publishedAt={data?.post?.publishedAt}  />
        
    </>
  );
};

export default SingleBlog;
