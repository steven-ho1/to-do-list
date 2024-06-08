import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar: () => React.JSX.Element = () => {
    return (
        <nav className="menu">
            <div className="tasks">
                <h2>Tasks</h2>
                <ul>
                    <li>
                        <Link to="/today">Today</Link>
                    </li>
                    <li>
                        <Link to="/scheduled">Scheduled</Link>
                    </li>
                    <li>
                        <Link to="/calendar">Calendar</Link>
                    </li>
                </ul>
            </div>
            <div className="lists">
                <h2>Lists</h2>
                <ul>
                    <li>list1</li>
                    <li>list2</li>
                </ul>
            </div>
            <div className="new-list-input">
                <input type="text" placeholder="Add new list" />
            </div>
        </nav>
    );
};

export default Sidebar;
