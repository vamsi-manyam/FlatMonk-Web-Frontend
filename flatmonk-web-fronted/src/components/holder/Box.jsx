import React from "react";

function Box({ title, text, component }) {
  return (
    <div className="p-4 my-2 bg-slate-300 rounded">
      <h4>{title}</h4>
      <p>{text}</p>
      <div>{component}</div>
    </div>
  );
}

export default Box;
