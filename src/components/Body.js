import React from "react";
// import Filter from "./Filter";
import List from "./List";

const BodyComponent = () =>{
  return(
    <div className=" w-[100vw] p-3 bg-[url('https://images.unsplash.com/photo-1602582401490-7bef59dfe400?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80')]">
      <div className="flex flex-wrap gap-3">
        {/* <Filter /> */}
        <List />
      </div>
    </div>
  )
};

export default BodyComponent;