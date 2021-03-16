import React from "react";

const Input = ({text,setText}) => {
    



    return(
       
        <input
          className="searchUser__input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search by seed"
        ></input>
  
    )}

export default Input;