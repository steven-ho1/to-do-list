import React, { useContext } from "react";
import { ListContext } from "../../contexts/ListContext";

const TodoLists = () => {
    const { todoLists } = useContext(ListContext)!;
    return (
        <div>
            <div className="lists">
                <h2>Lists</h2>
                <ul>
                    {todoLists.map((todoList) => {
                        return <li key={todoList.id}>{todoList.title}</li>;
                    })}
                </ul>
            </div>
            <form>
                <input type="text" placeholder="Add new list" />
            </form>
        </div>
    );
};

export default TodoLists;
