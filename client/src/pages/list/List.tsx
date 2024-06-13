import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTodoLists } from "../../api/todo-api";

const List: () => React.JSX.Element = () => {
    const { id } = useParams();
    const [todoList, setTodoList] = useState({ id: "test", title: "okay" });
    // should be able to go back
    useEffect(() => {
        try {
            (async () => {
                const todoList = await fetchTodoLists(id!);
                setTodoList(todoList);
            })();
        } catch (error) {
            console.error(error);
        }
    }, [id]);
    return <div>{todoList.id}</div>;
};

export default List;
