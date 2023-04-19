import React from "react";
import { useState, useEffect } from "react";
import "../Todo-list/Styles.css";
import Todoitems from "../Todo-list/Todoitems";
// import { MdDeleteSweep } from "react-icons/md";

const Components = () => {
  const [input, setInput] = useState("");
  const [datas, setDatas] = useState([]);
  // const [deleteitem, setDeleteitem] = useState("");

  // const [inputdata,setInputdata]=useState("");
  function handleChange(e) {
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

  function handleClick() {
    if (!input) {
    } else {
      setDatas([...datas, input]);
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
  //   function handleDelete(id) {
  //     // const deleteData = data.filter((data) => data !== deleteData);
  //     // setDeleteitem(deleteData);
  // setDeleteitem(datas.filter((data)=>data.index!==id));
  //   }
  useEffect(() => {
    console.log("rerender");
  }, [input]);
  return (
    <>
      <div className="container">
        <div className="app-wrapper">
          <h1>Todo-List</h1>
          <div>
            <input
              type="text"
              className="task-input"
              placeholder="Enter a todolist..."
              value={input}
              onChange={handleChange}
            />
            <button className="button-add" onClick={handleClick} value={datas}>
              Add Items
            </button>
          </div>
        </div>
      </div>
      <div className="list-item">
        {datas.map((data, index) => {
          return <Todoitems key={index} text={data} className="list-item" />;
        })}
      </div>
    </>
  );
};

export default Components;
