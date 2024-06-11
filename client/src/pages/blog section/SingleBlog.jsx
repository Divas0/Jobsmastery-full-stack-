import React from "react";
import { useQuery } from "react-query";
import { useParams, useSearchParams } from "react-router-dom";
import SingleBlogCard from "./SingleBlogCard";
import { useSelector } from "react-redux";

const SingleBlog = () => {
  const { blogid } = useParams();
  const authorId=useSelector((state)=> state.auth.currentUser.authorId)
  const authorName=useSelector((state)=> state.auth.currentUser.username)


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
 const isAuthorTrue= authorId === data?.post?.authorId

  

  return (
    <>
     <SingleBlogCard image={data?.post?.image} blogid={data?.post?.id} content={ data?.post?.content} title={data?.post?.title} author={isAuthorTrue? authorName : "anonymous" } publishedAt={data?.post?.publishedAt}  />
        
    </>
  );
};

export default SingleBlog;
