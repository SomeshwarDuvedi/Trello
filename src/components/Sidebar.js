import React from "react";
import Logo from './logo.png';
import { CgTrello } from "react-icons/cg";
import { BsFillPersonFill,BsTable } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { CiViewTable } from "react-icons/ci";
import { FcAssistant } from "react-icons/fc";
import { CgHello } from "react-icons/cg";

const Sidebar = () =>{
  return(
    
      <div className="bg-gray-600 w-64 border-1  border-white border-solid h-[91vh] ">
      {/* Sidebar content */}
      <div className="flex">
      <img src={Logo} className="h-10 w-10 ml-1 mt-4 border rounded-md" />
        <a href="#" className=" font-semibold text-white text-base p-3 ">Trello Workspace <br /><span className="text-sm cursor-text">Free</span></a>
      </div>   
        <hr className="opacity-25" />
        <ul className="p-2">
          <li className="mb-1">
            <a href="#" className=" flex text-white hover:underline p-2">< CgTrello className="h-6 w-6 mr-4"/> Boards</a>
          </li>
          <li className="mb-1">
            <a href="#" className="flex text-white hover:underline p-2"><BsFillPersonFill className="h-6 w-6 mr-4"/>Members</a>
          </li>
          <li className="mb-1">
            <a href="#" className="flex text-white hover:underline p-2"><AiOutlineSetting className="h-6 w-6 mr-4"/>Workkspaces</a>
          </li>
          {/* Add more links */}
        </ul>
        <div className="p-2">
          <a href="#" className="text-white hover:underline p-2 font-serif">Workspace views</a>
          <ul>
          <li className="">
            <a href="#" className="flex text-white hover:underline p-2"><CiViewTable className="h-5 w-5 mr-3 pt-1"/>Table</a>
          </li>
          <li className="">
            <a href="#" className="flex text-white hover:underline p-2"><BsTable className="h-5 w-5 mr-3 pt-1"/>Calendar</a>
          </li>
          
          {/* Add more links */}
        </ul>
        </div>
        <div className="p-2">
          <a href="#" className="text-white hover:underline p-2 font-serif">Your boards</a>
          <ul>
          <li className="">
            <a href="#" className="flex text-white hover:underline p-2"><CgHello className="h-5 w-5 mr-3 pt-1"/>Hello</a>
          </li>
          <li className="">
            <a href="#" className="flex text-white hover:underline p-2"><FcAssistant className="h-5 w-5 mr-3 pt-1"/>Remote Team</a>
          </li>
          
          {/* Add more links */}
        </ul>
        </div>
      
      {/* Other sidebar content */}
    </div>

    
  )
};

export default Sidebar;