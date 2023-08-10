import React, { useEffect, useState } from "react";
import { addList,addCard } from "../store/listSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const AddNewItem = ({type,parentId}) => {
  const [inputVal, setInputVal] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const payload = type
    ? { id: Math.random(), title: inputVal, parentId: parentId }
    : { id: Math.random(), title: inputVal };

  const dispatch = useDispatch();


  
  const submitHandler = async (event) => {
    event.preventDefault();
    
    if(type){
      dispatch(addCard(payload))
      try {
        const response = await fetch('http://localhost:8080/demo', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    else{
    dispatch(addList(payload));
    try {
      const response = await fetch('http://localhost:8080/demo', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  hideForm();
  setInputVal("");
}
  

const openForm = () => {
  setIsFormVisible(true);
  }

  const hideForm = () => {
    setIsFormVisible(false);
  }
  const updateInput = (e)=>{
    setInputVal(e.target.value)
  }
  return (
    <div>
      <button onClick={openForm}>{type?"+ Add a card":"+ Add another list"}</button>
      {isFormVisible && (
        <form onSubmit={submitHandler} className="mt-3">
          <input 
        value={inputVal} 
        className="w-full h-10 p-2 shadow-md rounded-md"
        onChange={updateInput}
        placeholder={type?"Enter card name":"Enter list name"} />
        <div className="mt-3">
          <button onClick={hideForm} className="mr-3">Cancel</button>
          <button onClick={submitHandler} className="px-3 py-1 bg-blue-500">Save</button>
        </div>
      </form>)
      }
    </div>
  )
};

export default AddNewItem;


// const getList = async() =>{
//   try {
//     const response = await fetch('http://localhost:8080/demo', {
//       method: 'GET',
//     });
  
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
  
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// const getCard = async() =>{
//   try {
//     const response = await fetch('http://localhost:8080/demo', {
//       method: 'GET',
//     });
  
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
  
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// useEffect(()=>{
//   if(type){
//     getList();
//   }else{
//     getCard();
//   }
// })