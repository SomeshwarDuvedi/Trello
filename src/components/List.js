import React from "react";
import Card from "./Card";
import AddNewItem from "./AddNewItems";
import { useSelector } from "react-redux";

const List = () => {
  const listItem = useSelector(store => store.listSlice.list);
  return (
    <>
      {listItem.map((list) => (
        <div className="p-3 w-1/4 " key={list.id}>
          <div className="p-3  bg-gray-200 shadow-md rounded-md">
            <div className="mb-4" >
              {list.title}
            </div>
            {list?.children?.length>0 &&
             list.children.map((children)=>
             <Card key={children.id} cardInfo={children} />)}
            <div className="mt-3">
              <AddNewItem type="card" parentId={list.id} />
            </div>
          </div>
        </div>
      ))}
      <div className="p-3 w-1/4">
        <div className="p-3 bg-gray-200 shadow-md rounded-md">
          <AddNewItem />
        </div>
      </div>
    </>
  )
};

export default List;



