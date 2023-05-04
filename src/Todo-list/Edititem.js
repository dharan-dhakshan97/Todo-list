// import React from 'react'

// const Edititem = (props) => {

//   return (
//     <>

//     <button onClick={()=>props.handleEdit('welcome')}>Update</button>

//     </>
//   )
// }

// export default Edititem;

import { useState } from "react";

export default function Edititem() {
  const [title, setTitle] = useState("");
  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTitle("");
          Edititem(title);
        }}
      >
        Update
      </button>
    </>
  );
}
