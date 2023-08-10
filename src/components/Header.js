import React from "react";
import Image from './trello.jpg';
import Image1 from './trello1.jpeg';
import { AiOutlineSearch,AiOutlineQuestionCircle } from "react-icons/ai";
import { TbSchoolBell } from "react-icons/tb";
import { BiAdjust } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";

const Header = () => {
  const backgroundColor =()=>{
    const input = document.getElementById('bg');
    input.style.backgroundColor = 'rgb(75 85 99 / 1)';
    input.style.borderColor ='#4b5563 ';
  }
  return (
    <header className=" bg-gray-100">
      <nav className="bg-gray-800 text-white p-2">
        <div className=" flex gap-4">
          <a href="#" className="block py-1 my-1 hover:bg-gray-100 px-3  pt-2 hover:border rounded-md hover:bg-opacity-20 "><img src={Image} className="h-6 w-7 border rounded-md" /></a>
          <a href="#" className="block py-1 my-1 hover:bg-gray-100 px-3 hover:bg-opacity-20  hover:border rounded-md" ><img src={Image1} className="h-8 w22 border rounded-md" /></a>
          <a href="#" className="block py-1 my-1 hover:bg-gray-100 px-3 hover:bg-opacity-20 hover:border rounded-md font-thin">Workspaces<span className="font-thin p-1">˅</span> </a>
          <a href="#" className="block py-1 my-1 hover:bg-gray-100 px-3 hover:bg-opacity-20 hover:border rounded-md font-thin">Recent <span className="font-thin p-1">˅</span></a>
          <a href="#" className="block py-1 my-1 hover:bg-gray-100 px-3 hover:bg-opacity-20 hover:border rounded-md font-thin">Starred <span className="font-thin p-1">˅</span></a>
          <a href="#" className="block py-1 my-1 hover:bg-gray-100 px-3 hover:bg-opacity-20 hover:border rounded-md font-thin">Templates <span className="font-thin p-1">˅</span></a>
          <a href="#" className="block py-1 my-1 px-6 bg-gray-200 hover:bg-gray-500  border bg-opacity-20 rounded-xl">Create</a>
          <hr className="my-4 border-gray-600" />
          <div className="flex py-2 ml-60 bg-gray-600 mt-1 cursor-pointer  border rounded-xl h-10 ">
            <AiOutlineSearch className="mb-2 mx-2 mt-1 " />
            <input id="bg" type="text" className="bg-gray-600  mx-2 " onClick={backgroundColor} placeholder="Search.."/>
            </div>
          <TbSchoolBell className="mt-2  w-8 h-7 hover:bg-gray-100 hover:bg-opacity-20 hover:border rounded-full" />         
          <AiOutlineQuestionCircle className="mt-2  w-8 h-7 hover:bg-gray-100 hover:bg-opacity-20 hover:border rounded-full" />
          <BiAdjust className="mt-2  w-8 h-7 hover:bg-gray-100 hover:bg-opacity-20 hover:border rounded-full" />
          <VscAccount className="mt-2  w-8 h-7 hover:bg-gray-100 hover:bg-opacity-20 hover:border rounded-full" />
        </div>
      </nav>
    </header>
  )
};

export default Header;