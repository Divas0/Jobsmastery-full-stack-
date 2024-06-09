import React, { useState } from "react";

const BlogFooter = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedItems((prev) => [...prev, value]);
    } else {
      setSelectedItems((prev) => prev.filter((item) => item !== value));
    }
  };

  console.log(selectedItems);

  return (
    <div className="w-full h-[452px] bg-[#FEF4EA] pt-[30px] flex  gap-[20px]">
      <div className="w-[70%] pl-[100px] flex flex-col justify-start gap-[20px]">
        <h1 className="text-red-600 font-semibold">Job mastery</h1>
        <h1 className="text-dark-color font-semibold text-[26px]">
          Subscribe to our Blogs
        </h1>
        <div>
          <p>Pick the blog emails you want to receive</p>
          <div className="flex gap-[20px] py-[30px]">
            <label className="flex gap-[20px]">
              <input
                className="w-[25px] h-[25px] "
                type="checkbox"
                value="marketing"
                checked={selectedItems.includes("marketing")}
                onChange={handleCheckboxChange}
              />{" "}
              Marketing
            </label>
            <label className="flex gap-[20px]">
              <input
                className="w-[25px] h-[25px] "
                type="checkbox"
                value="sales"
                checked={selectedItems.includes("sales")}
                onChange={handleCheckboxChange}
              />{" "}
              Sales
            </label>
            <label className="flex gap-[20px]">
              <input
                className="w-[25px] h-[25px] "
                type="checkbox"
                value="service"
                checked={selectedItems.includes("service")}
                onChange={handleCheckboxChange}
              />{" "}
              Service
            </label>
            <label className="flex gap-[20px]">
              <input
                className="w-[25px] h-[25px] "
                type="checkbox"
                value="website"
                checked={selectedItems.includes("website")}
                onChange={handleCheckboxChange}
              />{" "}
              Website
            </label>
            <label className="flex gap-[20px]">
              <input
                className="w-[25px] h-[25px] "
                type="checkbox"
                value="ai"
                checked={selectedItems.includes("ai")}
                onChange={handleCheckboxChange}
              />{" "}
              AI
            </label>
          </div>
        </div>
        <div> 
            <h1> Email address</h1>
            <input type="text" placeholder="enter your email" className="p-[10px] w-full border border-dark-color " />
            <p className="font-lexendeca">We're committed to your privacy. HubSpot uses the information you provide to us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time. For more information, check out our privacy policy.</p>
        </div>
      </div>
      <div className="bg-red-600">
        <img src="../src/imgs/newsletter.png" />
      </div>
    </div>
  );
};

export default BlogFooter;
