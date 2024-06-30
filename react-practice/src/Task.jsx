import React from "react";

const Task = ({ title, children }) => {
  return (
    <div className="task">
      <div className="head flex-center">
        <h2>{title}</h2>
      </div>
      <hr className="divider" />
      <div className="content">{children}</div>
    </div>
  );
};

export default Task;
