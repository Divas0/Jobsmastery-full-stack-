import React, { useState } from "react";
import ToggleButton from "@/components/shared/ToggleButton";
import { Languages, UserRound, ChevronDown , Search} from "lucide-react";
import {Link, NavLink} from "react-router-dom"


const Header = () => {
  const [searchItem, setSearchItem]=useState("")

   const handlesearch=(e)=>{
    setSearchItem(e.target.value)
    
   }
  return (
    <div className="bg-[#FFFFFF]  text-sm  pt-[20px] pl-[100px] pr-[100px]">
      <div className=".top-header flex justify-between items-center  ">
        <div className="flex justify-start items-center  ">
          <div className="flex justify-center gap-[10px] ">
            <Languages /> English{" "}
            <span>
              <ChevronDown />
            </span>
          </div>
          <div>
            <ToggleButton />
          </div>
          <div className="flex gap-[10px] ">
            <UserRound />
            <span> Contact Sales </span>
          </div>
        </div>
        <div className="flex gap-[10px]">
           <div className="flex "> 
            <input type="text "  onChange={handlesearch} value={searchItem} className="border-gray-200 border-2 rounded-md border-1 focus-within:none w-[200px] h-[40px] "/>
            <span className="flex justify-center items-center"> <Search /></span>
        </div>
        <div className="flex justify-center items-center"> 
        <li className="flex "> 
            <ul className="flex gap-[10px] "> 
                <NavLink to={"/login"}> Login</NavLink>
                <NavLink to={"/customersupport"}>  customer support </NavLink>
                <NavLink to={"/about"}> About</NavLink>
            </ul>
        </li>
        </div>

        </div>
      </div>
      <div className="flex justify-between items-center ">
      <div className=".bottom-header flex justify-start items-center  gap-[20px] pb-[32px]">
        <div> 
        <img src="../src/imgs/logo.png" className="h-[70px] w-[110px] "/>
        </div>
        <div className="text-[18px]"> 
          <select> 
            <option>
              Software
            </option>
          </select>

        </div>

        <div className="text-[18px]"> 
          <p> Pricing</p>
        </div>
        <div className="text-[18px]"> 
        <select> 
            <option>
              Resources
            </option>
          </select>


        </div>
       
       
      </div>
      <div className="flex  justify-center items-center text-[18px]"> <h1> Get started free</h1></div>
      </div>
    </div>
  );
};

export default Header;
