import React from "react";
// import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";
import Component from "../Todo-list/Component";
const Todoitems = ({ editItems }) => {
  const [editItem, setEdititem] = useState([]);

  function handleEdit(inputdata) {
    setEdititem((prevData) => {
      return [...prevData, inputdata];
    });
  }

  return (
    <>
      {/* <AiFillEdit  className="button-edit" onClick={editItems}value={editItem}/>  */}
      <Component value={editItem} onClick={handleEdit} />
    </>
  );
};

export default Todoitems;
