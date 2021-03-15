import React, {useState} from "react";

const Input = () => {

    const [text2, setText2]= useState('')

    return(
        <input value={text2} onChange={(e)=> setText2(e.target.value) }></input>
//   <div className="container d-flex">
//     <input
//       className="searchUser__input form-control form-control-lg col-4"
//       type="text"
//       value={text}
//       name="userSearch"
//       placeholder="Search for user..."
//       onChange={(e)=> setText(e.target.value)}
//     ></input>
//   </div>
    )
  
}

export default Input;