import React, { useState } from "react";

export const EditTodoForm = ({ editTodo,task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form className="EditTodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="작업 수정"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        작업 수정
      </button>
    </form>
  );
};
