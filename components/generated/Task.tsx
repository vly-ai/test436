import React from "react";

const Task = ({
  isCompleted,
  text,
}: {
  isCompleted: string;
  text: boolean;
}) => {
  return (
    <div className="flex flex-row gap-4">
      <p>{isCompleted ? "complete" : "not complete"}</p>
      <p>{text}</p>
    </div>
  );
};

export default Task;
