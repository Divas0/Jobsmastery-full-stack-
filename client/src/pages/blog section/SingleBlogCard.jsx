import React from 'react'

const SingleBlogCard = ({image, title ,  content, author, publishedAt}) => {
  return (
    <div className='h-auto w-full px-[100px] py-[60px]  flex flex-col'>
        <div className='text-[32px] font-semibold text-dark-color py-[15px]  text-wrap text-center'>{title}</div>
        <div className='flex flex-col gap-[10px] justify-start'> 
        <h5> {author}</h5>
        <h5> {publishedAt}</h5>
        </div>
        <div > 
            <img  className='w-full pb-[20px] object-fill' src={ "https://plus.unsplash.com/premium_photo-1661414415246-3e502e2fb241?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        </div>
        <div> 
            <p> {content}</p>
        </div>


    </div>
  )
}

export default SingleBlogCard