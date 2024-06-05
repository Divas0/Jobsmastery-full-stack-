import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';


const BlogCard = () => {
    const {blogid}=useParams();
  return (
    <div className='w-[250px] h-[250px] border border-gray-100 text-center rounded-md shadow-md' >
        <img  className="w-full h-[150px] py-[10px]" src='../src/imgs/platform.png'/> 
        <Link className='underline text-blue-600 text-wrap font-semibold' to={`/blogs/:${blogid}`}> Blog header</Link>
        <h1 > AUTHOR NAME </h1>
        <h1> date </h1>
    </div>
  )
}

export default BlogCard