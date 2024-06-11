import React, { useState } from "react";
import { Input } from "@/components/ui/input"; // Assuming this is a custom component
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const CreatePost = () => {
  const authorId = useSelector((state) => state.auth.currentUser.authorId);
  const username = useSelector((state) => state.auth.currentUser.username);
  console.log(authorId);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    description: "",
    authorId: authorId,
    publishedAt: "",
    image: null, // Changed to null to handle file input
    category: "",
    author:username
  });

  const handleImage = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const postData = async (formDataObj) => {
    try {
      const response = await fetch("http://localhost:3000/api/post/saveposts", {
        method: "POST",
        body: formDataObj,
      });
      if (!response.ok) {
        toast.error("failed to save post");
      }
      if (response.ok) {
        toast.success("post saved succesfully");
        setFormData("")
      }
      return await response.json();
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  const { mutate, isLoading, error } = useMutation(postData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    for (const key in formData) {
      if (key === "image" && formData[key]) {
        formDataObj.append("image", formData[key]);
      } else {
        formDataObj.append(key, formData[key]);
      }
    }
  
    mutate(formDataObj);
  };

  return (
    <div className="w-full h-auto px-[100px] flex flex-col">
      <div>
        <h1 className="py-[10px] text-center bg-semibold">Create New Blog</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="flex flex-col   gap-[20px]"
      >
        <Input
          type="text"
          name="title"
          value={formData.title}
          placeholder="Title"
          onChange={handleFormData}
        />
          <Input
          type="text"
          name="author"
          value={formData.author}
          placeholder="author"
          onChange={handleFormData}
        />
        <Input
          type="number"
          name="authorId"
          value={formData.authorId}
          placeholder="authorId"
          onChange={handleFormData}
        />
        <Input
          type="text"
          name="category"
          value={formData.category}
          placeholder="Category"
          onChange={handleFormData}
        />
      
        <Input
          type="text"
          name="description"
          value={formData.description}
          placeholder="Description"
          onChange={handleFormData}
        />
          <Textarea
          type="text"
          name="content"
          value={formData.content}
          placeholder="Content"
          onChange={handleFormData}
        />
        <Input type="file" name="image" onChange={handleImage} />
        <Input
          type="date"
          name="publishedAt"
          value={formData.publishedAt}
          onChange={handleFormData}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
      </form>
      {error && <p className="text-red-500">Error: {error.message}</p>}
    </div>
  );
};

export default CreatePost;
