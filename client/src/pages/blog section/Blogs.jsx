import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import VideoSection from "./VideoSection";
import PodcastSection from "./PodcastSection";
import ExploreSection from "./ExploreSection";
import BlogFooter from "./BlogFooter";

const Blogs = () => {
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
  const id = data?.allPosts[13]?.id;
  const generalData = data?.allPosts?.filter((blog) => {
    return blog?.category === "general";
  });
  const marketingData = data?.allPosts?.filter((blog) => {
    return blog?.category === "marketing";
  });
  const aiData = data?.allPosts?.filter((blog) => blog?.category === "Ai");
  const salesData = data?.allPosts?.filter((blog) => {
    return blog?.category === "sales";
  });

  const websiteData=data?.allPosts.filter((blog)=>{
    return blog?.category==="technology"
  })
  console.log(websiteData)



  return (
    <div className="h-auto w-full px-[100px] py-[30px] bg-[#F6F5F2]">
      {/* general section */}
      <div className="flex gap-[20px] pt-[20px]  ">
        <div className="flex flex-col w-[50%] gap-[10px] bg- [#fef4ea]">
          <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Link to={`/blogs/${id}`} className="px-[20px] pt-[20px] pb-[10px]">
            {" "}
            <h1 className="text-[26px] text-dark-color ">
              {data?.allPosts[13]?.title}
            </h1>
            <p className=" text-[16px] text-dark-color pt-[10px] ">
              {" "}
              {data?.allPosts[13]?.description}
            </p>
          </Link>
          <p className="text-dark-color text-[16px] pb-[10px] px-[20px]">
            {" "}
            {data?.allPosts[13]?.author || "unknown"}{" "}
          </p>
        </div>

        <div className="pl-[20px]  font-semibold shadow-md">
          <h1 className="p-[10px]"> Featured Posts</h1>
          {data?.allPosts?.slice(4, 9).map((blog) => (
            <Link className="" to={`/blogs/${blog?.id}`} key={blog?.id}>
              <li className="px-[20px] py-[10px] flex flex-col    text-[#212529] ">
                {blog?.title}
              </li>
              <div className=" p-[20px] flex justify-between text-black ">
                <h1 className="text-[14px] text-dark-color font-lexenddeca ">
                  {" "}
                  {blog?.author || "anonymous"}
                </h1>
                <h1 className="text-[14px] text-dark-color font-lexenddeca ">
                  {" "}
                  {blog?.publishedAt}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex p-[30px] gap-[15px] ">
        {generalData?.map((blog) => (
          <BlogCard
            blogid={blog?.id}
            author={blog?.author}
            publishedAt={blog?.publishedAt}
            title={blog?.title}
            description={blog?.description}
          />
        ))}
      </div>
      {/* /* marketing section */}
      <div className="p-[20px]">
        <div className=" flex justify-between">
          <h1 className="font-semibold text-[32px]"> Marketing </h1>

          <Link to={"/marketing"} className="underline text-blue-700">
            {" "}
            see more marketing articles{" "}
          </Link>
        </div>
        <div className="">
          {marketingData?.map((blog) => (
            <div className="p-[20px] flex flex-wrap ">
              <h1 className="font-semibold py-[10px]"> {blog?.title}</h1>
              <h className="text-wrap"> {blog?.description}</h>
            </div>
          ))}
        </div>
      </div>

      {/* Ai section */}
      <div className="py-[20px]">
        <div className=" flex justify-between">
          <h1 className="font-semibold text-[32px]"> Next in Ai </h1>

          <Link to={"/nextinai"} className="underline text-blue-700">
            {" "}
            see more articles from next in Ai{" "}
          </Link>
        </div>
        <div className="flex gap-[20px] pt-[20px]  ">
          <div className="flex flex-col w-[50%] gap-[10px] bg- [#fef4ea]">
            <img
              src={
                "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
            <Link to={`/blogs/${id}`} className="px-[20px] pt-[10px] pb-[10px]">
              <h1 className="text-[26px]  ">{aiData[0].title}</h1>
              <p className=" text-[16px] text-dark-color pt-[10px] ">
                {aiData[0]?.description}
              </p>
            </Link>
            <div className="flex justify-between items-center">
              <p className="text-dark-color text-[16px] pb-[10px] px-[20px]">
                {aiData[0]?.author || "unknown"}
              </p>
              <p className="text-dark-color text-[16px]">
                {" "}
                {aiData[0]?.publishedAt || ""}
              </p>
            </div>
          </div>
          <div className="pl-[20px]  font-semibold shadow-md">
            <h1 className="p-[10px]"> Featured Posts</h1>
            {aiData?.map((blog) => (
              <Link className=" " to={`/blogs/${blog?.id}`} key={blog?.id}>
                <li className="px-[20px] py-[10px] flex flex-col    text-[#212529] ">
                  {blog?.title}
                </li>
                <div className=" p-[20px] flex justify-between text-black ">
                  <h1 className="text-[14px] text-dark-color font-lexenddeca ">
                    {" "}
                    {blog?.author || "anonymous"}
                  </h1>
                  <h1 className="text-[14px] text-dark-color font-lexenddeca  ">
                    {" "}
                    {blog?.publishedAt}
                  </h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* video section */}
      <VideoSection />

      {/* service section */}

      <div className="pt-[20px] ">
        <div className="flex justify-between py-[20px]"> 
      <h1 className="font-semibold text-[32px]"> Services</h1>

<Link to={"/srevices"} className="underline text-blue-700">
  {" "}
  see more service articles </Link>
  </div>
      <div className="flex flex-wrap pb-[30px] ">
          {generalData?.map((blog) => (
            
            <div
              className="flex gap-[20px] w-full md:w-1/2 lg:w-1/3 p-2"
              key={blog?.id}
            >
              <div className="w-[350px] h-[150px] mr-4">
                <img
                  src="../src/imgs/service.png"
                  alt={blog?.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div> 
              <Link  to={`/blogs/${blog?.id}`}>  <h1 className="text-[14px] font-semibold">{blog?.title}</h1> </Link>
                <p className="text-[14px] text-color-dark">
                  {blog?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-[30px]">
          <div className="">
            <img src="../src/imgs/service.png" />
          </div>
          <div className="flex  flex-col justify-center items-center gap-[20px]">
            <h1> An Introduction to Digital Marketing</h1>
            <p className="text-wrap ">
              {" "}
              Learn the basics of digital marketing and explore different ways
              to reach your ideal customer.
            </p>
          </div>
        </div>
      </div>

      {/* sales section */}
      <div className="py-[30px]">
        <div className="flex justify-between "> 
         <h1 className="font-semibold text-[32px]"> Sales</h1>

          <Link to={"/marketing"} className="underline text-blue-700">
            {" "}
            see more sales articles{" "}
          </Link>
          </div>
        </div> <div className=" flex justify-between pb-[10px]">
        
        <div className="flex flex-wrap ">
          {salesData?.map((blog) => (
            <div
              className="flex gap-[20px] w-full md:w-1/2 lg:w-1/3 p-2"
              key={blog?.id}
            >
              <div className="w-[350px] h-[150px] mr-4">
                <img
                  src="../src/imgs/service.png"
                  alt={blog?.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
              <Link to={`/blogs/${blog?.id}`}>  <h1 className="text-[14px] font-semibold">{blog?.title}</h1> </Link>
                <p className="text-[14px] text-color-dark">
                  {blog?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* podcast section */}
      <PodcastSection/>

      {/* website section */}
      <div className="flex gap-[20px] pt-[20px]  ">
        <div className="flex flex-col w-[50%] gap-[10px] bg- [#fef4ea]">
          <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Link to={`/blogs/${id}`} className="px-[20px] pt-[20px] pb-[10px]">
            {" "}
            <h1 className="text-[26px] text-dark-color ">
              {data?.allPosts[13]?.title}
            </h1>
            <p className=" text-[16px] text-dark-color pt-[10px] ">
              {" "}
              {data?.allPosts[13]?.description}
            </p>
          </Link>
          <p className="text-dark-color text-[16px] pb-[10px] px-[20px]">
            {" "}
            {data?.allPosts[13]?.author || "unknown"}{" "}
          </p>
        </div>

        <div className="pl-[20px]  font-semibold shadow-md">
          <h1 className="p-[10px]"> Featured Posts</h1>
          {websiteData.map((blog) => (
            <Link className="" to={`/blogs/${blog?.id}`} key={blog?.id}>
              <li className="px-[20px] py-[10px] flex flex-col    text-[#212529] ">
                {blog?.title}
              </li>
              <div className=" p-[20px] flex justify-between text-black ">
                <h1 className="text-[14px] text-dark-color font-lexenddeca ">
                  {" "}
                  {blog?.author || "anonymous"}
                </h1>
                <h1 className="text-[14px] text-dark-color font-lexenddeca ">
                  {" "}
                  {blog?.publishedAt}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
       
       {/* explore section  */}
       <ExploreSection/>

       {/* blogs Footer  */}
       <BlogFooter/>
      
      
    </div>
  );
};

export default Blogs;
