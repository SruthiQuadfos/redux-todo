import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO, UPDATE_TODO } from "../store/actionType";

function TodoForm({ todo, showModal, setShowModal ,setUpdateData,updateData}) {
  const dispatch = useDispatch();
  const STATUS = ["Pending", "Completed"];
  const initialState = { title: "", status: "" };
  const [formData, setFormData] = useState(initialState);
  const { title, status } = formData;
  /////////////////////////add//////////////////////////////////////
  const handleAddTodo=()=>{
   
    setShowModal(true)
    setUpdateData("");
  }
  console.log("updateData",updateData)
  // //////////////////////////add input value//////////////////////
  const handleInputChange = (e, key) => {
    const { value } = e.target;
    setFormData({ ...formData, [key]: value });
  };
  // //////////////////////////to submit form //////////////////////

  const handleSubmit = () => {
    dispatch({ type: ADD_TODO, payload: { id: Math.random(), ...formData } });
    resetFormData()
    setShowModal(false)
  };
///////////////////////Reset Formdata////////////////////
const resetFormData=()=>{
  setFormData(initialState)
  
}
  //////////////////////////////update////////////////
  useEffect(() => {
    if (todo) {
      setFormData(todo);
    }
  }, [todo]);

  const handleUpdate=()=>{
    dispatch({type: UPDATE_TODO,payload:formData});
    resetFormData();
    setShowModal(false)
    
  }
  return (
    <>
      <div className="w-full flex justify-center align-middle ">
        {/*******************************Add Button************************************ */}
        <button
          onClick={ handleAddTodo}
          className="w-auto flex px-4 py-1 rounded justify-center align-middle bg-blue-400 font-semibold"
        >
          Add Todo
        </button>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6   max-w-3xl">
              <div className="border-0 rounded-lg items-center justify-center shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/**************************header****************************************/}
                <h3 className="text-3xl  font-semibold px-40 pt-12">
                  {todo ? "Update Todo" : "Add To Do"}
                  <hr />
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>

                {/************************************Form************************************/}
                <form onSubmit={handleSubmit}>
                  <div className="px-8 w-full flex flex-col gap-3">
                    <input
                      id="title"
                      value={title}
                      type="text"
                      name="name"

                      placeholder={todo?"Update Todo":"Add Todo"}
                      className="p-3 outline  rounded"
                      onChange={(e) => handleInputChange(e, "title")}
                    />
                    <select
                      id="status"
                      value={status}
                      onChange={(e) => handleInputChange(e, "status")}
                      className="p-3 outline  rounded"
                    >
                      <option value="">Select Status</option>
                      {STATUS.map((st) => (
                        <option value={st}>{st}</option>
                      ))}
                    </select>
                  </div>
                </form>

                {/****************************************** Footer Buttons********************************/}
                <div className="flex items-center justify-end p-6  rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  {todo ? (
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleUpdate}
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Create
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
export default TodoForm;
