import React from 'react'
import { Link } from 'react-router-dom'
import BlogCard from './BlogCard'

const BlogSection = () => {
  return (
    <div className='h-[482px]  bg-white  px-[100px] pt-[50px]'>
        <div className='flex justify-between'> 
            <h1 className='text-[30px] font-semibold'> Popular blog post</h1>
            <Link className='underline text-blue-700' to={"/blogs"}> Explore the job mastery blog</Link>

        </div>
        <div className='flex scroll-smooth px-[50px] gap-[30px] pt-[20px]'> 
 <BlogCard/>
 <BlogCard/>
 <BlogCard/>
 <BlogCard/>

        </div>

    </div>
  )
}

export default BlogSection