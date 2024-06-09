import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';


const BlogCard = ({author,publishedAt,description,image, title,blogid}) => {
    
  return (
    <div className=' h-auto w-[300px] border border-gray-100 text-center rounded-md ' >
        <img  className="w-full h-[150px] py-[10px]" src={image ||'../src/imgs/platform.png'}/> 
        <Link className='underline text-blue-600 text-wrap font-semibold' to={`/blogs/${blogid}`}> {title}</Link>
        <p className='py-[10px] text-[14px] text-dark-color' > {description || null}</p>
       
        <h1 className='text-start text-[14px] text-dark-color p-[10px]' > {author || "anonymous"}</h1>
        <h1 className='text-start text-[14px] text-dark-color '> { publishedAt || ''} </h1>
    </div>
  )
}

export default BlogCard