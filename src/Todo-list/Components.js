import React from 'react'
import {useState} from 'react';
import "../Todo-list/Styles.css";
import Todoitems from "../Todo-list/Todoitems";
const Components = () => {

const[input,setInput]=useState("");
const [datas,setDatas]=useState([]);


function handleChange(e)
{
  setInput(e.target.value);
  // console.log(input);
}
function handleClick()
{
  setDatas((prevData)=>{
    return [...prevData,input];
   // setInputs(" ");
  }
  
  )}


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

  return (
    <>
     <div className="container">
  <div className="app-wrapper">
<h1>Todo-List</h1>
<div>
<input type="text" className="task-input" value={input} onChange={handleChange}/>
<button className="button-add" onClick={handleClick} value={datas}>Add Items</button>
</div>
<div>
<div>
<ul>
  {datas.map((data,index)=>{
  return(
    <Todoitems key={index} text={data}/>
  )} 
  )}
  </ul> </div>
  {/* console.log(datas);  */}
  </div>
   </div></div>


    </>
  )
}

export default Components;
