import React from "react";

function List({ todo, handleDelete, handleUpdate }) {
  return (
    <div className=" w-full flex flex-row  gap-10 px-48">
      <div className=" w-full justify-between rounded flex flex-row h-26 bg-slate-400 p-8">
        <div> {todo.title}</div>
        <div
          className={
            todo.status === "Pending"
              ? "text-red-700 outline rounded-2xl px-3"
              : "text-green-600 outline rounded-2xl px-3"
          }
        >
          {" "}
          {todo.status}
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-6">
        <button
          className="bg-green-600 h-10 px-8 rounded "
          onClick={() => handleUpdate(todo)}
        >
          <p className="text-white">Edit</p>
        </button>

        <button
          className="bg-red-600 h-10 px-8 rounded "
          onClick={() => handleDelete(todo.id)}
        >
          <p className="text-white">Delete</p>
        </button>
      </div>
    </div>
  );
}
export default List;
