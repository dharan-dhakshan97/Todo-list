import React from 'react'
import Component from "./Todo-list/Component";
import "./Todo-list/Styles.css";
// import Todoitems from "./Todo-list/Todoitems";
const App = ( ) => {

  return (

    <>
    <Component/> 
    {/* <Todoitems/> */}
    </>
  )
}

export default App;


// import React from "react";
// import "./Styles.css";
// import { useState } from "react";
// const Todo = () => {
//   const [inputvalue, setInputsvalue] = useState("");
//   function handleChange(e) {
//     setInputsvalue(e.target.value);
//   }

//   const [inputdatas, setInputdatas] = useState([]);
//   function handleClick() {
//     setInputdatas((prevData) => [...prevData, inputvalue]);
//   }
//   console.log(inputdatas);



//   return (
//     <>
//       <form>
//         <div className="container">
//           <div className="app-wrapper">
//             <h1>Todo-List</h1>
//             <div>
//               <input
//                 type="text"
//                 placeholder="write here..."
//                 className="task-input"
//                 onChange={handleChange}
//                 value={inputvalue}
//               />
//               <button
//                 className="button-add"
//                 onClick={handleClick}
//                 value={inputdatas}
//               >
//                 Add Lists
//               </button>
//             </div>{" "}
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };

// export default Todo;






