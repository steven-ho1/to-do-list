import React, { useEffect, useState } from "react";
import { TodoList } from "../../../common/interfaces";
import { fetchTodoLists } from "../api/todo-api";
import { ListContext } from "./ListContext";

export const ListProvider = ({ children }: { children: React.ReactNode }) => {
    const [todoLists, setTodoLists] = useState<TodoList[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const todoLists = await fetchTodoLists();
                setTodoLists(todoLists);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    return (
        <ListContext.Provider value={{ todoLists, setTodoLists }}>
            {children}
        </ListContext.Provider>
    );
};

export default ListProvider;
