import React from "react";
import { Agenda, TodoLists } from "../../components";
import "./Sidebar.css";

const Sidebar: () => React.JSX.Element = () => {
    return (
        <nav className="menu">
            <Agenda />
            <TodoLists />
        </nav>
    );
};

export default Sidebar;
