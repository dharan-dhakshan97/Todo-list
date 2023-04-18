import React from 'react'
import {useState} from 'react';
import "../Todo-list/Styles.css";
import Todoitems from "../Todo-list/Todoitems";
import {MdDeleteSweep} from "react-icons/md";

const Components = () => {

const[input,setInput]=useState("");
const [datas,setDatas]=useState([]);
const [deleteitem,setDeleteitem]=useState("");

// const [inputdata,setInputdata]=useState("");
function handleChange(e)
{
  setInput(e.target.value);
  // console.log(input);
}
// function handleClick()
// {
//   setDatas((prevData)=>{
//     return [...prevData,input];
//    // setInputs(" ");
//   }
//    )}

// function handleClick()
// {
//   if(setDatas((prevData)=>
//   {
//     return [...prevData,input];
//   }))
//     else 
//     {
//     (setInputs(" "));
//     }


   // it will blank the input text box when your click the add button...
// console.log(datas);





function handleClick()
{
  if(!input)
  {

  }
  else{
    setDatas([...datas,input]);
    setInput(" ");
  }
}

// function handleChanges(e,index)
// {
//   const data=[...datas]
//   data[index]=e.target.value;
//   setInputdata(data);
// }

// Delete an items....
function handleDelete(data)
{const deleteData=data.filter((data)=>data!==deleteData);
  setDeleteitem(deleteData);
}


  return (
    <>
     <div className="container">
  <div className="app-wrapper">
<h1>Todo-List</h1>
<div>
<input type="text" className="task-input" placeholder="Enter a todolist..." value={input} onChange={handleChange}/>
<button className="button-add" onClick={handleClick} value={datas} >Add Items</button>
</div>
<div>

  {/* <li className="list-item"> */}
  {datas.map((data,index)=>{
  return(
    <h4 className="list-item">
    <Todoitems  key={index} text={data}/> </h4> 
  )} 
  )}
  </div>

  {/* console.log(datas);  */}
  
    {/* <input type="text" onChange={e=>handleChanges(e,index)} value={inputdata}/> */}
   

  {/* <button className="button-complete task-button">
    <i className="fa fa-check-circle"></i>
  </button>

  <button className="button-edit-task-button">
    <i className="fa fa-edit"></i>
  </button> */}


  {/* <button classname="button-delete task-button" onClick={handleDelete}>
    <i className="fa fa-trash"></i>
  </button> */}

<MdDeleteSweep className="button-delte task-button" onClick={()=>handleDelete(data)} value={deleteitem}/>

</div>
</div>



    </>
  )
}

export default Components;
