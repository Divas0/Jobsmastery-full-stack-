// import About from "@/pages/About/About";
// import Contact from "@/pages/Conatct/Contact";
// import Login from "@/pages/login/Login";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Root from "@/components/shared/Root";
// import Register from "@/pages/register/Register";
// import Home from "@/pages/Home/Home";
// import Blogs from "@/pages/blog section/Blogs";
// import SingleBlog from "@/pages/blog section/SingleBlog";
// import CustomerSupportPage from "@/pages/support section/CustomerSupportPage";
// import CreatePost from "@/pages/create/CreatePost";
import { lazy, } from "react";
import ProtectedRoute from "@/components/shared/ProtectedRoute";



const CreatePost = lazy(() => import("../pages/create/CreatePost"));
const CustomerSupportPage = lazy(() =>
  import("../pages/support section/CustomerSupportPage")
);
const SingleBlog = lazy(() => import("../pages/blog section/SingleBlog"));
const Blogs = lazy(() => import("../pages/blog section/Blogs"));
const Home = lazy(() => import("../pages/Home/Home"));
const Register = lazy(() => import("../pages/register/Register"));
const Login = lazy(() => import("../pages/login/Login"));
const Contact = lazy(() => import("../pages/Conatct/Contact"));
const About = lazy(() => import("../pages/About/About"));
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Home />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/customersupport" element={<Contact />} />
        <Route path="/register" element={ <Register />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:blogid" element={<SingleBlog />} />
        <Route path="/customersupport" element={<CustomerSupportPage />} />
        <Route path="/create" element={ <ProtectedRoute> <CreatePost /> </ProtectedRoute>} />
        </Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
