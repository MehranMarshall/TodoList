import React, { useState } from "react";

const TaskList = ({ todoList, setTodoList }) => {
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  const completedTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };
  return (
    <div className="w-full font-bold text-xl flex justify-center items-center flex-col border-solid border-2 border-gray-500 p-2 rounded">
      {todoList.map((task) => {
        return (
          <div className="p-2 mb-2 border-dashed border-black border-b-2">
            <h1
              className="mb-2 p-2"
              style={{ backgroundColor: task.completed ? "green" : "white" }}
            >
              <span className="fas fa-tasks mr-2"></span>
              {task.taskName}
            </h1>
            <button
              className="outline-0 rounded p-2 font-semibold text-xs bg-emerald-600 hover:bg-emerald-500 transition-all border-b-2 border-black mr-2"
              onClick={() => deleteTask(task.id)}
            >
              <span className="fas fa-trash"></span>
            </button>

            <button
              className="outline-0 rounded p-2 font-semibold text-xs bg-emerald-600 hover:bg-emerald-500 transition-all border-b-2 border-black mr-2"
              onClick={() => completedTask(task.id)}
            >
              <span className="fas fa-spell-check"></span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
