import React from "react";
import { List } from "../../pages";
import Agenda from "../agenda/Agenda";
import "./Sidebar.css";

const Sidebar: () => React.JSX.Element = () => {
    return (
        <nav className="menu">
            <Agenda />
            <List />
        </nav>
    );
};

export default Sidebar;
