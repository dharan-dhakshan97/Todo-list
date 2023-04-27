import React, { useState } from "react";

export const Edittodo = ({ handleEdit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // edit todo
    handleEdit(value,index);
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
export default Edittodo;