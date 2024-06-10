import React from "react";
import { TodoList } from "../../../common/interfaces";
export const ListContext = React.createContext<{
    todoLists: TodoList[];
    setTodoLists: React.Dispatch<React.SetStateAction<TodoList[]>>;
} | null>(null);
