import React from "react";
import { useState } from "react";
import "../Todo-list/Styles.css";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
const Component = () => {
  const [inputs, setInputs] = useState("");
  const [inputdatas, setInputdatas] = useState([]);

  // const [inputdata,setInputData]=useState("");
  // function handleChanges(event)
  // {
  //     setInputData(event.target.value);
  // }

  function handleChange(event) {
    setInputs(event.target.value);
  }

  function handleClick() {
    setInputdatas((preData) => {
      return [...preData, inputs];
    });
  }
  console.log(inputdatas);
  return (
    <>
      <div className="container">
        <div className="app-wrapper">
          <h1>Todo-List</h1>

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
              {inputdatas.map((inputdata, index) => {
                return (
                  <h5 key={index} className="list-item"> {inputdata}

                    <MdDelete />
                    <AiFillEdit />
                  </h5>
                );
// <input type="text" key ={index} className="list-item"> {inputdata}</input>

                // onChanges={handleChanges} value={inputdata}
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component;
