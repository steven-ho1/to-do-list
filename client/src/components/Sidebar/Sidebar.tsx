import React from "react";
import { Agenda, TodoListCollection } from "../../components";
import "./Sidebar.css";

const Sidebar: () => React.JSX.Element = () => {
    return (
        <nav className="menu">
            <Agenda />
            <TodoListCollection />
        </nav>
    );
};

export default Sidebar;
