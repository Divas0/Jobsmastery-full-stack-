import React from 'react'
import { Link } from 'react-router-dom'
import BlogCard from './BlogCard'
import { useQuery } from 'react-query'

const BlogSection = () => {
  const allPosts = async () => {
    return await fetch("http://localhost:3000/api/post/allposts").then((data) =>
      data.json()
    );
  };
  const { data, isLoading, error } = useQuery({
    queryKey: [allPosts],
    queryFn: allPosts,
  });

  if (isLoading) {
    return <div> Loading...</div>;
  }
  if (error) {
    return console.log(error);
  }
  return (
    <div className='h-[482px]  bg-white  px-[100px] pt-[50px]'>
        <div className='flex justify-between'> 
            <h1 className='text-[30px] font-semibold'> Popular blog post</h1>
            <Link className='underline text-blue-700' to={"/blogs"}> Explore the job mastery blog</Link>

        </div>
        <div className='flex scroll-smooth px-[50px] gap-[30px] pt-[20px] '> 
 {data?.allPosts?.slice(4,8).map((blog)=>(
  <BlogCard  image={ blog?.image} title={blog?.title} author={blog?.author} blogid={blog?.id} publishedAt={data?.publishedAt}/>

 ))}

        </div>

    </div>
  )
}

export default BlogSection