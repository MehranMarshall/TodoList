import { useState } from "react";
import TaskList from "./Components//TaskList";
import "./Tailwind/style/style.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const writeTask = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (!newTask) {
      return alert("Please Enter a Task !");
    }
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };
  return (
    <div className="w-80 h-auto shadow-md rounded-md border-gray-500 flex flex-col justify-center items-center p-6 text-center bg-white">
      <div className="w-full mb-3 border-b-2 border-solid border-black pb-2">
        <input
          className="border-solid border-2 border-gray-400 outline-0 rounded-md p-2 mb-4"
          placeholder="Write Task ..."
          value={newTask}
          onChange={writeTask}
        />
        <button
          className="outline-0 rounded p-2 font-semibold bg-emerald-600 hover:bg-emerald-500 transition-all  border-b-2 border-black mb-2"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      <h3 className="font-bold">TODO Lists :</h3>
      <br />
      <TaskList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
