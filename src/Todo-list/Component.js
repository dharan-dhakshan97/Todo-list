import React from "react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
//import Todoitems from "../Todo-list/Todoitems";
import "../Todo-list/Styles.css";
import { AiFillEdit } from "react-icons/ai";
//  import Edittodo from "../Todo-list/Edittodo";
const Component = () => {
  const [inputs, setInputs] = useState("");
  const [inputdatas, setInputdatas] = useState([]);
  // const [edititems,setEditItems]=useState("");
  // const [value,setValue]=useState();
  // const [delete,setDelete]=useState([]);

  function handleDelete(id) {
    console.log(id, "parameter");
    console.log(inputdatas, "data");

    const data = inputdatas.filter((inputdata) => inputdata !== id);
    setInputdatas(data);
    console.log(data, "filter datas");
  }

  function handleChange(event) {
    setInputs(event.target.value);
  }

  function handleClick() {
    setInputdatas([...inputdatas, inputs]);
    setInputs("");
  }

  //setInputdatas((preData) => {
  // return [...preData, inputs];
  // console.log(inputdatas);

  // function handleEdit()
  // {
  //   const edit=
  // }

  return (
    <>
      <div className="container">
        <div className="app-wrapper">
          <h1 className="header">Todo-List</h1>
          <div>
            <input
              type="text"
              className="task-input"
              placeholder="Add a todolist..."
              onChange={handleChange}
              value={inputs}
            />
            <button
              className="button-add"
              onClick={handleClick}
              value={inputdatas}
            >
              {" "}
              Add Item{" "}
            </button>
          </div>

          <div>
            {/* <h5 key={index}>{inputdata}</h5> */}
            <ul>
              {inputdatas.map((inputdata, id) => {
                return (
                  <h5 key={id} className="list-item" value={inputdata}>
                    {inputdata}
                    <AiFillEdit />
                    {/* <Edittodo inputdata={inputdata}/> */}
                    <MdDelete
                      onClick={() => handleDelete(inputdata)} // calling the final inputdata
                      className="button-delete"
                    />
                  </h5>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component;
