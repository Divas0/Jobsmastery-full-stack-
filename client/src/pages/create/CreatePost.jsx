import React, { useState } from 'react';
import { Input } from "@/components/ui/input"; // Assuming this is a custom component
import { useMutation } from 'react-query';

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    description: "",
    author: "",
    publishedAt: "",
    image: null, // Changed to null to handle file input
    category: ""
  });

  const handleImage = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0]
    }));
  };

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const postData = async (formDataObj) => {
    try {
      const response = await fetch("http://localhost:3000/api/post/saveposts", {
        method: "POST",
        body: formDataObj, 
        
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  // Setup the mutation
  const { mutate, isLoading, error } = useMutation(postData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    for (const key in formData) {
      if (key === 'image' && formData[key]) {
        // Append the file directly
        formDataObj.append('image', formData[key]);
      } else {
        // Append other fields as text
        formDataObj.append(key, formData[key].toString());
      }
    }

    console.log(formDataObj)
    // Trigger the mutation with the FormData object
    mutate(formDataObj);
  };

  return (
    <div className='w-full h-auto px-[100px] flex flex-col'>
      <div>
        <h1>Create New Blog</h1>
      </div>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className='flex flex-col gap-[10px]'>
        <Input type="text" name="title" value={formData.title} placeholder="Title" onChange={handleFormData} />
        <Input type="text" name="author" value={formData.author} placeholder="Author" onChange={handleFormData} />
        <Input type="text" name="category" value={formData.category} placeholder="Category" onChange={handleFormData} />
        <Input type="text" name="content" value={formData.content} placeholder="Content" onChange={handleFormData} />
        <Input type="text" name="description" value={formData.description} placeholder="Description" onChange={handleFormData} />
        <Input type="file" name="image" onChange={handleImage} />
        <Input type="date" name="publishedAt" value={formData.publishedAt} onChange={handleFormData} />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {error && <p className="text-red-500">Error: {error.message}</p>}
    </div>
  );
};

export default CreatePost;
