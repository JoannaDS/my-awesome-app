import React from "react";
import { DebounceInput } from "react-debounce-input";

const Input = ({ text, setText }) => {
  return (
    <div>
      <DebounceInput
        minLength={0}
        debounceTimeout={500}
        placeholder="Search by seed"
        onChange={(e) => setText(e.target.value)}
        className="searchUser__input"
        value={text}
      />
    </div>
  );
};

export default Input;
