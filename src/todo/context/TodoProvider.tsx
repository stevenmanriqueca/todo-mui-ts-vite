import { useReducer } from "react";
import { TodoState } from "../interfaces/context/interfaces";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./todoReducer";

const INITIAL_STATE: TodoState = {
  todos: [
    {
      id: 9876,
      description: "Hacer de comer",
    },
    {
      id: 12312,
      description: "Hacer ejercicio",
    },
    {
      id: 5555,
      description: "Hacer compras",
    },
  ],
  todosCompleted:[],
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: Props) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  //Actions

  const AddTodo = (id: number, description: string):void => {
    dispatch({ type: "addTodo", payload: { id, description } });
  };

  const DeleteTodo = (id:number):void => {
    dispatch({type:"deleteTodo", payload:{id}})
  }

  const CompleteTodo = (id:number, description:string):void => {
    dispatch({type:"completeTodo", payload:{id, description}})
  }

  return (
    <TodoContext.Provider value={{ todoState, AddTodo, DeleteTodo, CompleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
