import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ListContext } from "../../contexts/ListContext";

const TodoListCollection = () => {
    const { todoLists } = useContext(ListContext)!;
    return (
        <div>
            <div className="lists">
                <h2>Lists</h2>
                <ul>
                    {todoLists.map((todoList) => {
                        return (
                            <li key={todoList.id}>
                                <Link to={`/lists/${todoList.id}`}>
                                    {todoList.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <form>
                <input type="text" placeholder="Add new list" />
            </form>
        </div>
    );
};

export default TodoListCollection;
