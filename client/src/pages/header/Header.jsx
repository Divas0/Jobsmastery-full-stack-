
import React, { useState } from "react";
import { Languages, UserRound, ChevronDown, Search } from "lucide-react";
import { NavLink, Navigate } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  updateIsLoggedIn } from "@/redux/authSlice";

const Header = () => {
  const dispatch=useDispatch()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const username = useSelector((state) => state.auth.currentUser.username);
console.log(isLoggedIn,username)
  const [searchItem, setSearchItem] = useState("");

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  };
  
  const handlelogOut=()=>{
    dispatch(updateIsLoggedIn(false))
    Navigate("/", {replace:true})

  }

  return (
    <div className="bg-[#FFFFFF] text-sm pt-[20px] pl-[100px] pr-[100px]">
      <div className="top-header flex justify-between items-center">
        <div className="flex justify-start items-center gap-[10px]">
          <div className="flex items-center gap-[10px]">
            <Languages /> English
            <span>
              <ChevronDown />
            </span>
          </div>
          <div>
            <Switch />
          </div>
          <div className="flex items-center gap-[10px]">
            <UserRound />
            <span>Contact Sales</span>
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="flex">
            <input
              type="text"
              onChange={handleSearch}
              value={searchItem}
              className="border-gray-200 border-2 rounded-md w-[200px] h-[40px]"
            />
            <span className="flex justify-center items-center px-2">
              <Search />
            </span>
          </div>
          <div className="flex justify-center items-center">
            <ul className="flex gap-[10px] list-none">
              {isLoggedIn ? (
                <div className="flex gap-[10px]"> 
                <li className="font-bold text-green-500"> {`welcome ${username}`} </li>
                <Link className=" hover:text-hover-color" to={"/create"}> Create </Link>
                </div>
                
              ) : (
                <>
                  <li className=" hover:text-hover-color">
                    <NavLink to="/register">Register</NavLink>
                  </li>
                  <li className=" hover:text-hover-color">
                    <NavLink to="/login">Login</NavLink>
                  </li>
                </>
              )}
              <li className=" hover:text-hover-color">
                <NavLink to="/customersupport">CustomerSupport</NavLink>
              </li>
              <li className=" hover:text-hover-color">
                <NavLink to="/about">About</NavLink>
              </li>
               {isLoggedIn && <li> <button  onClick={handlelogOut} className=" hover:text-red-700"> LogOut </button></li>}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center pb-[32px]">
        <div className="bottom-header flex items-center gap-[20px]">
          <div>
             <Link to={"/"}> <img  src="../src/imgs/logo.png" alt="Logo" className="h-[70px] w-[110px]" /> </Link>
          </div>
          <div className="text-[18px]">
            <select>
              <option>Software</option>
            </select>
          </div>
          <div className="text-[18px]">
            <p>Pricing</p>
          </div>
          <div className="text-[18px]">
            <select>
              <option>Resources</option>
            </select>
          </div>
        </div>
        <div className="flex items-center text-[18px]">
          <h1>Get started free</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
