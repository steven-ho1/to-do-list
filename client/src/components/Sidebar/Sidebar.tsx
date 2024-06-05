import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <nav className="menu">
            <div className="tasks">
                <h2>Tasks</h2>
                <ul>
                    <li>Today</li>
                    <li>Scheduled</li>
                    <li>Calendar</li>
                    <li>Sticky Wall</li>
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
