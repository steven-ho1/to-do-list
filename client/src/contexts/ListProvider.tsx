import React, { useEffect, useState } from "react";
import { TodoList } from "../../../common/interfaces";
import { devEnvironment } from "../environments/development";
import { ListContext } from "./ListContext";

export const ListProvider = ({ children }: { children: React.ReactNode }) => {
    const [todoLists, setTodoLists] = useState<TodoList[]>([]);

    useEffect(() => {
        const fetchTodoLists = async () => {
            try {
                const response: Response = await fetch(
                    `${devEnvironment.serverUrl}/lists`
                );
                setTodoLists(await response.json());
            } catch (error) {
                console.error(error);
            }
        };
        fetchTodoLists();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ListContext.Provider value={{ todoLists, setTodoLists }}>
            {children}
        </ListContext.Provider>
    );
};

export default ListProvider;
