import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actionType";

const initialState = {
  todos: [ ],
};
export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, payload],
      };
    case DELETE_TODO:
      return { todos: state.todos.filter((todo) => todo.id !== payload) };
    case UPDATE_TODO:
      return{
        todos:state.todos.map(todo =>{
          if(todo.id===payload.id){
            return payload;
          }
          return todo;
        }),
      }
    default:
      return state;
  }
};
