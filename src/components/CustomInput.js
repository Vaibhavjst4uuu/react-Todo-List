import React from "react";
const inputStyle = {
  height: "100%",
  borderRadius: "10px",
  padding: "1%",
  border: "1px solid grey",
};
export default function CustInput({ value, setValue }) {
  return (
    <div className="mx-2 w-75">
      <input
        style={inputStyle}
        className="w-100 mh-100"
        type="text"
        name="task"
        value={value}
        placeholder="new task..."
        // onChange={(e)=>{setInput(e.target.value)}}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      
    </div>
  );
}
