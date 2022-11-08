import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import { useDispatch } from "react-redux";
import { DELETE_TODO } from "./store/actionType";
function App() {
  const todos = useSelector((state) => state.todos);
  const [showModal, setShowModal] = React.useState(false);
  const [updateData, setUpdateData] = useState(null);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };
  const handleUpdate = (todo) => {
    setUpdateData(todo);
    setShowModal(true)
  };
  return (
    <div className="bg-blue-200 h-screen	">
      <header>
        <h1 className="w-full flex text-3xl justify-center align-middle font-bold underline py-10">
          {" "}
          To Do App
        </h1>
      </header>
{/***************************** Todo Adding And Updating ***************************/}

      <TodoForm
      todo={updateData}
      showModal={showModal}
      setShowModal={setShowModal}
      updateData={updateData}
      setUpdateData={setUpdateData}
      />
{/***************************** Todo Listing ***************************/}
      <div className=" w-full flex flex-col p-12 gap-1">
        {todos.map((todo) => (
          <List
            key={todo.title}
            todo={todo}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
